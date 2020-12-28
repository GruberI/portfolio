import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../images/awesome/at-home.png";
import image2 from "../images/awesome/at-question-one.png";
import image3 from "../images/awesome/at-question-two.png";
import image4 from "../images/awesome/at-final.png";

import castle1 from "../images/castle/castle-home.png"
import castle2 from "../images/castle/castle-home-two.png"
import castle3 from "../images/castle/castle-search.png"
import castle4 from "../images/castle/castle-user.png"
import castle5 from "../images/castle/castle-castle.png"

import bookly1 from "../images/bookly/bookly-home.png"
import bookly3 from "../images/bookly/bookly-signup.png"
import bookly4 from "../images/bookly/bookly-user.png"
import bookly5 from "../images/bookly/bookly-create.png"
import bookly6 from "../images/bookly/bookly-club-one.png"
import bookly7 from "../images/bookly/bookly-club-two.png"

const MyCarousel = () => {
  return (
    <div className="carousel-wrapper">

      <div className="castle-div">
        <h3>Stay In A Castle</h3>
            <Carousel showThumbs={false} showStatus={false}>
            <div>
                <img src={castle1} alt="image1" />
            </div>
            <div>
                <img src={castle2} alt="image2" />
            </div>
            <div>
                <img src={castle3} alt="image3" />
            </div>
            <div>
                <img src={castle4} alt="image4" />
            </div>
            <div>
                <img src={castle5} alt="image5" />
            </div>
            </Carousel>
        <p>A little about Stay in a Castle</p>
        
        <div>
          <button>Try Demo</button>
          <button>View Code</button>
        </div>
      </div>

      <div className="awesome-trivia-div">
        <h3>Awesome trivia</h3>
            <Carousel showThumbs={false} showStatus={false}>
            <div>
                <img src={image1} alt="image1" />
            </div>
            <div>
                <img src={image2} alt="image2" />
            </div>
            <div>
                <img src={image3} alt="image3" />
            </div>
            <div>
                <img src={image4} alt="image4" />
            </div>
            </Carousel>
        <p>A little about Awesome Trivia</p>

        <div>
          <button>Try Demo</button>
          <button>View Code</button>
        </div>
      </div>

      <div className="bookly-div">
        <h3>Bookly</h3>
            <Carousel showThumbs={false} showStatus={false}>
            <div>
                <img src={bookly1} alt="image1" />
            </div>
            <div>
                <img src={bookly3} alt="image3" />
            </div>
            <div>
                <img src={bookly4} alt="image4" />
            </div>
            <div>
                <img src={bookly5} alt="image5" />
            </div>
            <div>
                <img src={bookly6} alt="image6" />
            </div>
            <div>
                <img src={bookly7} alt="image7" />
            </div>
            </Carousel>
        <p>A little about Bookly</p>
        
        <div>
          <button>Try Demo</button>
          <button>View Code</button>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
