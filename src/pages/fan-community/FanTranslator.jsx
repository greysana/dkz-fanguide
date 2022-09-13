import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import kyoungyoon from "../../Assets/Kyoungyoon.jpg";
import sehyeon from "../../Assets/Sehyeon.jpg";
import mingyu from "../../Assets/Mingyu.jpg";
import munik from "../../Assets/Munik.jpg";
import jaechan from "../../Assets/Jaechan.jpg";
import jonghyeong from "../../Assets/Jonghyeong.jpg";
import giseok from "../../Assets/Giseok.jpg";
import dkz from "../../Assets/DKZlogo.png";
import { TwitterTweetEmbed, TwitterVideoEmbed } from "react-twitter-embed";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
//import TweetEmbed from "react-tweet-embed";

const images = [
  {
    id: 1,
    accName: "Luna",
    url: "https://twitter.com/dhrxhrrl/status/1567918354622738432",
  },
  {
    id: 2,
    accName: "Luna",
  },
  {
    id: 3,
    accName: "Luna",
  },
];

const fanTranslator = [
  {
    id: 1,
    accName: "Luna",
    bio: "매일 행복할 순 없지만, 행복한 것들을 매일 있다 - 세현 🐰 You can't be happy every day, but there are happy things every day - Sehyeon 🐰",
    accLink: "https://twitter.com/dhrxhrrl",
    member: ["dkz", "mingyu", "munik", "jaechan", "jonghyeong", "giseok"],
    lang: ["English"],
    highlightTweets: [
      {
        tweetId: "1567918354622738432",
      },
      {
        tweetId: "1567560336097804288",
      },
      {
        tweetId: "1567756662727135232",
      },
    ],
  },
  {
    id: 2,
    accName: "jaechanism",
    bio: "매일 행복할 순 없지만, 행복한 것들을 매일 있다 - 세현 🐰 You can't be happy every day, but there are happy things every day - Sehyeon 🐰",
    accLink: "https://twitter.com/dhrxhrrl",
    member: [
      "sehyeon",
      "kyoungyoon",
      "dkz",
      "mingyu",
      "munik",
      "jaechan",
      "jonghyeong",
      "giseok",
    ],
    lang: ["japanese"],
    highlightTweets: [
      {
        tweetId: "1567918354622738432",
      },
      {
        tweetId: "1567560336097804288",
      },
      {
        tweetId: "1567756662727135232",
      },
    ],
  },
  {
    id: 2,
    accName: "dkzism",
    bio: "매일 행복할 순 없지만, 행복한 것들을 매일 있다 - 세현 🐰 You can't be happy every day, but there are happy things every day - Sehyeon 🐰",
    accLink: "https://twitter.com/dhrxhrrl",
    member: ["sehyeon", "kyoungyoon", "dkz", "mingyu", "jonghyeong", "giseok"],
    highlightTweets: [
      {
        tweetId: "1567918354622738432",
      },
      {
        tweetId: "1567560336097804288",
      },
      {
        tweetId: "1567756662727135232",
      },
    ],
  },
];

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

