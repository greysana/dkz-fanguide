import React, { useEffect, useState } from "react";
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
import Giseok from "../Assets/Giseok.jpg";
import Jonghyeong from "../Assets/Jonghyeong.jpg";
import Jaechan from "../Assets/Jaechan.jpg";
import Sehyeon from "../Assets/Sehyeon.jpg";
import Mingyu from "../Assets/Mingyu.jpg";
import Munik from "../Assets/Munik.jpg";
import Wondae from "../Assets/Wondae.jpg";
import Kyoungyoon from "../Assets/Kyoungyoon.jpg";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MemInfoCon from "./pageSections/MemInfoCon";

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
  {
    id: 7,
    name: "Wondae 원대",
    images: Wondae,
  },
];
const Members = () => {
  let navigate = useNavigate();
  const [active, setactive] = useState(0);
  // console.log(member[1].images);

  const { mem } = useParams();

  const act = member.find((mems) => mems.name === mem)?.id;
  const info = member.find((mems) => mems.name === mem);
  console.log(act);

  useEffect(() => {
    setactive(parseInt(act));
  }, [act]);
  console.log(mem);

  return (
    <MemberCon>
      <SwiperCon>
        <Swiper
          //style={{ margin: "20px" }}
          //modules={[Navigation, Pagination, Controller, Thumbs]}
          navigation
          pagination
          spaceBetween={5}
          centeredSlides={true}
          slidesPerView={3}
          initialSlide={parseInt(act)}
          //activeIndex={0}
          //loop={true}

          onInit={(swiper) => console.log(swiper)}
          onSlideChange={(swiper) => {
            // console.log("Slide index changed to: ", swiper.activeIndex);
            setactive(swiper.activeIndex);
            navigate(`/members/${member[swiper.activeIndex].name}`);
          }}
          // onReachEnd={() => console.log("Swiper end reached")}
        >
          {member?.map((mem, index) => (
            <SwiperSlide key={index}>
              <img
                src={mem?.images}
                alt={mem?.name}
                style={{
                  position: "relative",
                  className: active === index ? "slide active" : "slide",
                  width: active === index ? "100%" : "80%",
                  //height: active === index ? "350px" : "270px",
                  borderRadius: "15px",
                  //margin: "1rem",
                  boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.3)",

                  top: active === index ? "0rem" : "3vh",
                  filter:
                    active === index ? "brightness(1)" : "brightness(0.30)",
                  //top: active === index ? "-10px" : "0px",
                  "@media (max-width: 500px)": {
                    height: active === index ? "350px" : "270px",
                  },
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperCon>
      <Info className="heading"></Info>
      <MemInfoCon name={info.name} />
    </MemberCon>
  );
};
const MemberCon = styled.div`
  position: relative;
  margin-top: 0px;
  height: 100vh;
  width: 80vw;
  @media (max-width: 800px) {
    width: 100vw;
  }
  background-color: #323232;
  padding-top: 2rem;
  & h1 {
    color: #bed542;
  }
`;

const SwiperCon = styled.div`
  position: relative;
  font-family: sans-serif;
  text-align: center;
  margin: auto;
  width: 900px;
  //height: 550px;
  justify-content: center;
  align-self: center;
  top: 2rem;
  z-index: 13;
  @media (max-width: 1000px) and (min-width: 750px) {
    width: 650px;
  }
  @media (min-width: 550px) and (max-width: 750px) {
    width: 650px;
    overflow: visible;
  }
  @media (max-width: 550px) {
    width: 90vw;
    overflow: hidden;
  }
  @media (max-width: 380px) {
    width: 90vw;
    overflow: hidden;
  }
  & img.slide {
    //  object-fit: contain;
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
    @media (max-width: 550px) {
      width: 10px;
      height: 10px;
      // object-fit: contain;
      top: -35px;
    }
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: rgba(255, 255, 255, 0.644);
    height: 20px;
    top: 5px;
    width: 20px;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
    @media (max-width: 550px) {
      // object-fit: contain;
      top: -30px;
    }
  }
`;

const Info = styled.div`
  &.heading {
    height: 100px;
    @media (max-width: 550px) {
      font-size: 1rem;
    }
  }
  & span {
    font-weight: 700;
    font-size: 50px;
    color: #a09f9f17;
    position: relative;
    top: -85px;
  }
`;

export default Members;
