import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { gallery } from "../../API/galleryImages";
import ImagePopUp from "../../components/ImagePopUp";
import Dongree from "../../Assets/Dongreefull.png";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { BsPlayFill } from "react-icons/bs";

import { SiApplemusic } from "react-icons/si";
import fancafe from "../../Assets/fancafe.png";

import { motion } from "framer-motion";
const MemInfoCon = ({ info }) => {
  const [selected, setselected] = useState("");
  const [exAct, setexAct] = useState("");
  const [exActM, setexActM] = useState("");

  const [exActS, setexActS] = useState("");

  const navigate = useNavigate();
  return (
    <InfoCons>
      <div className="heading">
        <h1>{info?.name}</h1>
        <span>
          {info?.name} {}
        </span>
        <h2> FROM EAST TO WORLD!</h2>

        <h3>Introduction</h3>
      </div>
      <img className="dong" src={Dongree} alt="Dongree" />
      <div className="con">
        <div className="infocon">
          <ul>
            <li>
              <h1>Name:</h1> <p>{info?.name}</p>
            </li>
            <li>
              <h1>Korean Name:</h1> <p>{info?.krName}</p>
            </li>
            <li>
              <h1>Stage Name:</h1> <p>{info?.stgName}</p>
            </li>
            <li>
              <h1>Role/Position:</h1> <p>{info?.role}</p>
            </li>
            <li>
              <h1>Unit:</h1> <p>{info?.unit}</p>
            </li>
            <li>
              {" "}
              <h1>Birthday:</h1> <p>{info?.birthDay}</p>
            </li>
            <li>
              {" "}
              <h1>Age:</h1> <p>{info?.age}</p>
            </li>
            <li>
              {" "}
              <h1>Hometown:</h1> <p>{info?.homeTown}</p>
            </li>
            <li>
              {" "}
              <h1>Country:</h1> <p>{info?.country}</p>
            </li>
            <li>
              {" "}
              <h1>Blood Type:</h1> <p>{info?.bloodType}</p>
            </li>
            <li>
              {" "}
              <h1>MBTI:</h1> <p>{info?.mbti}</p>
            </li>
            <li>
              {" "}
              <h1>Height:</h1> <p>{info?.height}</p>
            </li>
            <li>
              {" "}
              <h1>Weight:</h1> <p>{info?.weight}</p>
            </li>
          </ul>
        </div>
        <div className="infocon3">
          <h1>Official Accounts</h1>

          <ul>
            <li>
              {info?.yt && (
                <motion.div className="yt" whileHover={{ scale: 0.95 }}>
                  <a href={info?.yt}>
                    <AiFillYoutube />
                  </a>
                </motion.div>
              )}
            </li>
            <li>
              {info?.inst && (
                <motion.div className="in" whileHover={{ scale: 0.95 }}>
                  <a href={info?.inst}>
                    <AiFillInstagram />
                  </a>
                </motion.div>
              )}
            </li>
            <li>
              {info?.twt && (
                <motion.div className="tw" whileHover={{ scale: 0.95 }}>
                  <a href={info?.twt}>
                    <AiOutlineTwitter />
                  </a>
                </motion.div>
              )}
            </li>
            <li>
              {info?.fb && (
                <motion.div className="fb" whileHover={{ scale: 0.95 }}>
                  <a href={info?.fb}>
                    <FaFacebookF />
                  </a>
                </motion.div>
              )}
            </li>
            <li>
              {info?.tktk && (
                <motion.div className="tk" whileHover={{ scale: 0.95 }}>
                  <a href={info?.tktk}>
                    <FaTiktok />
                  </a>
                </motion.div>
              )}
            </li>
            <li>
              {info?.spt && (
                <motion.div className="sp" whileHover={{ scale: 0.95 }}>
                  <img href={info?.spt} alt="">
                    <FaSpotify />
                  </img>
                </motion.div>
              )}
            </li>
          </ul>
        </div>
        <div className="infos">
          <h1> Infos</h1>
          <h2>Facts and Talents</h2>
          {info?.infos?.map((ins, i) => (
            <div className="box" key={i}>
              {ins.info}
              <hr />
            </div>
          ))}
          <h2>Hobbies</h2>
          {info?.hobbies?.map((ins, i) => (
            <div className="box" key={i}>
              {ins.hobby}
              <hr />
            </div>
          ))}
        </div>
      </div>
      <div className="tablecon">
        <div className="theading">
          <h1>Activities/Shows</h1>
        </div>
        <div className="tablewrap">
          <ul>
            {info?.activities?.map((mem, i) => (
              <li className={exAct === i ? " active" : " inactive"} key={i}>
                <div className={exAct === i ? "con active" : "con inactive"}>
                  <img
                    src={mem.imgLink}
                    alt=""
                    className={exAct === i ? " active" : " inactive"}
                  />
                  <div
                    className={exAct === i ? "title active" : "title inactive"}
                  >
                    <h1>Title: {mem.title}</h1>
                    <h2>
                      Category:{"  "}
                      {mem.actType}
                    </h2>
                  </div>
                </div>
                <div
                  className={
                    exAct === i ? "details active" : "details inactive"
                  }
                >
                  <span>Summary/About: {mem.body}</span>

                  <span>Date: {mem.date}</span>
                  <span className="link ">
                    <motion.button
                      whileHover={{ scale: 0.95 }}
                      className="s"
                      onClick={() => {
                        navigate(mem.vidlink ? mem.vidLink : mem.ytLink);
                      }}
                    >
                      {" "}
                      Watch Here{" "}
                      <i>
                        <BsPlayFill />
                      </i>
                    </motion.button>
                  </span>
                </div>

                <button
                  className="arrow"
                  onClick={() => {
                    exAct !== i ? setexAct(i) : setexAct("");
                  }}
                >
                  {exAct === i ? (
                    <>
                      close
                      <i>
                        <IoIosArrowUp />
                      </i>
                    </>
                  ) : (
                    <>
                      Expand Details{" "}
                      <i>
                        <IoIosArrowDown />
                      </i>
                    </>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="tablecon">
        <div className="theading">
          <h1>Movies/Series</h1>
        </div>
        <div className="tablewrap">
          <ul>
            {info?.drama?.map((mem, i) => (
              <li className={exActM === i ? " active" : " inactive"} key={i}>
                <div className={exActM === i ? "con active" : "con inactive"}>
                  <img
                    src={mem.imgLink}
                    alt=""
                    className={exActM === i ? " active" : " inactive"}
                  />
                  <div
                    className={exActM === i ? "title active" : "title inactive"}
                  >
                    <h1>Title: {mem.title}</h1>
                    <h2>Role: {mem.role}</h2>
                  </div>
                </div>
                <div
                  className={
                    exActM === i ? "details active" : "details inactive"
                  }
                >
                  <span>Summary/About: {mem.desc}</span>

                  <span>Date: {mem.date}</span>
                  <span>Episode/s:{mem.noOfEp}</span>
                  <span className="link ">
                    <motion.button
                      whileHover={{ scale: 0.95 }}
                      className="s"
                      onClick={() => {
                        navigate(mem.vidlink ? mem.vidLink : mem.ytLink);
                      }}
                    >
                      {" "}
                      Watch Here{" "}
                      <i>
                        <BsPlayFill />
                      </i>
                    </motion.button>
                  </span>
                </div>

                <button
                  className="arrow"
                  onClick={() => {
                    exActM !== i ? setexActM(i) : setexActM("");
                  }}
                >
                  {exActM === i ? (
                    <>
                      close
                      <i>
                        <IoIosArrowUp />
                      </i>
                    </>
                  ) : (
                    <>
                      Expand Details{" "}
                      <i>
                        <IoIosArrowDown />
                      </i>
                    </>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="tablecon">
        <div className="theading">
          <h1>Solo Song</h1>
        </div>
        <div className="tablewrap">
          <ul>
            {info?.soloMusic?.map((mem, i) => (
              <li className={exActS === i ? " active" : " inactive"} key={i}>
                <div className={exActS === i ? "con active" : "con inactive"}>
                  <img
                    src={mem.imgLink}
                    alt=""
                    className={exActS === i ? " active" : " inactive"}
                  />
                  <div
                    className={exActS === i ? "title active" : "title inactive"}
                  >
                    <h1>Title: {mem.title}</h1>
                  </div>
                </div>
                <div
                  className={
                    exActS === i ? "details active" : "details inactive"
                  }
                >
                  <span>Release date: {mem.date}</span>
                  <div className="musicLink">
                    <p>Listen here:</p>
                    {mem?.apl && (
                      <motion.div className="tk" whileHover={{ scale: 0.95 }}>
                        <a href={mem?.apl}>
                          <SiApplemusic />
                        </a>
                      </motion.div>
                    )}
                    {mem?.sp && (
                      <motion.div
                        className="tk sps"
                        whileHover={{ scale: 0.95 }}
                      >
                        <a href={mem?.sp}>
                          <FaSpotify />
                        </a>
                      </motion.div>
                    )}
                    {mem?.mln && (
                      <motion.div
                        className="links"
                        whileHover={{ scale: 0.95 }}
                      >
                        <a href={mem.mln}>
                          <img
                            className="s"
                            src="https://studioweve.com/wp-content/uploads/2020/06/melon.png"
                            alt="melon music"
                          />
                        </a>
                      </motion.div>
                    )}
                  </div>

                  <span className="link ">
                    <motion.button
                      whileHover={{ scale: 0.95 }}
                      className="s"
                      onClick={() => {
                        navigate(mem.vidlink ? mem.vidLink : mem.ytLink);
                      }}
                    >
                      {" "}
                      Watch Here{" "}
                      <i>
                        <BsPlayFill />
                      </i>
                    </motion.button>
                  </span>
                </div>

                <button
                  className="arrow"
                  onClick={() => {
                    exActS !== i ? setexActS(i) : setexActS("");
                  }}
                >
                  {exActS === i ? (
                    <>
                      close
                      <i>
                        <IoIosArrowUp />
                      </i>
                    </>
                  ) : (
                    <>
                      Expand Details{" "}
                      <i>
                        <IoIosArrowDown />
                      </i>
                    </>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <GalleryCons>
        <div className="gallery">
          <h1>Gallery</h1>
          <div className="imagesCon">
            {info?.photos?.slice(0, 8).map((gal, index) => (
              <>
                <div className="text">
                  <button
                    onClick={() => {
                      const option = index < 7;
                      if (option) {
                        setselected(index + 1);
                      } else {
                        navigate(
                          `/about/main_gallery/member/${info.stageName}`
                        );
                      }
                    }}
                  >
                    <img
                      index={index}
                      src={gal.imgLink}
                      alt={gal.alt}
                      className={index === 7 ? "gallery last" : "gallery"}
                    />
                    {index === 7 && <h1>see more</h1>}
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
        {selected && (
          <ImagePopUp
            images={info?.photos}
            selected={setselected}
            index={selected}
          />
        )}
      </GalleryCons>
    </InfoCons>
  );
};
const InfoCons = styled.div`
  position: relative;
  height: 100%;
  background-color: #323232;

  width: 100%;
  @media (max-width: 550px) {
    top: -5rem;
  }
  & .con {
    width: 70%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 800px) {
      width: 90%;
    }
  }
  & .infocon {
    background-color: #91919122;
    display: flex;
    border-radius: 15px;
    border: 1px solid #ffffff6e;
    flex-wrap: wrap;
    margin: auto;
    margin-bottom: 1rem;
    position: relative;
    width: 50%;
    z-index: 15;
    @media (max-width: 1200px) {
      width: 60%;
    }
    @media (max-width: 800px) {
      width: 70%;
    }
    @media (max-width: 550px) {
      width: 90%;
    }
    & ul {
      & li {
        list-style: none;
        text-align: left;
        display: inline-flex;
        width: 90%;
        margin: 0rem auto;
        h1 {
          position: relative;
          top: 5px;
          font-size: 13px;
          color: #fff;
          margin-right: 1rem;
        }
        p {
          font-size: 13px;
          color: #ececec;
        }
      }
    }
  }
  & .infos {
    background-color: #91919122;
    // display: flexbox;
    border-radius: 15px;
    border: 1px solid #ffffff6e;
    flex-wrap: wrap;
    margin: auto;

    position: relative;
    width: 50%;
    z-index: 15;

    @media (max-width: 800px) {
      width: 70%;
    }
    @media (max-width: 550px) {
      width: 90%;
    }
    & h1 {
      font-size: 1rem;
      color: #f3f3f3;
      margin-bottom: 2rem;
      text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
    }
    & h2 {
      text-align: left;
      font-weight: 600;
      font-size: 1rem;
      color: #e6e6e6;
      margin-bottom: 2rem;
      text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
      margin-left: 1rem;
    }
    & .box {
      font-size: 1rem;
      color: #f3f3f3;
      margin: 0.5rem;
      text-transform: capitalize;
      margin-bottom: 1rem;
      & hr {
        background-color: #a0a0a0;
        height: 1px;
        border: none;

        width: 70%;
      }
    }
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
      @media (max-width: 800px) {
        font-size: 2.3rem;
        left: 6rem;
      }
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
  & .infocon3 {
    background-color: #91919122;
    width: 300px;
    border-radius: 15px;
    border: 1px solid #ffffff6e;
    //flex-wrap: wrap;
    margin: 1rem auto;
    padding: 0.5rem;
    height: 300px;
    position: relative;
    z-index: 15;
    //margin: auto;
    @media (max-width: 1200px) {
      width: 250px;
    }
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
          font-size: 1.4rem;
          & a {
            color: #fff;
            position: relative;
            top: 13px;
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
          &.sp {
            background-color: #1db954;
          }
        }
        & .tk.sp {
          background-color: #1db954;
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
  & .tablecon {
    //   background-color: #91919122;
    // display: flexbox;
    border-radius: 15px;
    border: 1px solid #ffffff6e;
    margin: 1rem auto;

    position: relative;
    width: 50%;
    z-index: 15;

    @media (max-width: 800px) {
      width: 70%;
    }
    @media (max-width: 550px) {
      width: 90%;
    }

    & .tablewrap {
      margin: auto;
      width: 90%;
      ul {
        list-style: none;
        color: #fff;
        margin: auto;
        padding: 0;
        li {
          display: flex;

          flex-direction: column;

          width: 100%;
          align-items: center;
          background-color: #91919122;
          margin: 0.5rem auto;
          border-radius: 10px;
          box-shadow: 1px 1px 2px 2px rgba(44, 44, 44, 0.3);
          cursor: pointer;
          padding-bottom: 1rem;
          & .con.inactive {
            display: inline-flex;
            width: 100%;
          }
          & .arrow {
            font-size: 13px;
            color: #bedc4a;
            cursor: pointer;
            background-color: transparent;
            border: none;
            & i {
              position: relative;
              top: 5px;
              margin-right: 10px;
              font-size: 1rem;
            }
          }
          & img {
            margin: auto;
            &.inactive {
              width: 100px;
              height: 100px;
              position: relative;
              left: 0px;
              margin: 0;
            }
            width: 200px;
            height: 200px;
            object-fit: cover;
          }
          & .title {
            padding: 5px 1.5rem;
            &.inactive {
              height: 80px;

              display: flex;
              flex-wrap: wrap;
              padding-top: 1rem;
              & h1 {
                margin-right: 1rem;
              }
            }
            &.active {
              width: 90%;
              & h1 {
                margin-bottom: 2rem;
              }
            }
            span {
              margin-top: 1rem;
              text-align: left;
            }
            & h1 {
              font-size: 1rem;
              color: #f3f3f3;

              text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
            }
          }
          & .details {
            &.inactive {
              height: 0;
              visibility: hidden;
            }
            &.active {
              visibility: visible;
            }
            display: flex;
            width: 90%;
            flex-direction: column;
          }
          span {
            width: 90%;
            margin: 0.5rem auto;
            text-align: left;
            &.link {
              position: relative;
              width: 90%;
              margin: auto;
              button {
                color: #fff;
                background-color: #bc185a;
                border: none;
                padding: 10px 20px;
                border-radius: 10px;
                margin: auto;
                box-shadow: 1px 1px 2px 2px rgba(44, 44, 44, 0.3);
                position: absolute;
                right: 0rem;
                top: -2rem;
                cursor: pointer;
                &.s {
                  position: relative;
                  top: 0;
                  & i {
                    font-size: 1.2rem;
                    object-fit: contain;
                    position: relative;
                    top: 3px;
                    right: -5px;
                  }
                }
              }
            }
          }
        }
        li:hover {
        }
        li:nth-child(even) {
          background-color: #48484820;
        }
      }
    }
    & .theading {
      position: relative;
      //width: 100%;
      /* justify-content: center;
      align-items: center; */
      margin: auto;
      & h1 {
        font-size: 1rem;
        text-align: center;
        margin: 1rem auto;
        color: #f3f3f3;
        margin-bottom: 2rem;
        text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
      }
    }

    & h2 {
      text-align: left;
      font-weight: 600;
      font-size: 1rem;
      color: #e6e6e6;
      margin-bottom: 2rem;
      text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
      margin-left: 1rem;
    }
  }
  & .musicLink {
    margin: 0.5rem 1.3rem;
    cursor: pointer;
    display: inline-flex;
    @media (max-width: 290px) {
      margin: 0.3rem 0.4rem;
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
      &.sps {
        background-color: #1db954;
      }
      &.apl {
      }
      margin: 0.5rem;
    }

    & a {
      color: #fff;
      position: relative;
      top: 10px;
      margin: auto;
    }
    & .links img.s {
      text-align: center;
      margin: 0 0.5rem;
      border-radius: 15px;
      justify-content: center;
      height: 50px;
      box-shadow: 0px 0px 2px 3px rgba(44, 44, 44, 0.3);
      width: 50px;
      position: relative;
      top: -1.5px;
    }
  }
`;

const GalleryCons = styled.div`
  position: relative;
  margin: auto;
  margin-top: 2rem;
  background-color: #323232;
  padding-bottom: 3rem;
  height: 100vh;
  & h1 {
    position: relative;
    z-index: 13;
    font-size: 1.3rem;
    color: #ffffff96;
    text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
  }
  & .gallery {
    background-color: #91919122;
    // display: flexbox;
    border-radius: 15px;
    border: 1px solid #ffffff6e;
    flex-wrap: wrap;
    margin: auto;
    width: 80%;
    z-index: 13;

    & .imagesCon {
      margin: 1rem;
      margin-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      & img {
        height: 200px;
        width: 200px;
        border-radius: 2px;
        gap: 5;
        object-fit: cover;
        cursor: pointer;
        filter: brightness(0.8);
        @media (max-width: 1200px) and (min-width: 768px) {
          width: 150px;
          height: 150px;
        }
        @media (min-width: 500px) and (max-width: 768px) {
          width: 150px;
          height: 150px;
        }
        @media (max-width: 500px) {
          width: 120px;
          height: 120px;
        }
        @media (max-width: 350px) {
          width: 90px;
          height: 90px;
        }
        @media (max-width: 305px) {
          width: 80px;
          height: 80px;
        }
        @media (max-width: 275px) {
          width: 70px;
          height: 70px;
        }
        &.gallery.last {
          filter: brightness(0.3);
          &:hover {
            filter: brightness(0.2);
          }
        }
        &:hover {
          filter: brightness(1);
        }
      }
      & button {
        background-color: transparent;
        border: none;
      }
      & .text {
        & h1 {
          position: relative;
          top: -135px;
          color: #fff;
          cursor: pointer;
          @media (max-width: 1200px) {
            top: -110px;
            font-size: 15px;
          }
          @media (max-width: 350px) {
            top: -70px;
            font-size: 13px;
          }
        }
      }
    }
  }
`;
export default MemInfoCon;
