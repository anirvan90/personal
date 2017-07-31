import React from "react";
import { Slide } from "fullpage-react";
import styled from "styled-components";
import ReactSVG from "react-svg";
// import mySvg from "../images/github.svg";
// var gitLogo = require("svg-inline-loader?classPrefix!../images/github.svg");

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-family: 'Raleway', sans-serif;
  font-weight: thin;
  src: url('https://fonts.googleapis.com/css?family=Raleway:100');
`;

const Landing = () => {
  return (
    <Wrap>
      <ReactSVG
        path="../images/github.svg"
        callback={svg => console.log(svg)}
        className="example"
        evalScript="always"
        style={{ width: 200 }}
      />
      <Title>Anirvan Awatramani</Title>
      <Title>Full Stack Engineer</Title>
    </Wrap>
  );
};

export default Landing;
