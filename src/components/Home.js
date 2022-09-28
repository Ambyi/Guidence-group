import Carousel from "react-bootstrap/Carousel";
import Navigationbar from "./NavigationBar";
import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home-page-main">
      <div className="carousel-block">
        <img src="Assets/firstimg.png" alt="" className="slider-video" />
        {/* <Carousel variant="dark" >
      <Carousel.Item interval={1000}>
      
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="Assets/slider-guidance-group-2.jpg" className="slider-imgs"alt=""/>
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src="Assets/slider-guidance-group.png" className="slider-imgs"alt=""/>
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
      </div>
      {/* <div className='home-about-blk'>
        <div className='left-side-blk'>
          <h3 className='about-heading'>About Guidance Group</h3>
          <p className='about-paragraph'>Welcome to Guidance Group; we are one of the best coaching institutes in Mumbai and Pune. Guidance Group is a committed team of faculties who have been involved in Civil Service preparation for the past several years and have been instrumental in the success of numerous candidates in their Civil Service Examinations.
As we say, "To be a winner, you must plan, prepare, and expect to win". The Guidance group exactly does the same. Our unique programmes will help you to improve your learning skills and prepare you for the examination.</p>
        </div>
        <div className='right-side-blk'>
          <img src="Assets/second.jpg" className='second-img' alt=''/>
        </div>
      </div> */}
      <div className="why-guidence-heading">Why Guidance Group?</div>
      <div className="why-guidence">
       <div className="left-side-col"><p className="why-paragraph">Guidance Group is a committed team of faculties who have been involved in Civil Service preparation for the past several years and have been instrumental in the success of numerous candidates in their Civil Service Examinations.</p></div>
       <div className="right-side-col">
        <img src='Assets/image2.png' alt="" className="secondimg"/>
       </div>
      </div>
    </div>
  );
};

export default Home;
