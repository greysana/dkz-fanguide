import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { gallery } from "../../API/galleryImages";
import ImagePopUp from "../../components/ImagePopUp";
const GalleryCon = () => {
  const [selected, setselected] = useState("");
  const navigate = useNavigate();
  return (
    <GalleryCons>
      <div className="gallery">
        <h1>Gallery</h1>
        <div className="imagesCon">
          {gallery[0]?.images?.slice(0, 8).map((gal, index) => (
            <>
              <div className="text">
                <button
                  onClick={() => {
                    if (gal.id < 8) {
                      setselected(gal.id);
                    } else {
                      navigate("/about/main_gallery/dkz");
                    }
                  }}
                >
                  <img
                    index={index}
                    src={gal.link}
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
      {selected && <ImagePopUp selected={setselected} index={selected} />}
    </GalleryCons>
  );
};

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
    width: 90%;
    z-index: 13;
    @media (min-width: 500px) and (max-width: 768px) {
      width: 98%;
    }
    & .imagesCon {
      margin: 0.5rem;
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

export default GalleryCon;
