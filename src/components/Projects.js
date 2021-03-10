import React from 'react';
import img1 from '../img/img-1.png';
import metalurgica from '../img/metalurgica.png';
import merit from '../img/merit.png';
import drog from '../img/drog.png';

function Projects() {
    return (
        <div>
            <section id="projects">

                <div className="projects container">

                    <div className="projects-top">
                        <h1 className="section-title"><span>Proyectos</span> para Clientes</h1>
                    </div>

                    <div className="projects-bottom">

                        {/*Project Item*/}
                        <div className="projects-item">
                            <div className="projects-item-info">
                                <h1>Metalúrgica Irungaray</h1>
                                <h2>Landing page</h2>
                                <p>Página web de tipo Landing Page creada para Irungaray Metalúrigca. Incluye elección de imágenes para galería, Social Media Buttons, y formulario de contacto.</p>
                            </div>
                            <div className="projects-item-img">
                                <img src={metalurgica} alt="" />
                            </div>
                        </div>

                        {/*Project Item*/}
                        <div className="projects-item">
                            <div className="projects-item-info">
                                <h1>Merit Gestión de Redes</h1>
                                <h2>Web E-commerce</h2>
                                <p>Sitio web con e-commerce funcional creado con Wordpress y WooCommerce. Pagos con PayPal y MercadoPago. Plantilla Storefront personalizada con handcoded CSS.</p>
                            </div>
                            <div className="projects-item-img">
                                <img src={merit} alt="" />
                            </div>
                        </div>

                        {/*Project Item*/}
                        <div className="projects-item">
                            <div className="projects-item-info">
                                <h1>Drog SRL</h1>
                                <h2>Sitio web Empresa</h2>
                                <p>Sitio web creado a medida para un cliente con HTML, CSS y Javascript. Conexión con Google Maps, redes sociales, galería, formulario de contacto.</p>
                            </div>
                            <div className="projects-item-img">
                                <img src={drog} alt="" />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Projects;
