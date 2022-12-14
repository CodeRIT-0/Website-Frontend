import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <div id="intro">
      <div className="container">
        <img
          src={require("./../../assets/Files/Intro Video.gif")}
          alt="test"
          className="introimg"
        />
        <img
          src={require("./../../assets/Files/mobile landing.png")}
          alt="test"
          className="introabc"
        />

        <div className="centered">
          {/* <h2>
            A community that helps develop the Coding Culture of Ramaiah
            Institute of Technology
          </h2> */}
        </div>
      </div>
      <div id="intro-text">
        <h1 id="intro-head">CodeRIT</h1>
        <p id="intro-para">
          CodeRIT is the official coding club of our college and the most active
          technical club our college. We guide students through their journey to
          find their passion for technology through our hackathons, regular
          contests, workshop and information about competitions like ACM-ICPC,
          Google Code Jam, Google Summer of Code, and other online coding
          events. We conduct workshops on areas of computer science like web
          development, resume building, Git/GitHub etc. We conduct coding
          competitions which are open to all branches with exciting prizes to
          the winners and best female coder - Coding Diva as well.
        </p>
        <h3>Vision</h3>
        <p>
          Creating a Community of enthusiastic coders with holistic development
          of how to approach a problem, problem solving and logic building.
        </p>
        <h3>Mission</h3>
        <p>
          Aims to establish a coding culture on campus, reaching every student
          passionate about coding. The club’s motto is to
          Create-Build-Innovate-Solve.The club helps members develop an aptitude
          for logical thinking and visualising a problem from various
          perspectives and creating multiple innovative solutions
        </p>
      </div>
    </div>
  );
};

export default Intro;
