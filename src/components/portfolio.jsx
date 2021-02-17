import React from 'react';

//import stock
import stock from '../img/movies-app.png';
import stock1 from '../img/spotify-search-react.png';
import stock2 from '../img/giffy.png';
import stock3 from '../img/agency-design.png';
import stock4 from '../img/creative-study.png';
import stock5 from '../img/spotify-html.png';

export default function Portfolio() {
  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Portfolio</h3>
              <p className="subtitle-a">
                Aqui podras encontrar mis proyectos personales y profesionales
              </p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="work-box">
              <a href={stock} data-lightbox="gallery-aguadeluz">
                <div className="work-img">
                  <img src={stock} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <a
                      className="w-title"
                      href="https://movies-app-6a087.firebaseapp.com/"
                      target="blank"
                    >
                      Movies App
                    </a>
                    <div className="w-more">
                      <span className="w-ctegory">ReactJS, React-Router, Deploy with Firebase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={stock1} data-lightbox="gallery-aguadeluz">
                <div className="work-img">
                  <img src={stock1} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <a
                      className="w-title"
                      href="https://spotify-react-challenge.herokuapp.com/"
                      target="blank"
                    >
                      Spotify React Clon
                    </a>
                    <div className="w-more">
                      <span className="w-ctegory">
                        ReactJS, React-Router, Spotify for developers, Deploy with heroku
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={stock2} data-lightbox="gallery-todo">
                <div className="work-img">
                  <img src={stock2} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <a className="w-title" href=" https://gif-app-bdab9.web.app" target="blank">
                      Gif App
                    </a>
                    <div className="w-more">
                      <span className="w-ctegory">
                        Bootstrap, Webpack, ReactJS, Styled-components, Formik, Deploy with firebase
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={stock3} data-lightbox="gallery-medlingos">
                <div className="work-img">
                  <img src={stock3} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <a
                      className="w-title"
                      href="https://qjordnvb.github.io/design-agency/"
                      target="blank"
                    >
                      Design Agency
                    </a>
                    <div className="w-more">
                      <span className="w-ctegory">
                        Bootstrap, HTML5, CSS3, Javascript, Deploy with gh-pages
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={stock4} data-lightbox="gallery-smth">
                <div className="work-img">
                  <img src={stock4} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <a
                      className="w-title"
                      href="https://qjordnvb.github.io/creative-study/"
                      target="blank"
                    >
                      Creative Study
                    </a>
                    <div className="w-more">
                      <span className="w-ctegory">
                        Bootstrap, HTML5, CSS3, Javascript, Deploy with gh-pages
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="work-box">
              <a href={stock5} data-lightbox="gallery-mf">
                <div className="work-img">
                  <img src={stock5} alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <a
                      className="w-title"
                      href="https://qjordnvb.github.io/spotifyus/"
                      target="blank"
                    >
                      Spotify Us Clon
                    </a>
                    <div className="w-more">
                      <span className="w-ctegory">
                        HTML5, CSS3, Bootstrap, Deploy with gh-pages
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
