import React from "react";
import styled from "styled-components";
import Dongree from "../../Assets/Dongreefull.png";

const MemInfoCon = ({ name }) => {
  return (
    <InfoCons>
      <div className="heading">
        <h1>{name}</h1>
        <span>{name}</span>
        <h2> FROM EAST TO WORLD!</h2>

        <h3>Introduction</h3>
      </div>
      <img className="dong" src={Dongree} alt="Dongree" />
      <div className="infocon"></div>
    </InfoCons>
  );
};
const InfoCons = styled.div`
  position: relative;
  height: 100%;
  background-color: #323232;
  // width: 100%;
  @media (max-width: 550px) {
    top: -5rem;
  }
  & .infocon {
    background-color: #91919122;
    // display: flexbox;
    border-radius: 15px;
    border: 1px solid #ffffff6e;
    flex-wrap: wrap;
    margin: auto;
    height: 500px;
    position: relative;
    width: 80%;
    z-index: 15;
  }
  & .dong {
    height: 500px;
    width: 500px;
    position: absolute;
    filter: brightness(0.3);
    // float: right;
    top: -8rem;
    right: 3rem;
    z-index: 10;
    @media (max-width: 800px) {
      right: -8rem;
      height: 400px;
      width: 400px;
    }

    @media (max-width: 550px) {
      right: -8rem;
      height: 400px;
      width: 400px;
    }

    @media (max-width: 380px) {
      font-size: 0.8rem;
      right: -6rem;
      height: 300px;
      width: 300px;
    }
  }
  & .heading {
    position: relative;
    // float: left;\
    text-align: left;
    left: 0px;
    width: 43%;

    & h1 {
      position: relative;
      z-index: 13;
      color: #bed542;
      left: 8rem;
      font-size: 2.8rem;
      text-align: left;
      text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
      @media (max-width: 550px) {
        font-size: 1.5rem;
        left: 6rem;
      }
      @media (max-width: 380px) {
        font-size: 1.2rem;
        left: 3rem;
      }
    }
    & span {
      position: absolute;
      top: -1rem;
      left: 9rem;
      //text-align: left;
      font-weight: 600;
      font-size: 5rem;
      color: #cc4c4c16;
      z-index: 25;
      @media (max-width: 550px) {
        font-size: 3rem;
        left: 6rem;
      }
      @media (max-width: 380px) {
        font-size: 2.5rem;
        left: 3rem;
      }
    }
    & h2 {
      position: relative;
      z-index: 13;
      font-size: 1.5rem;
      left: 5rem;
      top: -1.5rem;
      color: #ffffff96;
      text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
      @media (max-width: 550px) {
        top: 0rem;
        font-size: 1rem;
        left: 6rem;
      }
      @media (max-width: 380px) {
        font-size: 0.8rem;
        left: 3rem;
      }
    }
    & h3 {
      position: relative;
      z-index: 13;
      font-size: 1.3rem;
      margin-top: 2rem;
      left: 1rem;
      color: #ffffffc1;
      text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
      @media (max-width: 550px) {
        top: 0rem;
        font-size: 1rem;
      }
      @media (max-width: 380px) {
        font-size: 0.8rem;
      }
    }
  }
`;

export default MemInfoCon;
