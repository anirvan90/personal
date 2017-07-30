import React from "react";
import { Slide } from "fullpage-react";
import styled from "styled-components";

const Title = styled.div`
  font-family: 'Raleway', sans-serif;
  font-weight: thin;
  src: url('https://fonts.googleapis.com/css?family=Raleway:100');
`;

const Landing = () => {
  return (
    <div>
      <Title>Anirvan Awatramani</Title>
      <Title>Full Stack Engineer</Title>
    </div>
  );
};

export default Landing;
