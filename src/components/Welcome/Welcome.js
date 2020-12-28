import React from 'react';
import image from './linkedinPhoto.jpeg'
import './Welcome.css'

const Welcome = (props) => {

    return (
        <div className="welcome-container" id={props.id}>
           <section className="welcome-image">
            <img src={image} alt="linkedinPhoto" className="linkedinPhoto"/>
           </section>

           <section className="welcome-text">
               <div className="text-div">
                    <h2>Welcome! My name is</h2>
                    <h1 className="welcome-h1">Issa Gruber</h1>
                    <h2>I'm a web developer.</h2>
               </div>
           </section>
        </div>
    )
}

export default Welcome;