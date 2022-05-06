import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [product, setProduct] = useState({});

  const {imgLink, productName, productDescription, productPrice, quantity, supplier} = product;
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:8080/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);


  //handleDeliver
  const deliverQuantity = () =>{
      toast("Delivered!")
  }
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
              <p>Stock: {quantity}</p>
              <p></p>
              <p className="card-text">
                <button className="deliver-and-restock-btn" onClick={deliverQuantity}>Deliver</button>
                <button className="deliver-and-restock-btn">ReStock</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
