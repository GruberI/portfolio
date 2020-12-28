import React from 'react';
// import image4 from './images/awesome/at-final.png'
// import image3 from './images/awesome/at-question-two.png'
// import image2 from './images/awesome/at-question-one.png'
// import image1 from './images/awesome/at-home.png'
import MyCarousel from './Carousel/Carousel'
import './Projects.css'

const Projects = (props) => {

    return (
        <div id={props.id} className="portfolio-container">
            <h1>Portfolio</h1>
            <section className="awesome-trivia">
                <MyCarousel/>
            </section>
        </div>
    )
}

export default Projects;