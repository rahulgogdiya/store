import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card text-white bg-dark border-0">
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img4.jpg" class="d-block w-100 imge-section" alt="image"/>
    </div>
    <div class="carousel-item">
      <img src="img2.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="img3.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">

                      <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                      <p className="card-text lead fs-2">
                         CHECK OUT ALL THE TRANDS
                      </p>
            </div>       
        </div>
      </div>
      <Products/>
    </div>
  );
}

export default Home;
