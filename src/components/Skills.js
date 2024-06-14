import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skills = [
    { name: "Java", percentage: 85, description: "Building and maintaining websites" },
    { name: "MySql", percentage: 70, description: "Programming language for various applications" },
    { name: "HTML & CSS", percentage: 75, description: "Creating and styling web pages" },
    { name: "JavaScript", percentage: 60, description: "Programming language for the web" },
    { name: "Python", percentage: 80, description: "Programming language for web and software development" }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h1>Skills</h1>
              <div className="skill-grid">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-row">
                      <div className="progress-bar-container">
                        <CircularProgressbar
                          value={skill.percentage}
                          text={`${skill.percentage}%`}
                          strokeWidth={5}
                          styles={buildStyles({
                            textColor: "#fff",
                            textSize: '16px',
                            pathColor: `url(#gradient-${index})`,
                            trailColor: "rgba(255, 255, 255, 0.1)",
                          })}
                          className={`progress-bar progress-bar-${index}`}
                        />
                        <svg style={{ height: 0 }}>
                          <defs>
                            <linearGradient id={`gradient-${index}`}>
                              <stop offset="0%" stopColor="#AA367C" />
                              <stop offset="100%" stopColor="#4A2FBD" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                      <div className="skill-info-animation">
                        <div className="skill-info-sliding">
                          <div className="skill-name">{skill.name}</div>
                          <div className="skill-description">{skill.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
