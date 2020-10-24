import React from "react";
import slide1 from "../../images/slider/slide1.jpg";
import slide2 from "../../images/slider/slide2.jpg";
import slide3 from "../../images/slider/slide3.jpg";
import slide4 from "../../images/slider/slide4.jpg";
import slide5 from "../../images/slider/slide5.jpg";
import slide6 from "../../images/slider/slide6.jpg";


const Slider = () => (

<div>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide1} class="d-block w-100" alt="slide1"/>
    </div>
    <div class="carousel-item">
      <img src={slide2} class="d-block w-100" alt="slide2"/>
    </div>
    <div class="carousel-item">
      <img src={slide3} class="d-block w-100" alt="slide3"/>
    </div>
    <div class="carousel-item">
      <img src={slide4} class="d-block w-100" alt="slide4"/>
    </div>

    <div class="carousel-item">
      <img src={slide5} class="d-block w-100" alt="slide5"/>
    </div>
    <div class="carousel-item">
      <img src={slide6} class="d-block w-100" alt="slide6"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</div>

    );

export default Slider;
