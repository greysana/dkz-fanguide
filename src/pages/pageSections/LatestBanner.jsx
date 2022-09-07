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
                  className="slide"
                  style={{
                    position: "relative",

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
  width: 700px;
  height: 550px;
  justify-content: center;
  align-self: center;
  top: 2rem;
  z-index: 13;
  @media (max-width: 1000px) and (min-width: 750px) {
    height: 450px;
    width: 650px;
    //width: 85%;
  }
  @media (min-width: 550px) and (max-width: 750px) {
    width: 85vw;
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
      width: 90%;
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
  z-index: 20;
  top: 40px;
  height: 600px;
  width: 615px;
  @media (max-width: 1000px) and (min-width: 800px) {
    height: 500px;
    width: 90%;
  }
  @media (min-width: 550px) and (max-width: 800px) {
    width: 90%;
    height: 500px;
  }
  @media (max-width: 550px) {
    width: 90%;
    height: 400px;
  }

  & text {
    position: relative;
    top: 90px;
    font-size: 17px;
    text-align: left;
    font-weight: bold;
    color: #dbdbdb;
    left: -35%;
  }
`;

const DongreeBodyCon = styled.div``;
const DongreeBody = styled.img`
  position: absolute;
  width: 240.48px;
  height: 221.62px;
  top: 10px;
  left: 250px;
  //box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.3);
  z-index: 8;
  @media (max-width: 550px) {
    width: 200.48px;
    height: 191.62px;
    top: 25px;
    left: 50%;
  }
  @media (max-width: 440px) {
    width: 170.48px;
    height: 151.62px;
    top: 35px;
    left: 50%;
  }
  @media (max-width: 340px) {
    width: 160.48px;
    height: 141.62px;
    top: 45px;
    left: 48%;
  }
`;
const Dongreeleft = styled.img`
  position: absolute;
  z-index: 21;
  width: 69.4px;
  height: 51.89px;
  top: 95px;
  left: 250px;
  @media (max-width: 550px) {
    width: 58px;
    height: 51px;
    top: 95px;
    left: 50%;
  }
  @media (max-width: 400px) {
    width: 48px;
    height: 41px;
    top: 105px;
    left: 50%;
  }
  //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
`;
const Dongreeright = styled.img`
  position: absolute;
  z-index: 21;
  width: 49.4px;
  height: 31.89px;
  width: 69.4px;
  height: 51.89px;
  top: 95px;
  left: 430px;
  // box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  transform: matrix(-1, 0, 0, 1, 0, 0);
  transform: scaleX(-1);

  @media (max-width: 550px) {
    width: 58px;
    height: 51px;
    top: 95px;
    left: 83%;
  }
  @media (max-width: 400px) {
    width: 48px;
    height: 41px;
    top: 105px;
    left: 85%;
  }
`;

export default LatestBanner;
