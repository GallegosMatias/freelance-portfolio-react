import React from 'react';
import img1 from '../img/img-1.png';

function Projects() {
    return (
        <div>
            <section id="projects">

            <div className="projects container">

            <div className="projects-top">
                <h1 className="section-title"><span>Proyectos</span> Recientes</h1>
            </div>

            <div className="projects-bottom">

                {/*Project Item*/}
                <div className="projects-item">
                <div className="projects-item-info">
                    <h1>Project 1</h1>
                    <h2>Subtitulo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vel, eum quia delectus quas similique sunt illum porro nostrum dolores quos dicta possimus corporis, asperiores molestias nobis ratione omnis distinctio.</p>
                </div>
                <div className="projects-item-img">
                    <img src={img1} alt="" />
                </div>
                </div>

                {/*Project Item*/}
                <div className="projects-item">
                <div className="projects-item-info">
                    <h1>Project 2</h1>
                    <h2>Subtitulo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vel, eum quia delectus quas similique sunt illum porro nostrum dolores quos dicta possimus corporis, asperiores molestias nobis ratione omnis distinctio.</p>
                </div>
                <div className="projects-item-img">
                    <img src={img1} alt="" />
                </div>
                </div>

                {/*Project Item*/}
                <div className="projects-item">
                <div className="projects-item-info">
                    <h1>Project 3</h1>
                    <h2>Subtitulo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vel, eum quia delectus quas similique sunt illum porro nostrum dolores quos dicta possimus corporis, asperiores molestias nobis ratione omnis distinctio.</p>
                </div>
                <div className="projects-item-img">
                    <img src={img1} alt="" />
                </div>
                </div>

                {/*Project Item*/}
                <div className="projects-item">
                <div className="projects-item-info">
                    <h1>Project 4</h1>
                    <h2>Subtitulo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vel, eum quia delectus quas similique sunt illum porro nostrum dolores quos dicta possimus corporis, asperiores molestias nobis ratione omnis distinctio.</p>
                </div>
                <div className="projects-item-img">
                    <img src={img1} alt="" />
                </div>
                </div>

                {/*Project Item*/}
                <div className="projects-item">
                <div className="projects-item-info">
                    <h1>Project 5</h1>
                    <h2>Subtitulo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae vel, eum quia delectus quas similique sunt illum porro nostrum dolores quos dicta possimus corporis, asperiores molestias nobis ratione omnis distinctio.</p>
                </div>
                <div className="projects-item-img">
                    <img src={img1} alt="" />
                </div>
                </div>

            </div>

            </div>
            </section>
        </div>
    )
}

export default Projects;
