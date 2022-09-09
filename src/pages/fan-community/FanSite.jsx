import React, { useEffect, useState } from "react";
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
import { AiOutlineTwitter } from "react-icons/ai";
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

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

const FanSite = () => {
  const [active, setactive] = useState("dkz");
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
  }, [location]);

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
            >
              <div className={active === "giseok" ? "img active" : "img"}>
                <img src={giseok} alt="" />
              </div>
              <p>Giseok</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="mainCon">
        <div className="content">
          <div className="heading">
            <h1>Account Name: </h1> <p>Luna</p>
          </div>

          <h2>Bio:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            aperiam sunt voluptatum animi quis, voluptatibus explicabo
            voluptatem officia id facilis laboriosam dolore magnam
            necessitatibus velit. Suscipit dolore exercitationem magnam non?
          </p>
          <div className="acc">
            <p>Visit account:</p>
            <button>
              <a href="">
                <AiOutlineTwitter />
              </a>
            </button>
          </div>
          <h3>example tweets/posts</h3>
          <div className="body">
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
                onInit={(swiper) => console.log("Swiper initialized!", swiper)}
                // onSlideChange={(swiper) => {
                //   // console.log("Slide index changed to: ", swiper.activeIndex);
                //   setactive(swiper.activeIndex);
                // }}
                // onReachEnd={() => console.log("Swiper end reached")}
              >
                {images?.map((mem, index) => (
                  <SwiperSlide key={index}>
                    <div className="slide">
                      <TwitterTweetEmbed
                        tweetId="1567918354622738432"
                        options={{
                          width: "100%",
                          height: "100%",
                          //theme: "dark",
                        }}
                        placeholder="Loading"

                        // placeholder={"loading"}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </SwiperCon>
          </div>
        </div>
      </div>
    </Con>
  );
};
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
    & .memberCon {
      position: relative;

      //height: 30px;
      width: 100%;
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
    @media (max-width: 1000px) and (min-width: 750px) {
      width: 90%;
    }
    @media (min-width: 550px) and (max-width: 750px) {
      width: 90%;
    }
    @media (max-width: 550px) {
      width: 90%;
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
          & a {
            color: #fff;
            position: relative;
            top: 3px;
            margin: auto;
            //font-size: 15px;
          }
        }
      }
      & .heading {
        font-size: 14px;
        color: #fff;
        display: inline-flex;
        height: 30px;
        & h1 {
          font-size: 13px;
          color: #e4ecb4;
        }
        & p {
          position: relative;
          margin-left: 10px;
          top: -11px;
          font-size: 17px;
          font-weight: bold;
        }
      }
      & h2 {
        text-align: left;
        font-size: 13px;
      }
      & p {
        font-size: 12px;
      }
      & h3 {
        text-align: left;
        font-size: 13px;
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
  @media (max-width: 1000px) and (min-width: 750px) {
    width: 500px;
  }
  @media (min-width: 550px) and (max-width: 750px) {
    width: 90%;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
  & div.slide {
    position: relative;
    margin: auto;
    width: 45%;
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
    @media (max-width: 390px) {
      width: 100%;

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
export default FanSite;
