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
                <img src="" alt="" />
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
  width: 100%;
  background-color: #323232;
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
    & ul {
      list-style: none;
      & .card {
        height: 120px;
        width: 620px;
        background-color: #dedede21;
        border-radius: 15px;
        border: 1px solid #ffffff6e;
        box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
        margin: 1rem auto;
        display: inline-flex;
        & img {
          height: 90px;
          width: 90px;
          margin: auto;
          margin-left: 0.5rem;
        }
        & .detail {
          width: 270px;
          display: inline-flex;
          padding: 1rem;
          & h2 {
            font-size: 1rem;
            color: #dddddd;
          }
          & h3 {
            color: #fff;
            font-size: 1.2rem;
            margin: auto;
          }
        }
        & .link {
          width: 270px;
          display: inline-flex;
          & .yt {
            height: 70px;
            width: 70px;
            background-color: #ea2727;
            border-radius: 15px;
            margin: 1.5rem auto;
          }
          & .spot {
            height: 70px;
            width: 70px;
            background-color: #53ea56;
            border-radius: 15px;
            margin: 1.5rem auto;
          }
          & .apl {
            height: 70px;
            width: 70px;
            background-color: #1f1d1d;
            border-radius: 15px;
            margin: 1.5rem auto;
          }
        }
      }
    }
  }
  & .contentImg {
    width: 700px;
    margin: auto;
    & img {
      margin: auto;
      margin-top: -0.5rem;
      width: 600px;
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
  }
`;

export default AlbumDetails;
