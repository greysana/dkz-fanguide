import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
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
import { useNavigate, useParams } from "react-router-dom";

import image1 from "../Assets/DKZ1.jpg";
import image2 from "../Assets/DKZ2.jpg";
import image3 from "../Assets/DKZ3.jpg";
import Giseok from "../Assets/Giseok.jpg";
import Jonghyeong from "../Assets/Jonghyeong.jpg";
import Jaechan from "../Assets/Jaechan.jpg";
import Sehyeon from "../Assets/Sehyeon.jpg";
import Mingyu from "../Assets/Mingyu.jpg";
import Munik from "../Assets/Munik.jpg";
import Kyoungyoon from "../Assets/Kyoungyoon.jpg";
import MemberCon from "./pageSections/MemberCon";
import InfoCon from "./pageSections/InfoCon";
import InfoCons from "./pageSections/InfoCons";
import GalleryCon from "./pageSections/GalleryCon";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);
const member = [
  {
    id: 0,
    name: "Kyoungyoon 경윤",
    images: Kyoungyoon,
  },
  {
    id: 1,
    name: "Sehyeon 세현",
    images: Sehyeon,
  },
  {
    id: 2,
    name: "Mingyu 민규",
    images: Mingyu,
  },
  {
    id: 3,
    name: "Munik 문익",
    images: Munik,
  },
  {
    id: 4,
    name: "Jaechan 재찬",
    images: Jaechan,
  },
  {
    id: 5,
    name: "Jonghyeong 종형",
    images: Jonghyeong,
  },
  {
    id: 6,
    name: "Giseok  기석",
    images: Giseok,
  },
];
const images = [
  {
    id: 1,
    img: image1,
  },
  {
    id: 2,
    img: image2,
  },
  {
    id: 3,
    img: image3,
  },
];

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);
const AboutDKZ = () => {
  let navigate = useNavigate();
  const [change, setchange] = useState(false);
  const top = useRef(null);
  const intro = useRef(null);
  const timeline = useRef(null);
  const gallery = useRef(null);

  const { sect } = useParams();
  const introView = useIsInViewport(intro);

  const timeView = useIsInViewport(timeline);
  const galView = useIsInViewport(gallery);

  console.log(introView, timeView, galView);
  // console.log("isInViewport1: ", isInViewport1);
  // useEffect(() => {
  //   setTimeout(() => {
  //     if (introView && !timeView && !galView) {
  //       navigate("/about/intro");
  //       setchange(false);
  //     } else if (timeView && !galView) {
  //       if (change && sect !== "timeline") {
  //         navigate(`/about/${sect}`);
  //         setchange(false);
  //       } else if (!change) {
  //         navigate("/about/timeline");
  //         setchange(false);
  //       } else {
  //         navigate("/about/timeline");
  //         setchange(false);
  //       }
  //     } else if (timeView && galView) {
  //       navigate("/about/gallery");
  //       setchange(false);
  //     }
  //   }, 0);
  // }, [introView, timeView, galView]);

  useEffect(() => {
    let ref = "";
    if (sect === "") {
      ref = top;
    } else if (sect === "intro") {
      ref = intro;
    } else if (sect === "timeline") {
      ref = timeline;
    } else if (sect === "gallery") {
      ref = gallery;
    }
    if (ref && ref.current) {
      const executeScroll = (ref) =>
        ref.current.scrollIntoView({ behavior: "smooth" });
      executeScroll(ref);
      // useMountEffect(executeScroll); // Scroll on mount
    }
    setchange(true);
  }, [sect]);

  return (
    <AboutCon>
      <div className="containers">
        <Gradient className="red" />
        <Gradient className="green" />
        <Gradient className="red2" />
        <Gradient className="green2" />
      </div>
      <div className="info" id="intro" ref={intro}>
        <div className="top" id="top" ref={top}>
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
              onSlideChange={(swiper) => {
                // console.log("Slide index changed to: ", swiper.activeIndex);
                //setactive(swiper.activeIndex);
              }}
              // onReachEnd={() => console.log("Swiper end reached")}
            >
              {images?.map((mem, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={mem?.img}
                    alt={mem?.id}
                    className="slide"
                    style={{
                      position: "relative",
                      // width: "90%",
                      // height: "50vh",
                      borderRadius: "20px",
                      //margin: "1.3rem",
                      boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.3)",

                      top: "3rem",
                      // filter:
                      //   active === index ? "brightness(1)" : "brightness(0.30)",
                      // //top: active === index ? "-10px" : "0px",
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </SwiperCon>
        </div>

        <InfoCon />
      </div>

      <MemberCon member={member} />

      <div className="timeline" id="timeline" ref={timeline}>
        <InfoCons />
      </div>

      <div className="gallery" id="gallery" ref={gallery}>
        <GalleryCon />
      </div>
    </AboutCon>
  );
};
const AboutCon = styled.div`
  background-color: #323232;

  //margin-top: -3rem;
  //height: 100%;
  // overflow-y: scroll;
  width: 100%;
  height: 100vh;
  & .container {
    position: relative;
    margin: auto;
    top: 3rem;
    //  height: 100%;
    width: 80%;
    flex-wrap: wrap;
    display: inline-flex;

    border-radius: 10px;
    z-index: 14;
    //box-shadow: 0px 0px 8px 2px rgba(44, 44, 44, 0.2);
  }
  & .containers {
    background-color: #323232;
    // height: 100%;
    width: 80%;
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

const SwiperCon = styled.div`
  position: relative;
  font-family: sans-serif;
  text-align: center;
  margin: auto;
  width: 650px;
  height: 550px;
  justify-content: center;
  align-self: center;
  top: 2rem;
  z-index: 13;
  @media (max-width: 1000px) and (min-width: 750px) {
    height: 500px;
  }
  @media (min-width: 550px) and (max-width: 750px) {
    width: 90vw;
    height: 460px;
  }
  @media (max-width: 550px) {
    width: 90vw;
    height: 350px;
  }
  & img.slide {
    height: 400px;
    width: 90%;
    @media (max-width: 1000px) and (min-width: 750px) {
      height: 400px;
    }
    @media (min-width: 550px) and (max-width: 750px) {
      width: 90vw;
      height: 350px;
    }
    @media (max-width: 550px) {
      width: 90%;
      height: 250px;
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
    margin-top: 5rem;
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

const Info = styled.div`
  position: relative;

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
export default AboutDKZ;
