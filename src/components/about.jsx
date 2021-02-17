import React, { useState } from 'react';
import myImage from '../img/myImage.png';

export default function About() {
  const [state, setState] = useState({
    skills: [
      { id: 'HTML5_skill', content: 'HTML5', porcentage: '80%', value: '80' },
      { id: 'CSS3_skill', content: 'CSS3', porcentage: '75%', value: '75' },
      {
        id: 'javaScript_skill',
        content: 'JavaScript',
        porcentage: '40%',
        value: '90',
      },
      {
        id: 'typescript_skill',
        content: 'Typescript',
        porcentage: '40%',
        value: '80',
      },
      {
        id: 'bootstrap_skill',
        content: 'Bootstrap',
        porcentage: '70%',
        value: '80',
      },
      {
        id: 'firebase_skill',
        content: 'Firebase',
        porcentage: '50%',
        value: '80',
      },
      {
        id: 'reactjs_skill',
        content: 'ReactJS',
        porcentage: '60%',
        value: '80',
      },
      {
        id: 'git_skill',
        content: 'Git',
        porcentage: '80%',
        value: '80',
      },
      {
        id: 'jira_skill',
        content: 'Jira',
        porcentage: '80%',
        value: '80',
      },
      {
        id: 'github_skill',
        content: 'GitHub',
        porcentage: '80%',
        value: '80',
      },
      {
        id: 'bitbucket_skill',
        content: 'Bitbucket',
        porcentage: '70%',
        value: '80',
      },
    ],

    about_me: [
      {
        id: 'first-p-about',
        content:
          'Soy Jordan Villarreal Front-end Developer con un año de experiencia desarrollando en react js, tengo la capacidad para darle a tus proyectos una UX/UI inolvidables para tus clientes. Excelente manejo de nuevas tecnologias, soy pro-activo, creativo e innovador.',
      },
      {
        id: 'second-p-about',
        content:
          ' Muy optimista y tengo facilidad de aprendizaje. Soy puntual y carismatico. Manejo de múltiples librerias para la creación de interfaces elegantes y responsivas, utilizando react js, correcto manejo de componentes en React garantizando un código limpio y completamente escalable. Mentalidad enfocada a la resolucion de problemas y el trabajo en equipo.',
      },
      {
        id: 'thirh-p-about',
        content:
          ' Me apasiona la idea de afrontar nuevos desafios, aprender nuevas tecnologias y nuevos lenguajes. Siempre estoy dispuesto a dar el 100% de mi para garantizar un trabajo de primer nivel, estoy abierto a otros puntos de vista, para mejorar y seguir aprendiendo',
      },
    ],
  });

  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-sm-6 col-md-5" style={{ margin: '0 auto' }}>
                      <div className="about-img" style={{ textAlign: 'center' }}>
                        <img className="img-fluid rounded b-shadow-a" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="skill-mf">
                    {state.skills.map((skill) => {
                      return (
                        <React.Fragment key={skill.id}>
                          <span>{skill.content}</span>{' '}
                          <span className="pull-right">{skill.porcentage}</span>
                          <div className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: skill.porcentage }}
                              aria-valuenow={skill.value}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5 className="title-left">About Me</h5>
                    </div>
                    {state.about_me.map((content) => {
                      return (
                        <p className="lead" key={content.id}>
                          {content.content}
                        </p>
                      );
                    })}
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
