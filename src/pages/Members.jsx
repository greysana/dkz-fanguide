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
                  width: active === index ? "270px" : "210px",
                  height: active === index ? "350px" : "270px",
                  borderRadius: "15px",
                  margin: "1rem",
                  boxShadow: "0px 0px 2px 2px rgba(0, 0, 0, 0.3)",

                  top: active === index ? "0rem" : "2rem",
                  filter:
                    active === index ? "brightness(1)" : "brightness(0.30)",
                  //top: active === index ? "-10px" : "0px",
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
  height: 100%;
  width: 100%;
  background-color: #323232;
  & h1 {
    color: #bed542;
  }
`;

const SwiperCon = styled.div`
  position: relative;
  font-family: sans-serif;
  text-align: center;
  margin: auto;
  //  margin-top: 1rem;
  //padding-top: 1rem;
  top: 3rem;
  width: 900px;
  height: 500px;
  justify-content: center;
  align-self: center;

  .swiper-button-next,
  .swiper-button-prev {
    color: rgb(221, 221, 221);
    background-color: rgba(185, 185, 185, 0.452);
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.466);
    object-fit: cover;
    height: 30px;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
    width: 30px;
    padding: 10px;
    box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.4);
  }
  .swiper-pagination {
    position: relative;
    margin-top: 1.5rem;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 22px;
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

const Info = styled.div`
  &.heading {
    height: 100px;
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
