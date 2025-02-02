import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import {addCart} from '../redux/action'
import { Link, useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [loading, setloading] = useState(false);


  const dispatch = useDispatch()
  const addProduct = (product)=>{
    dispatch(addCart(product))
  }

  useEffect(() => {
    const getProduct = async () => {
      setloading(true);
      const responce = await fetch(`https://fakestoreapi.com/products/${id}`);
      setproduct(await responce.json());
      setloading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <>
    <div className="col-md-6">
      <Skeleton height={400}/>
    </div>

    <div className="col-md-6" style={{lineHeight:2}}>
      <Skeleton height={50} width={300}/>
      <Skeleton height={75}/>
      <Skeleton height={25} width={150}/>
      <Skeleton height={50}/>
      <Skeleton height={150}/>
      <div className="col-md-6 d-flex">
      <Skeleton height={50} width={100}/>
      <Skeleton height={50} width={100} style={{marginLeft:6}}/>
      </div>
     

    </div>
    </>;
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height={400}
            width={400}
          />
        </div>

        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>

          <h1 className="display-5">{product.title}</h1>

          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>

          <h3 className="display-6 fw-bolder my-4">Price ${product.price}</h3>

          <p className="lead">{product.description}</p>

          <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>Add to Cart</button>

          <Link to="/cart" className="btn btn-dark mx-2 px-3 py-2">
            Go to Cart
          </Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5 ">
        <div className="row py-5 ">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
}

export default Product;
