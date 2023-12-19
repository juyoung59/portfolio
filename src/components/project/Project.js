import React, { useState } from 'react';
import './Project.scss';
import gitImg from '../../img/git.png';
import linkImg from '../../img/link.png'

const Project = ({ image, title, detail, period, used, link, source }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`project ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="card">
        <div className="content">
          <div className={`front ${isFlipped ? 'hidden' : ''}`}>
            <img src={image} alt="Project" />
          </div>
          <div className={`back ${isFlipped ? '' : 'hidden'}`}>
            <div className="back-content">
              <h3>{title}</h3>
              <p style={{marginTop: '20px'}}>{detail}</p>
              <p style={{marginTop: '30px'}}>🗓️ {period}</p>
              <p>✒️ {used}</p>
              <a href={source}>
                <img src={gitImg} style={{height: '30px', marginTop: '30px', marginRight: '10px'}}/>
              </a>
              <a href={link}>
                <img src={linkImg} style={{height: '30px'}}/>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
