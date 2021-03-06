import React from 'react';
import emailw from '../img/emailw.png';
import whatsappw from '../img/whatsappw.png';
import linkedinw from '../img/linkedinw.png';
import githubw from '../img/githubw.png';

function Footer() {
    return (
        <div>
            <section id="footer">
                <div className="footer container">

                <div className="brand">
                    <h1><span>M</span>ATIAS <span>G</span>ALLEGOS</h1>
                </div>
                <h2>Tu solución web completa</h2>


                {<div className="social-items">

                    {/*Social Item*/}
                    <div className="social-item">
                    <a href="https://wa.link/6v5wd7/" target="_blank"><img src={whatsappw} alt=""/></a>
                    </div>

                    {/*Social Item*/}
                    <div className="social-item">
                    <a href="mailto:gallegosmatiasjoel@gmail.com"><img src={emailw} alt=""/></a>
                    </div>

                    {/*Social Item*/}
                    <div className="social-item">
                    <a href="https://www.linkedin.com/in/gallegosmatias/" target="_blank"><img src={linkedinw} alt=""/></a>
                    </div>

                    {/*Social Item*/}
                    <div className="social-item">
                    <a href="https://github.com/GallegosMatias/" target="_blank"><img src={githubw} alt=""/></a>
                    </div>

                </div>}

                <div className="copyright">
                    <p>Copyright &copy; 2021 Matias Gallegos.</p>
                </div>

                </div>
            </section>
        </div>
    )
}

export default Footer
