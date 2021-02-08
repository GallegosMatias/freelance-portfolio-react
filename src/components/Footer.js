import React from 'react'

function Footer() {
    return (
        <div>
            <section id="footer">
                <div class="footer container">

                <div class="brand">
                    <h1><span>M</span>ATIAS <span>G</span>ALLEGOS</h1>
                </div>
                <h2>Tu solución web completa</h2>


                <div class="social-items">

                    {/*Social Item*/}
                    <div class="social-item">
                    <a href="#"><img src="./img/mobile.png" alt=""/></a>
                    </div>

                    {/*Social Item*/}
                    <div class="social-item">
                    <a href="#"><img src="./img/mobile.png" alt=""/></a>
                    </div>

                    {/*Social Item*/}
                    <div class="social-item">
                    <a href="#"><img src="./img/mic.png" alt=""/></a>
                    </div>

                    {/*Social Item*/}
                    <div class="social-item">
                    <a href="#"><img src="./img/mobile.png" alt=""/></a>
                    </div>

                </div>

                <div class="copyright">
                    <p>Copyright &copy 2021 Matias Gallegos.</p>
                </div>

                </div>
            </section>
        </div>
    )
}

export default Footer
