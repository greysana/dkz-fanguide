import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { gallery } from "../API/galleryImages";

import ImagePopUpMain from "../components/ImagePopUpMain";
const MainGallery = () => {
  const [selected, setselected] = useState("");
  const navigate = useNavigate();
  console.log(gallery[0]?.images?.length);
  return (
    <GalleryCons>
      <div className="gallery">
        <h1>Gallery</h1>
        <div className="imagesCon">
          {gallery[0]?.images?.map((gal, index) => (
            <>
              <div className="text">
                <button
                  onClick={() => {
                    setselected(gal.id);
                  }}
                >
                  <img
                    index={index}
                    src={gal.link}
                    alt={gal.alt}
                    className={
                      index === gallery[0]?.images?.length - 1
                        ? "gallery last"
                        : "gallery"
                    }
                  />
                  {index === gallery[0]?.images?.length - 1 && (
                    <h1>show more</h1>
                  )}
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
      {selected && <ImagePopUpMain selected={setselected} index={selected} />}
    </GalleryCons>
  );
};

const GalleryCons = styled.div`
  position: relative;
  margin: auto;
  height: 100vh;
  background-color: #323232;
  padding-top: 2rem;
  padding-bottom: 3rem;
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
      // margin: 1rem;
      margin-top: 2rem;
      display: flex;
      flex-wrap: wrap;
      margin: auto;
      justify-content: center;

      & img {
        height: 200px;
        width: 200px;
        border-radius: 2px;
        // gap: 5;
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
        @media (max-width: 320px) {
          width: 100px;
          height: 100px;
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
        }
      }
    }
  }
`;

export default MainGallery;
