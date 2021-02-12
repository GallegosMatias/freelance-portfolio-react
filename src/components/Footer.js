import React from 'react';
import mic from '../img/mic.png';

function Footer() {
    return (
        <div>
            <section id="footer">
                <div className="footer container">

                <div className="brand">
                    <h1><span>M</span>ATIAS <span>G</span>ALLEGOS</h1>
                </div>
                <h2>Tu solución web completa</h2>


                <div className="social-items">

                    {/*Social Item*/}
                    <div className="social-item">
                    <a href="#"><img src={mic} alt=""/></a>
                    </div>

                    {/*Social Item*/}
                    <div className="social-item">
                    <a href="#"><img src={mic} alt=""/></a>
                    </div>

                    {/*Social Item*/}
                    <div className="social-item">
                    <a href="#"><img src={mic} alt=""/></a>
                    </div>

                    {/*Social Item*/}
                    <div className="social-item">
                    <a href="#"><img src={mic} alt=""/></a>
                    </div>

                </div>

                <div className="copyright">
                    <p>Copyright &copy 2021 Matias Gallegos.</p>
                </div>

                </div>
            </section>
        </div>
    )
}

export default Footer
