import React from 'react';
import img2 from '../img/img-2.png';

function About() {
    return (
        <div>
            <section id="about">
                <div className="about container">

                <div className="about-left">
                    <div className="about-left-img">
                    <img src={img2} alt="" />
                    </div>
                </div>

                <div className="about-right">
                    <h1 className="section-title">Sobre <span>mí</span></h1>
                    <h2>Front End Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia suscipit magni quasi enim culpa quod quisquam odio quam doloribus, aut voluptates doloremque tempore vel maxime, possimus esse sint veniam maiores.</p>
                    <a href="https://drive.google.com/file/d/1Jb0bizlvSeGbV0cqGhEIiXOxPkFx1s0y/view?usp=sharing" target="_blank">Descargar CV</a>
                </div>

                </div>
            </section>       
        </div>
    )
}

export default About;
