import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-color: green;
  height: 100%;
  width: 100%;
`;

const AboutMe = () => {
  return (
    <Wrapper>
      <h3>About Me Component Goes Here!</h3>
    </Wrapper>
  );
};

export default AboutMe;
