import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { cardItem } from "../API/album";
const AlbumDetails = () => {
  const { name } = useParams();
  const album = cardItem.find((o) => o.name === name);
  return (
    <AlbumDetailsCon>
      <div className="containers">
        <Gradient className="red" />
        <Gradient className="green" />
      </div>
      <div className="infoCon">
        <img className="albumPic" src={album.images} alt="" />{" "}
        <Info>
          <h1>{album.title}</h1>

          <ul>
            <li>
              <p>
                {album.body}
                <br />
              </p>

              <hr></hr>
            </li>
            <li>
              <span>version/s:</span>
              {album.version}
            </li>
            <br />
            <li>
              <span>label:</span>
              {album.label}
            </li>
            <li>
              <span>release date:</span>
              {album.releaseDate}
            </li>
            <li>
              <span>type:</span>
              {album.type}
            </li>
          </ul>
        </Info>
      </div>
      <div className="discoCon">
        <ul>
          {album?.disco.map((dis) => (
            <li>
              <div className="card">
                <img src={dis.images} alt="" />
                <div className="detail">
                  <h2>Title:</h2>
                  <h3>{dis.title}</h3>
                </div>
                <div className="link">
                  <div className="yt"></div>
                  <div className="spot"></div>
                  <div className="apl"></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="contentImg">
        {album?.contentImg?.map((img, index) => (
          <img src={img.src} alt="content" key={index} />
        ))}
      </div>
    </AlbumDetailsCon>
  );
};

const AlbumDetailsCon = styled.div`
  // margin: auto;
  position: relative;
  display: block;
  //width: 80vw;
  @media (max-width: 800px) {
    width: 100vw;
  }
  background-color: #323232;
  //height: 100vh;
  & .containers {
    background-color: #323232;
    height: 100%;
  }
  & .infoCon {
    position: relative;
    // height: 400px;
    width: 700px;
    //display: flex;

    padding: 1rem;

    border-radius: 10px;

    background-color: #91919122;

    border-radius: 15px;
    border: 1px solid #ffffff6e;

    margin: auto;
    // margin-top: 4rem;

    position: relative;

    z-index: 15;
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
    @media (max-width: 800px) {
      width: 90vw;

      height: 100%;
    }
    & .albumPic {
      background-color: #13131346;

      position: relative;
      width: 90%;
      height: 300px;
      margin: auto;
      margin-top: 1rem;
      object-fit: contain;
    }
  }
  & .discoCon {
    position: relative;
    //height: 400px;
    width: 700px;
    display: flex;

    padding: 1rem;
    flex-wrap: wrap;
    display: inline-flex;
    background-color: #91919122;
    border-radius: 15px;
    border: 1px solid #ffffff6e;
    flex-wrap: wrap;
    margin: 2rem auto;
    margin-top: 4rem;
    z-index: 15;
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
    @media (max-width: 800px) {
      width: 90vw;
      display: flex;
      flex-wrap: wrap;
      height: 100%;
    }
    & ul {
      list-style: none;
      padding-left: 0px;
      & .card {
        // height: 120px;
        width: 700px;
        background-color: #dedede21;
        border-radius: 15px;
        border: 1px solid #ffffff6e;
        box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
        margin: 1rem auto;
        margin-left: 0px;
        padding: 1rem;
        display: inline-flex;
        @media (max-width: 800px) {
          width: 80vw;
        }
        @media (max-width: 600px) {
          width: 80vw;
        }
        @media (max-width: 580px) {
          display: flex;
          flex-wrap: wrap;
          width: 90vw;
          justify-content: center;
          align-items: center;
          padding: 0;
        }
        & img {
          height: 90px;
          width: 90px;
          margin: auto;
          margin-left: 0.5rem;
          background-color: #5a101052;
          object-fit: contain;
          @media (max-width: 800px) {
            width: 90px;
            height: 90px;
          }
          @media (max-width: 600px) {
            width: 90px;
            height: 90px;
          }
          @media (max-width: 580px) {
            margin: auto;
            margin-top: 1rem;
            width: 80vw;
            height: 100%;
          }
        }
        & .detail {
          width: 40%;
          display: inline-flex;
          padding: 1rem;
          @media (max-width: 800px) {
            width: 100%;
            height: 60px;
          }
          & h2 {
            font-size: 1rem;
            color: #dddddd;
            @media (max-width: 550px) {
              font-size: 0.8rem;
            }
          }
          & h3 {
            color: #fff;
            font-size: 1rem;
            margin: auto;
            @media (max-width: 550px) {
              font-size: 0.8rem;
            }
          }
        }
        & .link {
          width: 40vw;
          display: inline-flex;
          @media (max-width: 580px) {
            width: 60vw;
          }
          & .yt {
            height: 70px;
            width: 70px;
            background-color: #ea2727;
            border-radius: 15px;
            margin: 1.5rem auto;
            @media (max-width: 800px) {
              width: 60px;
              height: 60px;
            }
            @media (max-width: 600px) {
              width: 50px;
              height: 50px;
            }
            @media (max-width: 380px) {
              width: 50px;
              height: 50px;
            }
          }
          & .spot {
            height: 70px;
            width: 70px;
            background-color: #53ea56;
            border-radius: 15px;
            margin: 1.5rem auto;
            @media (max-width: 800px) {
              width: 60px;
              height: 60px;
            }
            @media (max-width: 600px) {
              width: 50px;
              height: 50px;
            }
            @media (max-width: 380px) {
              width: 50px;
              height: 50px;
            }
          }
          & .apl {
            height: 70px;
            width: 70px;
            background-color: #1f1d1d;
            border-radius: 15px;
            margin: 1.5rem auto;
            @media (max-width: 800px) {
              width: 60px;
              height: 60px;
            }
            @media (max-width: 600px) {
              width: 50px;
              height: 50px;
            }
            @media (max-width: 380px) {
              width: 50px;
              height: 50px;
            }
          }
        }
      }
    }
  }
  & .contentImg {
    width: 700px;
    margin: auto;
    @media (max-width: 800px) {
      width: 90vw;

      height: 100%;
    }
    & img {
      margin: auto;
      margin-top: -0.5rem;
      width: 600px;
      @media (max-width: 800px) {
        width: 90vw;

        height: 100%;
      }
    }
  }
`;
const Info = styled.div`
  position: relative;

  height: 70%;

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
    overflow: hidden;
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
    overflow: hidden;
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
  &.blue2 {
    position: absolute;
    width: 1063px;
    height: 718px;
    left: 120px;
    top: 551px;
    z-index: 8;
    background: #acfaff;
    filter: blur(800px);
    overflow: hidden;
  }
`;

export default AlbumDetails;
