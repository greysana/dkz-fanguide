import React from "react";
import styled from "styled-components";
import Album1 from "../Assets/PausePb.jpg";
import Album2 from "../Assets/PauseKit.jpg";
import { BsBoxArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
const cardItem = [
  {
    id: 1,
    images: Album1,
    title: "DKZ 2022 SUMMER PHOTOBOOK",
    body: "This the group's first album release after rebranding group name and adding three new members.",
    version: " Fascinate and Fascinated",
    label: "Dongyo Ent.",
    releaseDate: "April 12, 2022",
    type: "Single",
  },
  {
    id: 2,
    images: Album2,
    title: "DKZ 2022 SUMMER KIT",
    body: "This the group's first album release after rebranding group name and adding three new members.",
    version: " Fascinate and Fascinated",
    label: "Dongyo Ent.",
    releaseDate: "April 12, 2022",
    type: "Single",
  },
];

const MerchCard = () => {
  return (
    <div>
      <AlbumCon>
        {cardItem?.map((item) => (
          <motion.div
            whileHover={{ scale: 1.015 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <Albums key={item.id}>
              <AlImg1 src={item.images} />
              <Info>
                <h1>{item.title}</h1>

                <ul>
                  <li>
                    <p>
                      {item.body}
                      <br />
                    </p>

                    <hr></hr>
                  </li>
                  <li>
                    <span>version/s:</span>
                    {item.version}
                  </li>
                  <br />
                  <li>
                    <span>label:</span>
                    {item.label}
                  </li>
                  <li>
                    <span>release date:</span>
                    {item.releaseDate}
                  </li>
                  <li>
                    <span>type:</span>
                    {item.type}
                  </li>
                </ul>
              </Info>
              <motion.button
                whileHover={{ translateX: 10 }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                onClick={{ scale: 0.9 }}
              >
                {" "}
                More details{" "}
                <i>
                  {" "}
                  <BsBoxArrowRight />
                </i>
              </motion.button>
            </Albums>
          </motion.div>
        ))}
      </AlbumCon>
    </div>
  );
};

const AlbumCon = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  margin: auto;
  z-index: 13;
  justify-content: center;
  align-items: center;
`;

const Albums = styled.div`
  position: relative;
  height: 300px;
  width: 600px;
  display: flex;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  padding: 0 10px;
  flex-wrap: wrap;
  display: inline-flex;

  background: linear-gradient(
    17deg,
    rgba(240, 0, 76, 1) 0%,
    #fe3071 29%,
    #ff3474 63%,
    rgba(255, 84, 87, 1) 75%,
    #ff5252 92%,
    rgba(255, 80, 80, 0.9) 100%
  );
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
  & button {
    border: 1px solid #ffffff81;
    font-weight: 500;
    float: right;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #e4e4e467;
    color: #e8e8e8;
    position: relative;
    top: -45px;
    left: 505px;
    cursor: pointer;
    box-shadow: 0px 0px 3px 2px rgba(62, 0, 22, 0.295);

    & i {
      position: relative;
      font-weight: bold;
      top: 2.5px;
      left: 5px;
    }
    &:focus {
      border: none;
    }
  }
  /* &:hover {
    transform: scale(1.01);
  } */
`;

const AlImg1 = styled.img`
  background-color: #4b04187e;

  position: relative;
  width: 40%;
  height: 100%;
  margin: auto;
  object-fit: contain;
`;

const Info = styled.div`
  position: relative;

  width: 60%;
  height: 70%;

  color: #fff;
  & h1 {
    margin: 0.5rem;
    margin-top: 1.5rem;
    font-size: 17px;
    color: #fff;
  }
  & ul {
    margin: auto;
    margin-top: 10px;
    margin-right: 10px;
    text-decoration: none;
    text-align: left;
  }
  & li {
    text-decoration: none;
    list-style: none;
    & span {
      font-size: 13px;
      color: #dfdfdf;
      margin-right: 10px;
    }
  }
  & hr {
    border: none;
    height: 1px;
    background-color: #ffffffa5;
    margin-bottom: px;
  }
`;

export default MerchCard;