import React from "react";
import styled from "styled-components";

import { BsPlayFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const months = [
  {
    month: "January",
    num: 1,
  },
  {
    month: "February",
    num: 2,
  },
  {
    month: "March",
    num: 3,
  },
  {
    month: "April",
    num: 4,
  },
  {
    month: "May",
    num: 5,
  },
  {
    month: "June",
    num: 6,
  },
  {
    month: "July",
    num: 7,
  },
  {
    month: "August",
    num: 8,
  },
  {
    month: "September",
    num: 9,
  },
  {
    month: "October",
    num: 10,
  },
  {
    month: "November",
    num: 11,
  },
  {
    month: "December",
    num: 12,
  },
];

const Years = ({ content }) => {
  //const date = content.date;
  const navigate = useNavigate();
  return (
    <Cons>
      {months.map((month, index) => (
        <div key={index}>
          {content?.map((d, i) => {
            return d?.date?.month === month.num ? (
              <>
                <h1>
                  -- --{"    "}
                  {month.month}
                  {"  "}
                  {d.date.day},{"  "}
                  {d.date.year}
                  {"    "}-- --
                </h1>
                <Con key={i}>
                  <div className="con">
                    {d.ytLink ? (
                      <div className="video-responsive">
                        <iframe
                          src={`https://www.youtube.com/embed/${d.ytLink}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title="Embedded youtube"
                        />
                      </div>
                    ) : (
                      <img src={d.imgLink} alt="" className="active" />
                    )}
                  </div>
                  <div className="details active">
                    <div className="details active">
                      <h1>Title: {d.title}</h1>
                    </div>
                    <span>Summary/About: {d.description}</span>
                    <br />
                    {!d.ytLink && (
                      <span className="links">
                        <motion.span
                          whileHover={{ scale: 0.95 }}
                          className="ss"
                          onClick={() => {
                            navigate(d.vidlink ? d.vidLink : d.ytLink);
                          }}
                        >
                          {" "}
                          Watch Here{" "}
                          <i>
                            <BsPlayFill />
                          </i>
                        </motion.span>
                      </span>
                    )}
                  </div>
                </Con>
              </>
            ) : null;
          })}
        </div>
      ))}
    </Cons>
  );
};
const Cons = styled.div`
  //width: 100%;
  margin: 0;
  padding: 0;
`;
const Con = styled.div`
  background-color: #91919122;
  // display: flexbox;
  position: relative;
  border-radius: 15px;
  border: 1px solid #ffffff6e;
  //flex-wrap: wrap;
  margin: 0;
  display: flex;
  //gap: 10;
  padding: 1rem auto;
  width: 100%;
  z-index: 13;
  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //  margin-right: 10px;
  }

  & img {
    position: relative;
    left: 0px;
    margin: auto;
    margin-right: 1rem;
    width: 200px;
    height: 200px;
    border-top-left-radius: 10px;
    object-fit: cover;
  }
  & iframe {
    height: 200px;
  }
  & .title {
    padding: 5px 1.5rem;

    &.active {
      width: 90%;
      & h1 {
        margin-bottom: 2rem;
      }
    }
    span {
      margin-top: 1rem;
      text-align: left;
    }
    & h1 {
      font-size: 1rem;
      color: #f3f3f3;

      text-shadow: 0px 4px 2px rgba(44, 44, 44, 0.5);
    }
  }
  & .details {
    display: flex;
    width: 90%;
    flex-direction: column;
    margin: auto;
  }
  span {
    width: 90%;
    margin: 0.5rem auto;
    text-align: left;
    &.links {
      position: relative;
      width: 90%;
      // margin: auto;
      height: 50px;
      top: 0;
      & .ss {
        color: #fff;
        background-color: #bc185a;
        border: none;
        padding: 10px 20px;

        border-radius: 10px;

        box-shadow: 1px 1px 2px 2px rgba(44, 44, 44, 0.3);

        cursor: pointer;
        top: 0;
        position: relative;

        & i {
          font-size: 1.2rem;
          object-fit: contain;
          position: relative;
          top: 3px;
          right: -5px;
        }
      }
    }
  }
`;
export default Years;
