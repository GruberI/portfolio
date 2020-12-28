import React from 'react';
import Books from './Books/Books'
import './About.css'

// import image1 from './Techonlogies/Images/css.png'
// import image2 from './Techonlogies/Images/html.png'
// import image3 from './Techonlogies/Images/js.png'
// import image4 from './Techonlogies/Images/node.png'
// import image5 from './Techonlogies/Images/express.png'
// import image6 from './Techonlogies/Images/mongo.png'
// import image7 from './Hobbies/Images/react2.png'
// import image8 from './Techonlogies/Images/bootstrap.png'
// import image9 from './Techonlogies/Images/github.png'

import image10 from './Hobbies/Images/cookie.png'
import image11 from './Hobbies/Images/book.png'
import image12 from './Hobbies/Images/yoga.png'
import image13 from './Hobbies/Images/plane.png'

const About = (props) => {

    return (
        <div id={props.id}>
            <h1>About</h1>
            <p className="about-p">Hello! I'm Issa Gruber, a full-stack developer based in Amsterdam. I'm orginally from Denver, Colorado and moved to San Francisco, California right after college. Most recently I worked at Uber as a Technical Recruiter. After nearly 10 years hiring software developers I realized I wanted to be the one on the ground creating amazing things! I enrolled in a fulltime engineering program at Ironhack and I can say it's been the best decision I've made. I love being challenged and getting the chance to build new things daily.</p>
            <p className="about-p"><strong>Technologies I've Worked With:</strong> Javascript, ReactJS, HTML5, CSS, NodeJS, Express, MongoDB, Bootstrap, Git, Github</p>
            {/* <h3>Technologies I've Worked With</h3>
            <div>
                <img src={image1} alt="image1" style={{ height:50}} className="tech-image"/>
                <img src={image2} alt="image2" style={{ height:50}} className="tech-image"/>
                <img src={image3} alt="image3" style={{ height:50}} className="tech-image"/>
                <img src={image4} alt="image4" style={{ height:50}} className="tech-image"/>
                <img src={image5} alt="image5" style={{ height:50}} className="tech-image"/>
                <img src={image6} alt="image6" style={{ height:50}} className="tech-image"/>
                <img src={image7} alt="image7" style={{ height:50}} className="tech-image"/>
                <img src={image8} alt="image8" style={{ height:50}} className="tech-image"/>
                <img src={image9} alt="image9" style={{ height:50}} className="tech-image"/>
            </div> */}

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
                    <p className="hobbies-p">In my free time you can find me baking chocolate chip cookies, traveling or reading a good book. Lover of all things Fantasy and Sci-Fi!</p>
                    <p>Scroll below for some books I loved this year:</p>
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