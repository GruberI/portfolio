import React from 'react';
import Books from './Books/Books'
import './About.css'

import image10 from './Hobbies/Images/cookie.png'
import image11 from './Hobbies/Images/book.png'
import image12 from './Hobbies/Images/yoga.png'
import image13 from './Hobbies/Images/plane.png'

const About = (props) => {

    return (
        <div id={props.id}>
            <h1>About Me</h1>
            <div className="about-text">
            <p className="about-p">Hello! I'm Issa Gruber, a full-stack developer based in Amsterdam. I'm orginally from the beautiful state of Colorado but moved to San Francisco, California right after I graduated college. Most recently I spent 5 years working at Uber as a Technical Recruiter. After nearly 10 years hiring software developers I realized I wanted to be the one on the ground creating amazing things! I enrolled in a fulltime engineering program at Ironhack-Amsterdam and I can say it's been the best decision I've made. I love being challenged and getting the chance to build new things daily.</p>
            <br/>
            <p className="about-p"><strong>Technologies I've Worked With:</strong> Javascript, ReactJS, HTML5, CSS, NodeJS, Express, MongoDB, Bootstrap, Git, Github</p>
            </div>

            <h3>Hobbies</h3>
            <div className="hobbies-div">
                <div className="hobbies-icons">
                    <div>
                        <img src={image10} alt="image10" style={{ height: 80}}/>
                        <img src={image11} alt="image11" style={{ height: 80}}/>
                        <img src={image12} alt="image12" style={{ height: 80}}/>
                        <img src={image13} alt="image13" style={{ height: 80}}/>
                    </div>
                </div>
                <div className="hobbies-p-div">
                    <p className="hobbies-p">In my free time you can find me at the pilates studio, planning my next trip, baking chocolate chip cookies or reading a good book. Lover of all things Fantasy and Sci-Fi!</p>
                    <p className="hobbies-p">If you're looking for your next read scroll below for some books I loved this year:</p>
                </div>
            </div>
            {/* <h1>Books I Loved This Year!</h1> */}
            <div className="books-div">
                <Books/>
            </div>
        </div>
    )
}

export default About;