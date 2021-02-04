import React from "react";
import {
  Carousel
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Organizer1 from '../../assets/organizer1.jpg';
import Organizer2 from '../../assets/organizer2.jpg';
const CarouselComponent = ()=>{
    return(
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Organizer1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Organizer2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )  
}
export default CarouselComponent;