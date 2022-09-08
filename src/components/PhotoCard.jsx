import React from "react";
import styled from "styled-components";

import { BsBoxArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { cardItem } from "../API/album";
const PhotoCard = () => {
  const navigate = useNavigate();
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
                onClick={() => {
                  navigate(`/albums/${item.name}/details/`);
                }}
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
  //width: 90%;
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
  background: #fd3071;
  border-radius: 10px;
  margin: 20px;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
  @media (max-width: 1000px) and (min-width: 830px) {
    width: 600px;
  }
  @media (min-width: 580px) and (max-width: 830px) {
    width: 550px;
    display: flex;
    height: 100%;
  }
  @media (max-width: 580px) {
    width: 450px;
    display: flex;
    height: 100%;
  }
  @media (max-width: 450px) {
    width: 350px;
    display: flex;
    height: 100%;
  }
  @media (max-width: 400px) {
    width: 300px;
    display: flex;
    height: 100%;
  }
  @media (max-width: 380px) {
    width: 280px;
    display: flex;
    height: 100%;
  }
  & button {
    border: none;
    font-weight: 300;
    float: right;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #534949;
    color: #cde448;
    position: relative;
    top: -45px;
    left: 505px;
    cursor: pointer;
    box-shadow: 0px 0px 3px 2px rgba(62, 0, 22, 0.295);
    @media (min-width: 580px) and (max-width: 830px) {
      left: 445px;
    }
    @media (max-width: 580px) {
      top: -10px;
      left: 255px;
    }
    @media (max-width: 440px) {
      top: -10px;
      left: 205px;
    }
    @media (max-width: 380px) {
      top: -10px;
      left: 170px;
    }
    @media (max-width: 280px) {
      top: -10px;
      left: 150px;
    }
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
`;

const AlImg1 = styled.img`
  background-color: #4f4f4f;

  position: relative;
  width: 40%;
  height: 100%;
  margin: auto;
  object-fit: contain;
  @media (min-width: 550px) and (max-width: 830px) {
    width: 100%;
    height: 300px;
  }
  @media (max-width: 550px) {
    width: 100%;
    height: 300px;
  }
`;

const Info = styled.div`
  position: relative;

  width: 60%;
  height: 70%;

  color: #fff;
  @media (min-width: 550px) and (max-width: 830px) {
    width: 90%;
    & h1 {
      font-size: 14px;
    }
  }
  @media (max-width: 550px) {
    width: 90%;
  }
  & h1 {
    margin: 0.5rem;
    margin-top: 1.5rem;
    font-size: 17px;
    color: #fff;
    @media (max-width: 550px) {
      font-size: 14px;
    }
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
    @media (max-width: 550px) {
      font-size: 13px;
    }
    & span {
      font-size: 13px;

      color: #dfdfdf;
      margin-right: 10px;
      @media (max-width: 550px) {
        font-size: 12px;
      }
    }
  }
  & hr {
    border: none;
    height: 1px;
    background-color: #ffffffa5;
    margin-bottom: px;
  }
`;

export default PhotoCard;
