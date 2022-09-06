import React, { useEffect, useState } from "react";
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
//import Latest1 from "../Assets/latest1.jpg";

import dongreebody from "../../Assets/dongreebody.png";
import dongreeleft from "../../Assets/dongreeleft.png";
import image1 from "../../Assets/latest1.jpg";
import image2 from "../../Assets/image2.jpg";
import image3 from "../../Assets/image3.png";
//import { motion } from "framer-motion";

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
SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);
const LatestBanner = () => {
  const [imagenum, setimagenum] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      imagenum === images.length - 1
        ? setimagenum(0)
        : setimagenum(imagenum + 1);
    }, 5000);
  }, [imagenum]);
  const [active, setactive] = useState();
  return (
    <div>
      <Con1>
        <text>What's Latest?</text>
        <DongreeBodyCon>
          <Shadow />
          <DongreeBody src={dongreebody} />
          <Dongreeleft src={dongreeleft} />
          <Dongreeright src={dongreeleft} />
        </DongreeBodyCon>

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
              setactive(swiper.activeIndex);
            }}
            // onReachEnd={() => console.log("Swiper end reached")}
          >
            {images?.map((mem, index) => (
              <SwiperSlide key={index}>
                <img
                  src={mem?.img}
                  alt={mem?.id}
                  style={{
                    position: "relative",
                    width: "630px",
                    height: "370px",
                    borderRadius: "15px",
                    margin: "1.3rem",
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
        {/* <Image
          className={current ? "active" : ""}
          src={images[imagenum]?.img}
        />

        <Leftbutton
          onClick={() =>
            imagenum === 0
              ? setimagenum(images.length - 1)
              : setimagenum(imagenum - 1)
          }
        >
          <i>
            <MdArrowBackIosNew />
          </i>
        </Leftbutton>
        <Rightbutton
          onClick={() =>
            imagenum === images.length - 1
              ? setimagenum(0)
              : setimagenum(imagenum + 1)
          }
        >
          <i>
            <MdArrowForwardIos />
          </i>
        </Rightbutton>
        <DotsCon>
          {images?.map((img) => (
            <Dots
              key={img.id}
              className={imagenum + 1 === img.id ? "active" : ""}
              onClick={() => setimagenum(img.id - 1)}
            />
          ))}
        </DotsCon> */}
      </Con1>
    </div>
  );
};
const SwiperCon = styled.div`
  position: relative;
  font-family: sans-serif;
  text-align: center;
  margin: auto;
  //  margin-top: 1rem;
  //padding-top: 1rem;
  top: 3rem;
  width: 700px;
  height: 500px;
  justify-content: center;
  align-self: center;
  z-index: 10;
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
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.4);
  }
  .swiper-pagination {
    position: relative;
    margin-top: 5rem;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 22px;
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
// const DotsCon = styled.div`
//   position: relative;
//   top: 40px;
//   left: 10px;
// `;

// const Dots = styled.div`
//   background-color: #e1e1e1b5;
//   height: 10px;
//   width: 10px;
//   margin-right: 20px;
//   border-radius: 50%;
//   position: relative;
//   display: inline-block;
//   box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
//   top: -40px;
//   z-index: 10;
//   border: none;
//   cursor: pointer;
//   -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
//     both;
//   animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) ease-in-out;

//   @keyframes scale-up-center {
//     0% {
//       transform: scale(0.5);
//     }
//     100% {
//       transform: scale(1.2);
//     }
//   }
//   &.active {
//     top: -38px;
//     height: 17px;
//     width: 17px;

//     background-color: #fff;
//   }
//   &:hover {
//     border: 0.5px solid #fff;
//   }
// `;

const Shadow = styled.div`
  position: absolute;
  width: 180.48px;
  height: 221.62px;
  top: 50px;
  left: 285px;
  z-index: 8;
  background-color: transparent;
  margin-right: 10px;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0px 0px 15px 15px rgba(0, 0, 0, 0.08);
`;

const Con1 = styled.div`
  position: relative;
  margin: auto;
  z-index: 10;
  top: 40px;
  height: 600px;
  width: 615px;

  & text {
    position: relative;
    top: 110px;
    font-size: 17px;
    font-weight: bold;
    color: #4a4a4a;
    left: -220px;
  }
`;

const DongreeBodyCon = styled.div``;
const DongreeBody = styled.img`
  position: absolute;
  width: 240.48px;
  height: 221.62px;
  top: 30px;
  left: 250px;
  //box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.3);
  z-index: 8;
`;
const Dongreeleft = styled.img`
  position: absolute;
  z-index: 11;
  width: 69.4px;
  height: 51.89px;
  top: 115px;
  left: 250px;
  //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;
const Dongreeright = styled.img`
  position: absolute;
  z-index: 11;
  width: 49.4px;
  height: 31.89px;
  width: 69.4px;
  height: 51.89px;
  top: 115px;
  left: 430px;
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  transform: matrix(-1, 0, 0, 1, 0, 0);
  transform: scaleX(-1);
`;

export default LatestBanner;
