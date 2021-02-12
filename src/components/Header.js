import React from 'react';

function Header() {

    return (
        <div>
            <section id="header">
                <div className="header container">

                <div className="nav">

                    <div className="brand">
                    <a href="#hero"><h1><span>MATIAS</span> <span></span>GALLEGOS</h1></a>
                    </div>

                    <div className="navbar">

                    {/*Hambuger*/}
                    <div className="hamburger"><div className="bar"></div></div>

                    {/*navbar*/}
                    <ul>
                        <li><a href="#hero" data-after="Inicio">Inicio</a></li>
                        <li><a href="#about" data-after="SobreMí">Sobre Mí</a></li>
                        <li><a href="#services" data-after="Servicios">Servicios</a></li>
                        <li><a href="#projects" data-after="Proyectos">Proyectos</a></li>
                        <li><a href="#contact" data-after="Contacto">Contacto</a></li>
                    </ul>

                    </div>
                </div>

                </div>
            </section>
        </div>
    )
}

export default Header;
