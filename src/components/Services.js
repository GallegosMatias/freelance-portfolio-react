import React from 'react';
import design from '../img/design.png';
import dev from '../img/dev.png';
import mobile from '../img/mobile.png';
import seo from '../img/seo.png';

function Services() {
    return (
        <div>
            <section id="services">
                <div className="services container">

                <div className="services-top">
                    <h1 className="section-title">Servicios</h1>
                </div>

                <div className="services-bottom">

                    <div className="services-item">
                    <div className="icon">
                        <img src={design} alt="" />
                    </div>
                    <h2>Diseño web</h2>
                    <p>Diseño a medida de tu página web. Boceto, mockup, wireframe. Estructura general, paleta de colores. Conceptualización y acompañamiento. </p>
                    </div>

                    <div className="services-item">
                    <div className="icon">
                        <img src={dev} alt="" />
                    </div>
                    <h2>Desarrollo</h2>
                    <p>Programación desde cero. HTML | CSS | Javascript. Implementación de frameworks (React / Angular / Vue). Bases de datos. Plugins y features personalizados.</p>
                    </div>

                    <div className="services-item">
                    <div className="icon">
                        <img src={mobile} alt="" />
                    </div>
                    <h2>Responsive Design</h2>
                    <p>Visualización correcta de la web en cualquier dispositivo (Celular / Tablet / Notebook / PC). Mobile first. Mediaqueries. </p>
                    </div>

                    <div className="services-item">
                    <div className="icon">
                        <img src={seo} alt="" />
                    </div>
                    <h2>SEO</h2>
                    <p>Optimización del posicionamiento en buscadores (Google, Bing). Accesibilidad. Mayor tráfico en el sitio.</p>
                    </div>

                    <div className="services-item">
                    <div className="icon">
                        <img src={design} alt="" />
                    </div>
                    <h2>Content writing</h2>
                    <p>Redacción de contenido en español y en inglés. Product description.Technical writing. Engaging content.</p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Services;
