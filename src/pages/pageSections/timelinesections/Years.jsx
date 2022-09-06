import React from "react";
import styled from "styled-components";

const Years = ({ content }) => {
  console.log(content);
  return <Con>Years</Con>;
};

const Con = styled.div`
  background-color: #91919122;
  // display: flexbox;
  border-radius: 15px;
  border: 1px solid #ffffff6e;
  flex-wrap: wrap;
  margin: 1rem auto;
  padding: 2rem;
  width: 100%;
  height: 500px;
  z-index: 13;
`;
export default Years;
