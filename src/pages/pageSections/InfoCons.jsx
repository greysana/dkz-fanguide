import React, { useState } from "react";
import styled from "styled-components";
import Years from "./timelinesections/Years";
import { year } from "../../API/timeline";
import { useLocation } from "react-router-dom";

const InfoCons = () => {
  const [active, setactive] = useState("2018");
  const _handleClick = (menuItem) => {
    setactive(menuItem);
  };

  const location = useLocation();
  console.log(location);

  return (
    <InfoCon>
      <div className="infocon">
        <h1>DKZ Timeline</h1>
        <div className="body">
          <div className="line"></div>
          <ul>
            {year?.map((yr) => (
              <li>
                <button className={active === yr.year ? "active" : ""}>
                  .
                </button>
                <span>
                  <button
                    className={active === yr.year ? "desc active" : "desc"}
                    onClick={() => {
                      if (!active) {
                        setactive(yr.year);
                      } else if (active && active === yr.year) {
                        setactive("");
                      } else {
                        setactive(yr.year);
                      }
                    }}
                  >
                    Year {yr.year}
                    {"   -   "}
                    {yr.desc}
                  </button>
                </span>
                {active === yr.year && (
                  <div className="content">
                    <Years content={yr.content} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </InfoCon>
  );
};
const InfoCon = styled.div`
  position: relative;
  margin: auto;
  margin-top: 2rem;
  background-color: #323232;
  & h1 {
    position: relative;
    z-index: 13;
    font-size: 1.3rem;
    color: #ffffff96;
    text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
  }
  & .infocon {
    background-color: #91919122;
    // display: flexbox;
    border-radius: 15px;
    border: 1px solid #ffffff6e;
    flex-wrap: wrap;
    margin: auto;
    width: 80%;
    z-index: 13;
    padding: 1rem;

    @media (max-width: 500px) {
      width: 95vw;
      padding: 13px;
    }
    @media (max-width: 290px) {
      font-size: 1rem;
      padding: 10px;
    }

    & .body {
      border-left: 2px solid #fff;
      position: relative;
      margin: auto;
      width: 80%;
      @media (max-width: 700px) {
        width: 75vw;
      }
      @media (max-width: 500px) {
        width: 90vw;
      }

      & .line {
        position: relative;
        border-left: 2px solid #fff;
        background-color: #0a0a0a;
        width: 2px;
        z-index: 10;
      }
      & ul {
        list-style: none;
        position: relative;
        left: -47.5px;
        color: #ffffff96;
        top: 1rem;
        @media (max-width: 500px) {
          left: -47px;
        }

        & li {
          text-align: left;
          margin: 1rem 0;
          & .content {
            position: relative;
            margin-left: 47.5px;
            @media (max-width: 750px) {
              margin-left: 30px;
            }
            @media (max-width: 500px) {
              margin-left: 20px;
            }
          }
          & span {
            & .desc {
              cursor: pointer;
              background-color: transparent;
              position: relative;
              width: 100%;
              font-size: 0.9rem;
              color: #eaeaea;
              padding: 1rem;
              margin-left: 200px;
              text-align: left;
              top: -30px;
              @media (max-width: 850px) {
                margin-left: 150px;
                // height: 300px;
              }
              @media (max-width: 500px) {
                margin-left: 100px;
              }
              @media (max-width: 300px) {
                margin-left: 70px;
                font-size: 0.6rem;
              }
              &.active {
                background-color: transparent;
                position: relative;
                font-weight: 600;
                color: #fff;
                font-size: 0.7rem;
                @media (max-width: 300px) {
                  margin-left: 70px;
                  font-size: 0.5rem;
                }
              }
            }
          }
          & button {
            background-color: #b5b5b5;
            color: #000000;
            height: 13px;
            width: 13px;
            margin-right: 10px;
            border-radius: 50%;
            position: relative;
            z-index: 10;
            border: none;
            color: transparent;
            @media (max-width: 500px) {
              height: 10px;
              width: 8px;
            }
            &.active {
              background-color: #bad46b;
              color: transparent;
              -webkit-animation: scale-up-center 0.4s
                cubic-bezier(0.39, 0.575, 0.565, 1) both;
              animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1)
                ease-in-out;

              @keyframes scale-up-center {
                0% {
                  transform: scale(0.5);
                }
                100% {
                  transform: scale(1.5);
                }
              }
            }
            &:hover {
              transform: scale(1.5) both;
              transition: 0.2s ease-in-out;
            }
          }
        }
      }
    }
  }
  & .dong {
    height: 500px;
    width: 500px;
    position: absolute;
    filter: brightness(0.4);
    float: right;
    top: -8rem;
    right: 3rem;
  }
  & .heading {
    position: relative;
    left: 3rem;
    & h1 {
      position: relative;
      z-index: 13;
      font-size: 2.5rem;
      text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
    }
    & span {
      position: absolute;
      top: 0.5rem;
      left: 5rem;
      font-weight: 600;
      font-size: 4.5rem;
      color: #c4c4c41f;
    }
    & h2 {
      position: relative;
      z-index: 13;
      font-size: 1.5rem;
      left: 5rem;
      color: #ffffff96;
      text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
    }
    & h3 {
      position: relative;
      z-index: 13;
      font-size: 1rem;
      margin-top: 2rem;
      left: 1rem;
      color: #ffffff96;
      text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
    }
  }
`;

export default InfoCons;
