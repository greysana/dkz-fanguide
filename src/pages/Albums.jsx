import React from "react";
import styled from "styled-components";
import AlbumCon from "./pageSections/AlbumCon";
import LatestBanner from "./pageSections/LatestBanner";
import YoutubeEmbeds from "./pageSections/YoutubeEmbeds";

const Albums = () => {
  return (
    <HomeCon>
      <Gradient className="red" />
      <Gradient className="green" />
      {/* <Gradient className="red2" />
      <Gradient className="green2" /> */}
      <AlbumCon />
    </HomeCon>
  );
};

const HomeCon = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
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
  &.red2 {
    position: absolute;
    width: 928px;
    height: 1055px;
    left: 1062px;
    top: 2459px;
    z-index: 6;
    background: #be3360;
    filter: blur(500px);
    overflow: hidden;
  }
  &.green2 {
    position: absolute;
    width: 928px;
    height: 955px;
    left: -1062px;
    top: 3459px;
    z-index: 6;
    background: #bed542;
    filter: blur(500px);
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
  }
`;
export default Albums;
