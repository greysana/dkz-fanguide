import React from "react";
import styled from "styled-components";
import Dongree from "../../Assets/Dongreefull.png";
import Silver from "../../Assets/silverstarlight.png";
import logo from "../../Assets/DKZlogo.png";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import fancafe from "../../Assets/fancafe.png";

import { motion } from "framer-motion";

const InfoCon = () => {
  return (
    <InfoCons>
      <div className="heading">
        <h1>DKZ</h1>
        <span>DKZ</span>
        <h2> FROM EAST TO WORLD!</h2>

        <h3>Introduction</h3>
      </div>
      <img className="dong" src={Dongree} alt="Dongree" />
      <div className="infoCons">
        <div className="infocon">
          <p>
            <b>DKZ (디케이지)</b>, formerly known as <b>DONGKIZ (동키즈)</b>, is
            a South Korean boy group under Dongyo Entertainment. The group is
            consist of 7 members:{" "}
            <b>
              {" "}
              Kyoungyoon, Munik, Jaechan, Jonghyeong, Giseok, Mingyu, & Sehyeon
            </b>
            . <br /> <br />
            The member Munik is currently inactive/ on hiatus due to he is
            currently recovering from a health issue. <br /> <br /> The former
            member and leader Wondae left the group on March 18, 2022. <br />{" "}
            <br /> They changed their group name from DONGKIZ to DKZ on March
            28, 2022.
            <br /> <br />
            DKZ released their pre-debut single on November 21, 2018 and
            officially debuted on April 24, 2019 with the album “DONGKIZ On The
            Block”. <br /> <br />
            On March 28th, 2022 DKZ revealed the three new members: Sehyeon,
            Giseok, Mingyu and the three new members made their official debut
            on the released of DKZ’s 6th single album 'Chase Episode 2. MAUM' on
            April 12, 2022.
          </p>
        </div>
        <div className="infocon1">
          <ul>
            <li>
              <p className="la">Labels:</p>
              <p className="an">Dongyo Ent. </p>
            </li>
            <li>
              <p className="la">Debut:</p>
              <p className="an"> April 24, 2019 </p>
            </li>
            <li>
              <p className="la">Active years:</p>
              <p className="an"> 2018-present </p>
            </li>
            <li>
              <p className="la">Country:</p>
              <p className="an"> South Korea</p>
            </li>
            <li>
              <p className="la">Fandom:</p>
              <p className="an"> Dong-Ari/ Ari</p>
            </li>
            <li>
              <p className="la">Fandom Colors:</p>
              <p className="an">
                {" "}
                <div className="colorcon">
                  <div className="lovepotion"></div>{" "}
                  <div className="l424xgc"></div>{" "}
                  <div className="limepunch"></div>
                  <img src={Silver} alt="" />
                </div>
              </p>
            </li>
          </ul>
        </div>
        <div className="infocon2">
          <img src={logo} alt="" />
          <h1>Logo</h1>
        </div>
        <div className="infocon3">
          <h1>Official Accounts</h1>

          <ul>
            <li>
              <motion.div className="yt" whileHover={{ scale: 1.02 }}>
                <a href="https://www.youtube.com/c/DKZ_DY/featured">
                  <AiFillYoutube />
                </a>
              </motion.div>
            </li>
            <li>
              <motion.div className="in" whileHover={{ scale: 1.02 }}>
                <a href="">
                  <AiFillInstagram />
                </a>
              </motion.div>
            </li>
            <li>
              <motion.div className="tw" whileHover={{ scale: 1.02 }}>
                <a href="https://twitter.com/dkz_dy">
                  <AiOutlineTwitter />
                </a>
              </motion.div>
            </li>
            <li>
              <motion.div className="fb" whileHover={{ scale: 1.02 }}>
                <a href="https://web.facebook.com/dkzdyofficial?_rdc=1&_rdr">
                  <FaFacebookF />
                </a>
              </motion.div>
            </li>
            <li>
              <motion.div className="tk" whileHover={{ scale: 1.02 }}>
                <a href="https://www.tiktok.com/@dkz_dy">
                  <FaTiktok />
                </a>
              </motion.div>
            </li>
            <li>
              <motion.div className="sp" whileHover={{ scale: 1.02 }}>
                <a href="https://open.spotify.com/artist/31eyTcfjAke5hFX3az3nRE">
                  <FaSpotify />
                </a>
              </motion.div>
            </li>

            <li>
              <motion.div className="link" whileHover={{ scale: 1.02 }}>
                <a href="https://cafe.daum.net/DONGKIZ">
                  <img src={fancafe} alt="fancafe" />
                </a>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </InfoCons>
  );
};
const InfoCons = styled.div`
  position: relative;
  // height: 100%;
  background-color: #323232;
  width: 100%;

  & .infoCons {
    display: flex;
    width: 80%;
    margin: auto;
    flex-wrap: wrap;

    & .infocon {
      background-color: #91919122;
      // display: flexbox;
      border-radius: 15px;
      border: 1px solid #ffffff6e;
      flex-wrap: wrap;
      margin: 1rem auto;
      // height: 500px;
      position: relative;
      width: 100%;
      z-index: 15;
      padding: 10px;
      & p {
        color: #ffffff;
        text-align: left;
        margin: 2rem;
      }
      & b {
        font-weight: 600;
      }
    }
    & .infocon1 {
      background-color: #91919122;
      width: 350px;
      border-radius: 15px;
      border: 1px solid #ffffff6e;
      //flex-wrap: wrap;
      margin: 1rem auto;
      padding: 0.5rem;
      height: 425px;
      position: relative;
      z-index: 15;
      @media (max-width: 320px) {
        position: relative;
        height: 500px;
      }
      @media (max-width: 230px) {
        height: 400px;
      }
      & ul {
        // position: relative;
        display: block;
        list-style: none;
        color: #fff;
        width: 80%;
        // margin: auto;
        @media (max-width: 320px) {
          position: relative;
          width: 90%;
          left: -2rem;
        }
        & li {
          position: relative;

          // margin: auto 1.5rem;
          //text-align: justify;
          width: 100%;
          display: flex;
          & p {
            @media (max-width: 230px) {
              font-size: 13px;
            }
            &.la {
              color: #ececec;
              text-align: left;
              width: 50%;
              font-weight: 600;
            }
            &.an {
              width: 50%;
              text-align: right;

              & .colorcon {
                display: flex;
                height: 100px;
                display: flex;
                flex-wrap: wrap;
              }
              & .lovepotion {
                height: 40px;
                width: 40px;
                background-color: #be3360;
                margin: auto;
                border-radius: 5px;
                @media (max-width: 230px) {
                  height: 30px;
                  width: 30px;
                }
              }
              & .l424xgc {
                height: 40px;
                width: 40px;
                background-color: #6a6c6a;
                margin: auto;
                border-radius: 5px;
                @media (max-width: 230px) {
                  height: 30px;
                  width: 30px;
                }
              }
              & .limepunch {
                height: 40px;
                width: 40px;
                background-color: #bed542;
                margin: auto;
                border-radius: 5px;
                @media (max-width: 230px) {
                  height: 30px;
                  width: 30px;
                }
              }
              & img {
                height: 40px;
                width: 40px;
                background-color: #bed542;
                margin: auto;
                border-radius: 5px;
                @media (max-width: 230px) {
                  height: 30px;
                  width: 30px;
                }
              }
            }
          }
        }
      }
    }
    & .infocon2 {
      background-color: #91919122;
      width: 350px;
      border-radius: 15px;
      border: 1px solid #ffffff6e;
      //flex-wrap: wrap;
      margin: 1rem auto;
      height: 350px;
      position: relative;
      z-index: 15;
      @media (max-width: 290px) {
        width: 200px;
        height: 200px;
      }
      & img {
        height: 250px;
        width: 250px;
        margin: 1rem auto;
        margin-bottom: 0.2rem;

        @media (max-width: 290px) {
          width: 130px;
          height: 130px;
        }
      }
      & h1 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #eeeeee;
        text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
        @media (max-width: 290px) {
          font-size: 1rem;
        }
      }
      //  margin: auto;
    }
    & .infocon3 {
      background-color: #91919122;
      width: 350px;
      border-radius: 15px;
      border: 1px solid #ffffff6e;
      //flex-wrap: wrap;
      margin: 1rem auto;
      padding: 0.5rem;
      // height: 400px;
      position: relative;
      z-index: 15;
      //margin: auto;
      & h1 {
        font-size: 1rem;
        color: #f3f3f3;
        margin-bottom: 2rem;
        text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
      }
      & ul {
        list-style: none;
        font-size: 1.6rem;
        color: #fff;
        // width: 60%;
        margin: auto;
        display: flexbox;
        flex-wrap: wrap;
        & li {
          margin: 0.5rem 1.3rem;
          cursor: pointer;
          @media (max-width: 290px) {
            margin: 0.3rem 0.4rem;
          }
          & .yt {
            text-align: center;
            margin: auto;
            border-radius: 15px;
            justify-content: center;
            align-items: center;
            background-color: #ff0000;
            height: 50px;
            width: 50px;
            box-shadow: 0px 0px 2px 3px rgba(44, 44, 44, 0.3);
            & a {
              color: #fff;
              position: relative;
              top: 10px;
              margin: auto;
            }
          }
          & .sp {
            text-align: center;
            margin: auto;
            border-radius: 15px;
            justify-content: center;
            background-color: #1db954;
            height: 50px;
            width: 50px;
            box-shadow: 0px 0px 2px 3px rgba(44, 44, 44, 0.3);

            & a {
              color: #fff;
              position: relative;
              top: 10px;
              margin: auto;
            }
          }
          & .fb {
            text-align: center;
            margin: auto;
            border-radius: 15px;
            justify-content: center;
            background-color: #4267b2;
            box-shadow: 0px 0px 2px 3px rgba(44, 44, 44, 0.3);

            height: 50px;
            width: 50px;
            font-size: 1.2rem;
            & a {
              color: #fff;
              position: relative;
              top: 13px;
              margin: auto;
            }
          }
          & .tk {
            text-align: center;
            margin: auto;
            border-radius: 15px;
            justify-content: center;
            background-color: #141414;
            height: 50px;
            width: 50px;
            box-shadow: 0px 0px 2px 3px rgba(44, 44, 44, 0.3);
            font-size: 1.2rem;
            & a {
              color: #fff;
              position: relative;
              top: 13px;
              margin: auto;
            }
          }
          & .tw {
            text-align: center;
            margin: auto;
            border-radius: 15px;
            justify-content: center;
            background-color: #00acee;
            height: 50px;
            box-shadow: 0px 0px 2px 3px rgba(44, 44, 44, 0.3);

            width: 50px;
            & a {
              color: #fff;
              position: relative;
              top: 10px;
              margin: auto;
            }
          }
          & .in {
            text-align: center;
            margin: auto;
            border-radius: 15px;
            justify-content: center;
            height: 50px;
            width: 50px;
            box-shadow: 0px 0px 2px 3px rgba(44, 44, 44, 0.3);

            & a {
              color: #fff;
              position: relative;
              top: 10px;
              margin: auto;
            }
            background: #f09433;
            background: -moz-linear-gradient(
              45deg,
              #f09433 0%,
              #e6683c 25%,
              #dc2743 50%,
              #cc2366 75%,
              #bc1888 100%
            );
            background: -webkit-linear-gradient(
              45deg,
              #f09433 0%,
              #e6683c 25%,
              #dc2743 50%,
              #cc2366 75%,
              #bc1888 100%
            );
            background: linear-gradient(
              45deg,
              #f09433 0%,
              #e6683c 25%,
              #dc2743 50%,
              #cc2366 75%,
              #bc1888 100%
            );
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
          }
          & a {
            color: #fff;
            position: relative;
            top: 10px;
            margin: auto;
          }
          & img {
            text-align: center;
            margin: auto;
            border-radius: 15px;
            justify-content: center;
            height: 50px;
            box-shadow: 0px 0px 2px 3px rgba(44, 44, 44, 0.3);
            width: 50px;
          }
        }
      }
    }
  }
  & .dong {
    height: 500px;
    width: 500px;
    position: absolute;
    filter: brightness(0.4);
    // float: right;
    top: -8rem;
    right: 3rem;
    z-index: 10;
    @media (max-width: 800px) {
      height: 500px;
      width: 500px;
      right: -6rem;
      filter: brightness(0.3);
      overflow: hidden;
    }
  }
  & .heading {
    position: relative;
    // float: left;\
    text-align: left;
    left: 0px;
    width: 33%;
    & h1 {
      position: relative;
      z-index: 13;
      color: #efefef;
      font-size: 2.8rem;
      text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
    }
    & span {
      position: absolute;
      top: -1rem;
      left: 9rem;
      font-weight: 600;
      font-size: 5rem;
      color: #c4c4c41f;
    }
    & h2 {
      position: relative;
      z-index: 13;
      font-size: 1.5rem;
      left: 5rem;
      top: -1.5rem;
      color: #ffffff96;
      text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
    }
    & h3 {
      position: relative;
      z-index: 13;
      font-size: 1.3rem;
      margin-top: 2rem;
      left: 1rem;
      color: #ffffff96;
      text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
    }
    @media (max-width: 800px) {
      //  width: 50%;
      & h1 {
        position: relative;
        z-index: 13;
        color: #efefef;
        font-size: 1.8rem;
        text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
      }
      & span {
        position: absolute;
        top: -1rem;
        left: 3rem;
        z-index: 12;
        font-weight: 600;
        font-size: 4rem;
        color: #c4c4c41f;
      }
      & h2 {
        position: relative;
        z-index: 13;
        font-size: 1rem;
        left: 5rem;
        top: -1.5rem;
        color: #ffffff96;
        text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
      }
      & h3 {
        position: relative;
        z-index: 13;
        font-size: 1rem;
        margin-top: 2rem;
        left: 1rem;
        color: #ffffff96;
        text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
      }
    }
  }
`;

export default InfoCon;