const FanTranslator = () => {
  const [active, setactive] = useState("dkz");
  const [show, setshow] = useState(0);

  const toGiseok = useRef(null);
  const toDkz = useRef(null);

  const nav = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const loc = location.pathname;
    if (loc.includes("dkz")) {
      setactive("dkz");
    } else if (loc.includes("kyoungyoon")) {
      setactive("kyoungyoon");
    } else if (loc.includes("sehyeon")) {
      setactive("sehyeon");
    } else if (loc.includes("mingyu")) {
      setactive("mingyu");
    } else if (loc.includes("munik")) {
      setactive("munik");
    } else if (loc.includes("jaechan")) {
      setactive("jaechan");
    } else if (loc.includes("jonghyeong")) {
      setactive("jonghyeong");
    } else if (loc.includes("giseok")) {
      setactive("giseok");
    }
    setshow(0);
  }, [location]);

  const handleChange = (e) => {
    console.log(e);
    e.preventDefault();
  };

  // const ehe = fansite.filter((o) => o.member.includes(active));
  // console.log(active);
  // console.log(ehe);

  return (
    <Con>
      <Gradient className="red" />
      <Gradient className="green" />
      <Gradient className="red2" />
      <Gradient className="green2" />
      <div className="fancon">
        <div className="memberCon">
          <ul>
            <li
              ref={toDkz}
              className={active === "dkz" ? "active" : ""}
              onClick={() => {
                setactive("dkz");
                nav("/fan-community/fan-site/dkz");
              }}
            >
              <div className={active === "dkz" ? "img active" : "img"}>
                <img src={dkz} alt="" />
              </div>
              <p>DKZ</p>
            </li>
            <li
              className={active === "kyoungyoon" ? "active" : ""}
              onClick={() => {
                setactive("kyoungyoon");
                nav("/fan-community/fan-site/kyoungyoon");
              }}
            >
              <div className={active === "kyoungyoon" ? "img active" : "img"}>
                <img src={kyoungyoon} alt="" />
              </div>
              <p>Kyoungyoon</p>
            </li>
            <li
              className={active === "sehyeon" ? "active" : ""}
              onClick={() => {
                setactive("sehyeon");
                nav("/fan-community/fan-site/sehyeon");
              }}
            >
              <div className={active === "sehyeon" ? "img active" : "img"}>
                <img src={sehyeon} alt="" />
              </div>
              <p>Sehyeon</p>
            </li>
            <li
              className={active === "mingyu" ? "active" : ""}
              onClick={() => {
                setactive("mingyu");
                nav("/fan-community/fan-site/mingyu");
              }}
            >
              <div className={active === "mingyu" ? "img active" : "img"}>
                <img src={mingyu} alt="" />
              </div>
              <p>Mingyu</p>
            </li>
            <li
              className={active === "munik" ? "active" : ""}
              onClick={() => {
                setactive("munik");
                nav("/fan-community/fan-site/munik");
              }}
            >
              <div className={active === "munik" ? "img active" : "img"}>
                <img src={munik} alt="" />
              </div>
              <p>Munik</p>
            </li>
            <li
              className={active === "jaechan" ? "active" : ""}
              onClick={() => {
                setactive("jaechan");
                nav("/fan-community/fan-site/jaechan");
              }}
            >
              <div className={active === "jaechan" ? "img active" : "img"}>
                <img src={jaechan} alt="" />
              </div>
              <p>Jaechan</p>
            </li>
            <li
              className={active === "jonghyeong" ? "active" : ""}
              onClick={() => {
                setactive("jonghyeong");
                nav("/fan-community/fan-site/jonghyeong");
              }}
            >
              <div className={active === "jonghyeong" ? "img active" : "img"}>
                <img src={jonghyeong} alt="" />
              </div>
              <p>Jonghyeong</p>
            </li>
            <li
              className={active === "giseok" ? "active" : ""}
              onClick={() => {
                setactive("giseok");
                nav("/fan-community/fan-site/giseok");
              }}
              ref={toGiseok}
            >
              <div className={active === "giseok" ? "img active" : "img"}>
                <img src={giseok} alt="" />
              </div>
              <p>Giseok</p>
            </li>
          </ul>
        </div>
        <button
          className="left"
          onClick={() => {
            toDkz.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <AiOutlineLeft />
        </button>
        <button
          className="right"
          onClick={() => {
            toGiseok.current.scrollIntoView({ behavior: "smooth" });
          }}
          sc
        >
          <AiOutlineRight />
        </button>
      </div>
      <div className="mainCon">
        <h1 className="head">Fan Translator</h1>
        <p className="head">
          {" "}
          lorem 매일 행복할 순 없지만, 행복한 것들을 매일 있다 - 세현 🐰 You
          can't be happy every day, but there are happy things every day -
          Sehyeon 🐰
        </p>
        <hr />
        <div className="option">
          <h1>Language:</h1>
          <select id="" onChange={(e) => handleChange(e)}>
            <option value="english">English</option>
            <option value="japanese">Japanese</option>
          </select>
        </div>
        {fanTranslator
          ?.filter((o) => o.member.includes(active))
          .map((mem, index) => (
            <div className="content" key={index}>
              <div className="heading">
                <h1>Account Name: </h1> <p>{mem.accName}</p>
              </div>
              <div className="top">
                <h2>Bio:</h2>
                <p>{mem.bio}</p>
                <div className="lang">
                  <h2>Language:</h2>
                  <p>English</p>
                </div>
              </div>
              <div className="acc">
                <p>Visit account:</p>
                <button>
                  <a href={mem.accLink}>
                    <AiOutlineTwitter />
                  </a>
                </button>
              </div>
              <hr />
              {index === show ? (
                <h3>Highlight Tweets/Posts</h3>
              ) : (
                <h3 className="button" onClick={() => setshow(index)}>
                  {" "}
                  Show Higlight Tweets/Posts
                </h3>
              )}
              <div className={index === show ? "body active" : "body"}>
                <SwiperCon>
                  <Swiper
                    //style={{ margin: "20px" }}
                    //modules={[Navigation, Pagination, Controller, Thumbs]}
                    navigation
                    pagination
                    spaceBetween={5}
                    // centeredSlides={true}
                    initialSlide={0}
                    slidesPerView={1}
                    autoplay={{
                      delay: 3000,
                      pauseOnMouseEnter: true,
                      disableOnInteraction: false,
                    }}
                    //loop={true}
                    onInit={(swiper) =>
                      console.log("Swiper initialized!", swiper)
                    }
                    // onSlideChange={(swiper) => {
                    //   // console.log("Slide index changed to: ", swiper.activeIndex);
                    //   setactive(swiper.activeIndex);
                    // }}
                    // onReachEnd={() => console.log("Swiper end reached")}
                  >
                    {mem?.highlightTweets?.map((mems, i) => (
                      <SwiperSlide key={i}>
                        <div className="slide">
                          {index === show && (
                            <TwitterTweetEmbed
                              tweetId={mems.tweetId}
                              options={{
                                width: "100%",
                                height: "100%",
                                //theme: "dark",
                              }}
                              placeholder={<Load />}

                              // placeholder={"loading"}
                            />
                          )}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </SwiperCon>
              </div>
            </div>
          ))}
      </div>
    </Con>
  );
};
const Load = styled.div`
  position: relative;
  background-color: #2f2f2f57;
  margin: auto;
  width: 300px;
  border-radius: 15px;
  height: 500px;
  animation: fade-in 0.8s normal 0s infinite alternate-reverse none;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  //height: 400px;
  @media (max-width: 1000px) and (min-width: 750px) {
    // height: 400px;
    width: 280px;
  }
  @media (min-width: 550px) and (max-width: 750px) {
    width: 250px;
  }
  @media (max-width: 550px) {
    width: 60vw;

    // object-fit: contain;
  }
  @media (max-width: 390px) {
    width: 80vw;

    // object-fit: contain;
  }
`;
const Con = styled.div`
  color: #1a1717;
  position: relative;
  justify-content: center;

  align-items: center;
  // height: 100%;
  @media (max-width: 800px) {
    //width: 100%;
  }
  & .fancon {
    background-color: #91919122;
    // display: flexbox;
    border-radius: 15px;
    border: 1px solid #ffffff6e;
    flex-wrap: wrap;
    margin: 1rem auto;
    // height: 500px;
    position: relative;
    width: 90%;
    z-index: 15;
    padding: 1rem;
    left: 0rem;
    & button {
      visibility: hidden;
      cursor: pointer;
    }
    @media (max-width: 650px) {
      & button {
        visibility: visible;
        background-color: transparent;
        border: none;
        font-size: 30px;
        color: #ffffff81;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
        &.left {
          position: absolute;
          top: 45%;
          left: 0rem;
        }
        &.right {
          position: absolute;
          top: 45%;
          right: 0rem;
        }
      }
    }
    & .memberCon {
      position: relative;

      //height: 30px;
      overflow-x: auto;
      width: 100%;
      &::-webkit-scrollbar {
        visibility: hidden;
        width: 0px;
        height: 0px;
      }

      & ul {
        list-style: none;
        font-size: 14px;
        display: inline-flex;
        padding-left: 0px;
        & li {
          list-style: none;
          color: #fff;
          margin: auto 0.5rem;
          border-bottom: 3px solid transparent;
          cursor: pointer;
          &.active {
            border-bottom: 3px solid #bed542;
            color: #bed542;
            font-weight: 600;
          }
          &:hover {
            border-bottom: 3px solid #565656;
          }
          & .img {
            &.active {
              height: 53px;
              width: 53px;
              justify-content: center;
              align-items: center;
              margin: auto;
              background-color: #fefefe6b;
              border-radius: 50%;
              border: 6px solid #3434348d;
            }
          }

          & img {
            height: 40px;
            width: 40px;
            margin: auto;
            border-radius: 50%;
            position: relative;
            top: 3px;
            border: 3px solid #bed542;
            object-fit: cover;
          }
          &:hover {
            color: #bed542;
          }
        }
      }
    }
  }
  & .mainCon {
    background-color: #91919122;
    // display: flexbox;
    border-radius: 15px;
    border: 1px solid #ffffff6e;
    flex-wrap: wrap;
    margin: 1rem auto;
    // height: 500px;
    position: relative;
    width: 70%;
    z-index: 15;
    padding: 1rem;
    left: 0rem;
    color: #fff;
    & h1.head {
      width: 90%;
      margin: auto;
      text-align: left;
      font-size: 17px;
      margin-bottom: 1rem;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    }
    & p.head {
      font-size: 12px;
      width: 90%;
      margin: auto;
      //width: 80%;
    }
    & hr {
      margin-top: 1.5rem;
      width: 90%;
    }
    & .option {
      display: inline-flex;
      //height: 20px;
      & h1 {
        font-size: 12px;
        margin-right: 1rem;
      }
      & select {
        background-color: #5f5f5f8f;
        padding: 0px 15px;
        border-radius: 10px;
        color: #fff;
        border: 1px solid #ffff;
        cursor: pointer;

        &:focus {
          border: none;
        }
        &:checked {
          border: none;
        }
        & option {
          cursor: pointer;
          background-color: #1f1f1f95;
          padding: 5px;
          &:active {
            background-color: #5e5e5e94;
          }
          // margin: 10px;
        }
      }
    }
    @media (max-width: 1000px) and (min-width: 750px) {
      width: 90%;
    }
    @media (min-width: 550px) and (max-width: 750px) {
      width: 90%;
    }
    @media (max-width: 550px) {
      width: 90%;
    }
    @media (max-width: 300px) {
      padding: 0px;
      width: 100%;
    }
    & .content {
      background-color: #91919122;
      // display: flexbox;
      border-radius: 15px;
      border: 1px solid #ffffff6e;
      flex-wrap: wrap;
      margin: 1rem auto;

      // height: 500px;
      position: relative;
      width: 90%;
      // height: 100%;
      color: #fff;
      z-index: 15;
      padding: 1rem;
      left: 0rem;
      & hr {
        width: 80%;
      }
      @media (max-width: 300px) {
        // margin: 0px;
        // object-fit: contain;
      }
      & .acc {
        display: inline-flex;
        & button {
          text-align: center;
          margin: auto;
          margin-left: 10px;
          border-radius: 15px;
          justify-content: center;
          background-color: #00acee;
          height: 50px;
          box-shadow: 0px 0px 2px 3px rgba(44, 44, 44, 0.3);
          border: none;
          width: 50px;
          font-size: 30px;
          cursor: pointer;
          & a {
            color: #fff;
            position: relative;
            top: 3px;
            margin: auto;
            //font-size: 15px;
          }
          &:hover {
            transform: scale(0.9);
            background-color: #009fde;
          }
        }
      }
      & .heading {
        font-size: 14px;
        color: #fff;
        display: inline-flex;
        height: 30px;
        // width: 40%;
        & h1 {
          font-size: 13px;
          color: #e4ecb4;
          text-transform: capitalize;
        }
        & p {
          position: relative;
          margin-left: 10px;
          top: -11px;
          font-size: 17px;
          font-weight: bold;
          text-transform: capitalize;
        }
      }
      & .top {
        width: 80%;
        margin: auto;
        margin-bottom: 2rem;
        & h2 {
          text-align: left;
          font-size: 13px;
        }
        & p {
          font-size: 12px;
          //width: 80%;
        }
        & .lang {
          display: inline-flex;
          text-align: left;
          width: 100%;
          & p {
            margin-left: 10px;
          }
        }
      }
      & h3 {
        text-align: left;
        font-size: 13px;
        width: 80%;
        margin: auto;
        &.button {
          cursor: pointer;
          text-align: center;
          color: #bed542;
          &:hover {
            color: #9fb42d;
          }
        }
      }
      & .body {
        visibility: hidden;
        height: 10px;
        &.active {
          visibility: visible;
          height: 650px;
        }
      }
    }
  }
`;
const SwiperCon = styled.div`
  position: relative;
  font-family: sans-serif;
  text-align: center;
  margin: auto;
  width: 600px;
  height: 100%;
  justify-content: center;
  align-self: center;
  top: 2rem;
  z-index: 13;
  @media (max-width: 1100px) and (min-width: 750px) {
    width: 500px;
  }
  @media (min-width: 550px) and (max-width: 750px) {
    width: 90%;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
  @media (max-width: 350px) {
    width: 80vw;

    // object-fit: contain;
  }
  @media (max-width: 300px) {
    width: 90vw;

    // object-fit: contain;
  }

  & div.slide {
    position: relative;

    margin: auto;
    width: 55%;

    //height: 400px;
    @media (max-width: 1000px) and (min-width: 750px) {
      // height: 400px;
      width: 55%;
    }
    @media (min-width: 550px) and (max-width: 750px) {
      width: 60%;
    }
    @media (max-width: 550px) {
      width: 80%;

      // object-fit: contain;
    }
    @media (max-width: 420px) {
      width: 100%;
      overflow: hidden;

      // object-fit: contain;
    }
    @media (max-width: 350px) {
      width: 100%;
      position: relative;
      margin: auto;
      //left: -1rem;
      overflow: hidden;

      // object-fit: contain;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: rgb(255, 255, 255);
    background-color: rgba(185, 185, 185, 0.452);
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.466);
    object-fit: cover;
    height: 30px;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
    width: 30px;
    padding: 10px;
    font-weight: 600;
    // display: none;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.4);
    @media (min-width: 550px) and (max-width: 750px) {
      width: 20px;
      height: 20px;
    }
    @media (max-width: 550px) {
      width: 15px;
      height: 15px;
      // object-fit: contain;
    }
  }
  .swiper-pagination {
    position: relative;
    margin-bottom: 2rem;
    //display: none;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 22px;
    // display: none;
  }
  .swiper-pagination-bullet {
    position: relative;
    background-color: rgba(189, 189, 189, 0.982);
    //transform: scale(1.6);
    margin: 10px;
    height: 13px;
    width: 13px;
    gap: 10px;
    margin-left: 15px;

    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.5);
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: rgba(255, 255, 255, 0.644);
    height: 20px;
    top: 5px;
    width: 20px;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  }
`;
const Gradient = styled.div`
  &.blue1 {
    position: absolute;
    width: 791.24px;
    height: 809.79px;
    left: -235.95px;
    top: -406.92px;
    z-index: 5;
    background: #acfaff;
    filter: blur(200px);
  }
  &.red {
    position: absolute;
    width: 1054px;
    height: 700px;
    left: 762px;
    top: -120px;
    z-index: 12;
    background: #be3360;
    filter: blur(800px);
    overflow-x: hidden;
  }
  &.green {
    position: absolute;
    width: 928px;
    height: 955px;
    left: -895px;
    top: 1259px;
    z-index: 6;
    background: #bed542;
    filter: blur(800px);
    overflow: hidden;
  }
  &.red2 {
    position: absolute;
    width: 928px;
    height: 1055px;
    left: 1062px;
    top: 2459px;
    z-index: 6;
    background: #be3360;
    filter: blur(500px);
    overflow: hidden;
  }
  &.green2 {
    position: absolute;
    width: 928px;
    height: 955px;
    left: -1062px;
    top: 3459px;
    z-index: 6;
    background: #bed542;
    filter: blur(500px);
    overflow: hidden;
  }
  &.blue2 {
    position: absolute;
    width: 1063px;
    height: 718px;
    left: 120px;
    top: 551px;
    z-index: 8;
    background: #acfaff;
    filter: blur(800px);
  }
`;
export default FanTranslator;
