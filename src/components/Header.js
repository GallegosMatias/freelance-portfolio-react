import React, { useState, useEffect } from 'react';

function Header() {

    const [show, handleShow] = useState(false);
    const [navbar, setNavbar] = useState(false);

    const showNavbar = () => setNavbar(!navbar);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});
		return () => {
			window.removeEventListener('scroll');
		};
	}, []);


    return (
        <div>
            <section id="header">
            <div className={`header container ${show && 'nav__black'}`}>

                <div className="nav">

                    <div className="brand">
                    <a href="#hero"><h1><span>MATIAS</span> <span></span>GALLEGOS</h1></a>
                    </div>

                    <div className={navbar ? 'navbar active' : 'navbar'}>

                        {/*Hambuger*/}
                        <div className="hamburger" onClick={showNavbar}><div className="bar"></div></div>

                        {/*navbar*/}
                        <ul className={navbar ? 'burger active' : 'burger'} onClick={showNavbar}>
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
