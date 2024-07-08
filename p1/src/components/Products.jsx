import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton"
import { Link } from "react-router-dom";

function Products() {
  const [data, setdata] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loding, setloding] = useState(false);
  let componentsMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setloding(true);
      const responcre = await fetch("https://fakestoreapi.com/products");
      if (componentsMounted) {
        setdata(await responcre.clone().json());
        setfilter(await responcre.json());
        setloding(false);
        console.log(filter);
      }
      return () => {
        componentsMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3 mb-4">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatelist = data.filter((x) => x.category === cat)
    setfilter(updatelist)
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 py-5">
          <button className="btn btn-outline-dark me-2" onClick={() => setfilter(data)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")} >Electronic</button>
        </div>

        {filter.map((product) => {
          return <>
            <div className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4" key={product.id}>
                <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.title.substring(0, 12)}... </h5>
                  <p className="card-text lead fw-bolder">${product.price}</p>
                  <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                </div>
              </div>
            </div>
          </>;
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          </div>
          <hr />
        </div>

        <div className="row justify-content-center">
          {loding ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;
