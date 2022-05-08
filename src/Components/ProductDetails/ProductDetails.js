import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [product, setProduct] = useState({});

  const {imgLink, productName, productDescription, productPrice, quantity, supplier} = product;
  const { id } = useParams();

  //handleDeliver
  const deliverQuantity = () =>{
    const updatedQuantity = parseInt(quantity) - 1;
  const url = `https://morning-plains-88163.herokuapp.com/product/${id}`;
  fetch(url, {
      method: "PUT",
      headers:{
          "content-type": "application/json"
      },
      body: JSON.stringify({quantity : updatedQuantity})
  }) 
  .then(res=> res.json())
  .then(data=> console.log(data))
  window.location.reload();
} 

//handleRestockForm
const handleRestockForm = e =>{
  const inputStock = e.target.restockNumber.value;
  const url = `https://morning-plains-88163.herokuapp.com/restock/${id}`;
    fetch(url, {
        method: "PUT",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify({quantity : inputStock})
    }) 
    .then(res=> res.json())
    .then(data=> console.log(data))
    window.location.reload();
}



  useEffect(() => {
    const url = `https://morning-plains-88163.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);


  
  return (
    <div className="container w-100 mx-auto mt-5">
      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imgLink} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body text-start px-5">
              <h3 className="card-title">{productName}</h3>
              <small><span className="fw-bold">supplier: </span> {supplier}</small>
              <p className="card-text">
                {productDescription}
              </p>
              <p>Price: ${productPrice / 80}</p>
              {
                quantity < 1 ? 
                <p>Sold Out</p>
                :
                <p>Stock: {quantity}</p>
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
