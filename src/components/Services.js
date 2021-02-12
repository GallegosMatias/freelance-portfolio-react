import React from 'react';
import design from '../img/design.png';
import dev from '../img/dev.png';
import mobile from '../img/mobile.png';

function Services() {
    return (
        <div>
            <section id="services">
                <div className="services container">

                <div className="services-top">
                    <h1 className="section-title">Servicios</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad iste quae voluptatum, perspiciatis necessitatibus numquam officiis placeat, inventore. Nemo incidunt, laboriosam distinctio. Magnam ipsam adipisci blanditiis reprehenderit libero repellendus excepturi?</p>
                </div>

                <div className="services-bottom">

                    <div className="services-item">
                    <div className="icon">
                        <img src={design} alt="" />
                    </div>
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos numquam, maiores a ducimus labore laborum, dicta rerum dolores. Asperiores cumque fuga odit, perspiciatis commodi fugit dolore, itaque possimus illum impedit?</p>
                    </div>

                    <div className="services-item">
                    <div className="icon">
                        <img src={dev} alt="" />
                    </div>
                    <h2>Web Development</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos numquam, maiores a ducimus labore laborum, dicta rerum dolores. Asperiores cumque fuga odit, perspiciatis commodi fugit dolore, itaque possimus illum impedit?</p>
                    </div>

                    <div className="services-item">
                    <div className="icon">
                        <img src={mobile} alt="" />
                    </div>
                    <h2>Responsive Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos numquam, maiores a ducimus labore laborum, dicta rerum dolores. Asperiores cumque fuga odit, perspiciatis commodi fugit dolore, itaque possimus illum impedit?</p>
                    </div>

                    <div className="services-item">
                    <div className="icon">
                        <img src={design} alt="" />
                    </div>
                    <h2>Web Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos numquam, maiores a ducimus labore laborum, dicta rerum dolores. Asperiores cumque fuga odit, perspiciatis commodi fugit dolore, itaque possimus illum impedit?</p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Services;
