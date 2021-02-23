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
                    <p>Mi nombre es Matías, tengo 24 años, y soy de Córdoba, Argentina. Soy Desarrollador Web especializado en ReactJS con más de dos años de experiencia en el rubro. Respondo a la necesidad concreta de cada cliente, brindando atención y desarrollo 100% personalizados. </p>
                    <a href="https://drive.google.com/file/d/1Jb0bizlvSeGbV0cqGhEIiXOxPkFx1s0y/view?usp=sharing" target="_blank">Descargar CV</a>
                </div>

                </div>
            </section>       
        </div>
    )
}

export default About;
