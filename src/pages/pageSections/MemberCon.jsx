import React from "react";
import styled from "styled-components";
import Wondae from "../../Assets/Wondae.jpg";
import Dongree from "../../Assets/Dongreefull.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import InfoCon from "./InfoCon";
import InfoCons from "./InfoCons";
import MemInfoCon from "./MemInfoCon";

const MemberCon = ({ member }) => {
  let navigate = useNavigate();

  return (
    <MemCon>
      <h3>Members</h3>
      <MemberCons>
        <div className="con">
          <div className="cons">
            {member?.map((mem, index) => (
              <motion.div
                className="card"
                key={index}
                whileHover={{ scale: 1.02 }}
                onClick={() => navigate(`/members/${mem.name}`)}
              >
                <img src={mem.images} alt={mem.name} />
                <h2>{mem.name}</h2>
              </motion.div>
            ))}
          </div>
          <div className="info">
            <h1>Former Member</h1>
            <hr />
            <motion.div
              className="cards"
              key={1}
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate(`/members/Wondae 원대`)}
            >
              <img src={Wondae} alt={"wondae 원대"} />
              <h2>Wondae 원대</h2>
            </motion.div>
          </div>
        </div>
      </MemberCons>
    </MemCon>
  );
};
const MemCon = styled.div`
  //height: 100%;
  margin: auto;
  position: relative;
  display: block;
  //width: 100%;
  background-color: #323232;
  & h3 {
    position: relative;
    z-index: 13;
    font-size: 1.3rem;
    /* /margin-top: 2rem; */
    left: 10rem;
    padding-top: 2rem;
    text-align: left;
    color: #ffffff96;
    text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
  }
`;
const MemberCons = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-items: center;
  //padding: 2rem;
  background-color: #323232;

  & .con {
    position: relative;

    width: 80%;
    background-color: #91919122;
    // display: flex;
    border-radius: 15px;
    border: 1px solid #ffffff6e;
    // flex-wrap: wrap;
    z-index: 13;
    margin: auto;
    padding: 1rem;
    margin-left: 0rem;
    margin: auto;

    // height: 100%;
  }
  & .cons {
    position: relative;

    width: 100%;

    display: flex;
    margin: auto;
    border-radius: 15px;

    flex-wrap: wrap;
    z-index: 13;

    margin-left: 0rem;
    margin: auto;
    // height: 100%;;
  }
  & .card {
    position: relative;
    width: 180px;
    height: 230px;
    border-radius: 15px;
    margin: 20px;
    background-color: #dddddd;
    cursor: pointer;
    box-shadow: 0px 0px 8px 3px rgba(44, 44, 44, 0.5);

    margin-left: 0rem;
    margin: 1rem auto;
    @media (max-width: 500px) {
      width: 150px;
      height: 200px;
    }

    & h2 {
      font-size: 1rem;
      font-weight: 400;
      margin: 0.4rem;
      color: #585858;
    }
  }
  & .cards {
    position: relative;
    //top: 4rem;
    width: 180px;
    height: 230px;
    border-radius: 15px;
    margin: 20px;
    background-color: #dddddd;
    margin-left: 0rem;
    margin: 1rem auto;
    cursor: pointer;
    box-shadow: 0px 0px 8px 3px rgba(44, 44, 44, 0.5);

    margin: 1rem auto;
    @media (max-width: 500px) {
      width: 150px;
      height: 200px;
    }

    & h2 {
      font-size: 1rem;
      font-weight: 400;
      margin: 0.4rem;
      color: #585858;
    }
  }
  & .info {
    margin-left: 0rem;
    margin: 1rem auto;
    @media (max-width: 750px) {
      margin-left: 0rem;
      margin: 1rem auto;
    }
    & h1 {
      font-size: 1rem;
      margin: 0.5rem;
      color: #dcdcdcdc;
    }
  }
  & .empty {
    width: 200px;
    height: 270px;
    border-radius: 15px;
    margin: 20px;
    margin-left: 0rem;
    margin: 1rem auto;
    @media (max-width: 750px) {
      visibility: hidden;
      width: 0px;
      height: 0px;
      margin: 0px;
      margin-left: 0rem;
      margin: 1rem auto;
    }
  }
  & img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width: 180px;
    height: 190px;
    @media (max-width: 500px) {
      width: 150px;
      height: 160px;
    }
  }

  & hr {
    border: none;
    background-color: #ffffff89;
    height: 1px;
    border-radius: 1px;
    margin: 0px 3rem;
  }
`;

export default MemberCon;
