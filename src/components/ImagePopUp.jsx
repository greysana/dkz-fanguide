import React, { useState } from "react";
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
import "swiper/css/pagination";
import { gallery } from "../API/galleryImages";
import { AiOutlineClose } from "react-icons/ai";
SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);

const ImagePopUp = ({ selected, index, images }) => {
  const [active, setactive] = useState(index - 1);
  return (
    <PopUpCon>
      <div className="imgbackshadow" onClick={() => selected("")} />
      <div className="imgPopCon">
        <span onClick={() => selected("")}>
          <AiOutlineClose />
        </span>
        <SwiperCon>
          <Swiper
            navigation
            pagination
            spaceBetween={5}
            centeredSlides={true}
            slidesPerView={1}
            initialSlide={parseInt(index - 1)}
            onInit={(swiper) => console.log(swiper)}
            onSlideChange={(swiper) => {
              setactive(swiper.activeIndex);
            }}
          >
            {images?.slice(0, 8).map((mem, index) => (
              <SwiperSlide key={index}>
                <img
                  src={mem?.imgLink}
                  alt={mem?.alt}
                  onClick="disable"
                  style={{
                    position: "relative",
                    width: active === index ? "100%" : "100%",
                    height: active === index ? "100vh" : "100vh",
                    borderRadius: "15px",
                    // marginTop: "50%",
                    boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.3)",
                    objectFit: "contain",
                    backgroundColor: "#08080896",
                    // top: active === index ? "0rem" : "2rem",
                    zIndex: "30",
                    filter:
                      active === index ? "brightness(1)" : "brightness(0.30)",
                    //top: active === index ? "-10px" : "0px",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperCon>
      </div>
    </PopUpCon>
  );
};

const PopUpCon = styled.div`
  position: fixed;
  display: block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;

  z-index: 20;
  & .imgbackshadow {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 100vh;
    cursor: pointer;
    width: 100vw;
  }
  & .imgPopCon {
    //margin: 2rem;
    z-index: 22;
    & span {
      position: absolute;
      //float: right;
      top: 2rem;
      right: 0;
      color: #c7c7c7;
      font-size: 2rem;
      object-fit: contain;
      font-weight: 600;
      height: 30px;
      width: 30px;
      z-index: 22;
      cursor: pointer;
      padding: 10px;
      padding-top: 5px;
      border-radius: 50%;
      &:hover {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.183);
        padding: 10px;
        padding-top: 5px;
      }
    }
  }
`;

const SwiperCon = styled.div`
  position: relative;
  font-family: sans-serif;
  text-align: center;
  margin-top: 0;
  //height: 100vh;

  width: 100vw;
  margin: auto;
  justify-content: center;
  align-self: center;

  .swiper-button-next,
  .swiper-button-prev {
    color: rgb(239, 239, 239);
    background-color: rgba(185, 185, 185, 0.452);
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.466);
    object-fit: cover;
    height: 30px;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
    width: 30px;
    padding: 10px;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.4);
    @media (max-width: 700px) {
      width: 10px;
      height: 10px;
    }
  }
  .swiper-pagination {
    position: relative;
    margin-top: 1.5rem;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 22px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
  .swiper-pagination-bullet {
    background-color: rgba(189, 189, 189, 0.644);
  }
  .swiper-pagination-bullet.swiper-pagination-bullet-active {
    background-color: rgba(255, 255, 255, 0.644);
    transform: scale(1.6);
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1)
      ease-in-out;

    @keyframes scale-up-center {
      0% {
        transform: scale(0.8);
      }
      100% {
        transform: scale(1.6);
      }
    }
  }
`;

export default ImagePopUp;
