import React from 'react';
import Typed from 'react-typed';
// styles
import './button-animation.css';

export default function Intro() {
  return (
    <div id="home" className="intro route bg-image">
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <p className="intro-subtitle-p mb-4">Frontend Developer</p>
            <h4 className="intro-title mb-4">Jordan Villarreal</h4>
            <p className="intro-subtitle">
              <span className="text-slider-items"></span>
              <strong className="text-slider">
                <Typed
                  strings={['Materializa tus proyectos']}
                  typeSpeed={80}
                  backDelay={1100}
                  backSpeed={30}
                  loop
                />
              </strong>
            </p>
            <div className="container-animation">
              <a className="btn-animation " href="#about" role="button">
                <svg width="277" height="62">
                  <defs>
                    <linearGradient id="grad1">
                      <stop offset="0%" stop-color="#FF8282" />
                      <stop offset="100%" stop-color="#E178ED" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="5"
                    y="5"
                    rx="25"
                    fill="none"
                    stroke="url(#grad1)"
                    width="266"
                    height="50"
                  ></rect>
                </svg>
                <span>Welcome to my world</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
