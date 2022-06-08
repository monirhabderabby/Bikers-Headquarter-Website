import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const {data:p, isLoading, refetch} = useQuery("singleProduct", ()=> fetch(`https://hidden-thicket-51084.herokuapp.com/product/${id}`).then(res=> res.json()))

  

  //handleDeliver
  const deliverQuantity = () =>{
    const updatedQuantity = parseInt(p?.quantity) - 1;
  const url = `https://hidden-thicket-51084.herokuapp.com/product/${id}`;
  fetch(url, {
      method: "PUT",
      headers:{
          "content-type": "application/json"
      },
      body: JSON.stringify({quantity : updatedQuantity})
  }) 
  .then(res=> res.json())
  .then(data=> {
    if(data.modifiedCount > 0){
      refetch()
    }
  })
  
} 

//handleRestockForm
const handleRestockForm = e =>{
  e.preventDefault()
  const inputStock = e.target.restockNumber.value;
  const oldQuantity  = p.quantity;
  const newQuantity = parseInt(oldQuantity)+parseInt(inputStock);
  const url = `https://hidden-thicket-51084.herokuapp.com/restock/${id}`;
    fetch(url, {
        method: "PUT",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({quantity : newQuantity})
    }) 
    .then(res=> res.json())
    .then(data=> {
      if(data.modifiedCount > 0){
        e.target.restockNumber.value = "";
        refetch()
      }
    })
    
}


  if(isLoading){
    return <Loading></Loading>
  }


  
  return (
    <div className="container w-100 mx-auto mt-5">
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={p?.imgLink} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body text-start px-5">
              <h3 className="card-title">{p.productName}</h3>
              <small><span className="fw-bold">supplier: </span> {p.supplier}</small>
              <p className="card-text">
                {p.productDescription}
              </p>
              <p>Price: ${p.productPrice / 80}</p>
              {
                p.quantity < 1 ? 
                <p>Sold Out</p>
                :
                <p>Stock: {p.quantity}</p>
              }
              <p></p>
              <p className="card-text">
                <button className="deliver-and-restock-btn" onClick={deliverQuantity}>Deliver</button>
                <form onSubmit={handleRestockForm}>
                  <input type="number" name="restockNumber" className="restock-field" placeholder="type quantity"/>
                  <input type="submit" value="Restock" className="deliver-and-restock-btn" />
                </form>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
