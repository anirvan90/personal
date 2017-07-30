import React from "react";
import styled from "styled-components";
import Landing from "./components/Landing.jsx";
import AboutMe from "./components/AboutMe.jsx";
import GetInTouch from "./components/GetInTouch.jsx";
import InstaSpot from "./components/InstaSpot.jsx";
import { Fullpage, Slide } from "fullpage-react";
// const Main = styled.body`widh: device-width;`;

const fullPageOptions = {
  scrollSensitivity: 2,
  hideScrollBars: true,
  enableArrowKeys: true
};

const slides = [
  <Slide>
    <Landing />
  </Slide>,
  <Slide>
    <AboutMe />
  </Slide>,
  <Slide>
    <GetInTouch />
  </Slide>,
  <Slide>
    <InstaSpot />
  </Slide>
];

fullPageOptions.slides = slides;

const App = () => {
  return <Fullpage {...fullPageOptions} />;
};

export default App;
