import React from "react";
import './Carousel.css'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../images/awesome/at-home.png";
import image2 from "../images/awesome/at-question-one.png";
import image3 from "../images/awesome/at-question-two.png";
import image4 from "../images/awesome/at-final.png";

import castle1 from "../images/castle/castle-home.png";
import castle2 from "../images/castle/castle-home-two.png";
import castle3 from "../images/castle/castle-search.png";
import castle4 from "../images/castle/castle-user.png";
import castle5 from "../images/castle/castle-castle.png";
import castle6 from "../images/castle/castle-signup.png"

import bookly1 from "../images/bookly/bookly-home.png";
import bookly3 from "../images/bookly/bookly-signup.png";
import bookly4 from "../images/bookly/bookly-user.png";
import bookly5 from "../images/bookly/bookly-create.png";
import bookly6 from "../images/bookly/bookly-club-one.png";
import bookly7 from "../images/bookly/bookly-club-two.png";

const MyCarousel = () => {
  return (
    <div className="carousel-wrapper">
      <div className="bookly-div">
        <h3 className="projects-h3">Bookly</h3>
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
        <div class="carousel-p-div">
          <p className="carousel-p">Bookly is a web application that brings together the stories & the people you love! When you join bookly you can organize a virtual bookclub for you and your friends. Bookly was my final project for the Ironhack bootcamp and winner of my cohorts final competition.</p>
          <p className="carousel-p">Technologies: ReactJS, Javascript, MongoDB, ExpressJS, NodeJS, SCSS, Client side rendering.</p>
        </div>
        <div>
          <button>
            <a href="https://book-ly.herokuapp.com/" target="_blank" rel="noreferrer">Try Demo</a>
          </button>
          <button>
            <a href="https://github.com/GruberI/bookly" target="_blank" rel="noreferrer">View Code</a>
          </button>
        </div>

        <div className="castle-div">
          <h3 className="projects-h3">Stay In A Castle</h3>
          <Carousel showThumbs={false} showStatus={false}>
            <div>
              <img src={castle1} alt="image1" />
            </div>
            <div>
              <img src={castle2} alt="image2" />
            </div>
            <div>
              <img src={castle6} alt="image6" />
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
          <div class="carousel-p-div">
            <p className="carousel-p">Stay in a Castle is a web application that finds and organizes castle hotels you can book around Europe. Users are able sign up and search different countries for available castle hotels. You can view details and get routed to booking sites.</p>
            <p className="carousel-p">Technologies: ExpressJS, NodeJS, MongoDB, Javascript, Handlebars, GoogleMapsAPI.</p>
          </div>
          <div>
            <button>
              <a href="https://stayinacastle.herokuapp.com/" target="_blank" rel="noreferrer">Try Demo</a>
            </button>
            <button>
              <a href="https://github.com/GruberI/stayInACastle/tree/master/stayInACastle" target="_blank" rel="noreferrer">
                View Code
              </a>
            </button>
          </div>
        </div>

        <div className="awesome-trivia-div">
          <h3 className="projects-h3">Awesome trivia</h3>
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
          <div class="carousel-p-div">
            <p className="carousel-p">Awesome Trivia is a game similar to a pub quiz designed to be played in the web browser. Players must answer 10 questions out of 5 different categories. At the end you find out your score and are able to play again.</p>
            <p className="carousel-p">Technologies: Javascript, HTML, CSS.</p>
          </div>
          <div>
            <button>
              <a href="https://gruberi.github.io/AwesomeTrivia/" target="_blank" rel="noreferrer">Try Demo</a>
            </button>
            <button>
              <a href="https://github.com/GruberI/AwesomeTrivia" target="_blank" rel="noreferrer">View Code</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
