import React, { useEffect, useState } from "react";
import "../styles/Banner.css";
import axios from "axios";
const Banner = () => {
  const [top3Books, setTop3Books] = useState([]);
  const SERVER_DOMAIN = "http://localhost:8098";
  useEffect(() => {
    axios.get(SERVER_DOMAIN + "/book/top3").then((res) => {
      setTop3Books(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        {top3Books.map((book, index) => (
          <div class={`carousel-item ${index == 0 ? "active" : ""}`}>
            <img src="/images/image-21.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="display-1 fw-bold">{book.name}</h1>
              <h2 className="display-5">{book.introduce}</h2>
              <h2 className="display-6">
                {book.types.map((type) => type.name).join(",")}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
