import React from "react";
import styled from "styled-components";
import MerchCard from "../../components/MerchCard";

const MerchCon = () => {
  return (
    <MerchCons>
      <h2>Merch</h2>
      <MerchCard />
    </MerchCons>
  );
};

const MerchCons = styled.div`
  position: relative;
  margin: auto;
  margin-top: 1rem;
  // width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  //background-color: #4a4a4a;
  transform: skewX(190);
  & h2 {
    position: relative;
    //top: 50px;
    margin-top: 1.5rem;
    font-size: 17px;
    font-weight: bold;
    color: #ececec;
  }
`;
export default MerchCon;
