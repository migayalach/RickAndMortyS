import React from "react";
import "../StyleSheets/About.css";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import {
  FcReadingEbook,
  FcBriefcase,
  FcFeedback,
  FcBinoculars,
} from "react-icons/fc";

const About = () => {
  return (
    <div className="principal-container">
      <img className="photo" src={require(`../image/XD.png`)} alt="profile picture" />
      <h1>Hi there!</h1>
      <p>
        I'm{" "}
        <span>
          <FcReadingEbook /> Miguel
        </span>
        , a full-stack developer currently living in La Paz, Bolivia bolivia.
      </p>

      <ul className="list-skils">
        <li className="skils">
          <FcBinoculars />
          &nbsp;I am currently looking for a job
        </li>
        <li className="skils">
          <FcBriefcase />
          &nbsp;Main tech skills: JavaScript | React | Redux | Java | Node.js |
          Express | PHP | MySQL | PostgreSQL | Testing.{" "}
        </li>
        <li className="skils">
          <FcFeedback />
          &nbsp;How to reach me: ayalachavezmiguel@gmail.com
        </li>
      </ul>

      <footer className="social-networks">
        <span className="icons">
          GitHub&nbsp;
          <a href="https://github.com/migayalach" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span className="icons">
          Linkedin&nbsp;
          <a
            href="https://www.linkedin.com/in/miguel-ch%C3%A1vez-a-b51302288/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </span>
        <span className="icons">
          Mail&nbsp;
          <a
            href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
            target="_blank"
          >
            <FaMailBulk />
          </a>
        </span>
      </footer>
    </div>
  );
};

export default About;
