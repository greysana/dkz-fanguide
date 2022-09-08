import React from "react";
import styled from "styled-components";
import YoutubeEmbed from "../../components/YoutubeEmbed";

const YoutubeEmbeds = () => {
  return (
    <YtCon>
      <h1>Latest</h1>
      <h2>Music Video</h2>
      <YoutubeEmbed embedId="HFxKVZdS1zQ" />
      <h2>DKZ Album </h2>
    </YtCon>
  );
};

const YtCon = styled.div`
  position: relative;
  margin: auto;
  // width: 50%;
  z-index: 20;
  top: 80px;
  // width: 789px;
  height: 100%;

  border-radius: 10px;
  & iframe {
    height: 300px;
  }

  & h1 {
    position: relative;
    text-align: left;
    left: 2rem;
    top: 0px;
    font-size: 20px;
    font-weight: bold;
    color: #dbdbdb;
  }
  & h2 {
    position: relative;
    //top: 50px;
    margin-top: 1.5rem;
    font-size: 17px;
    font-weight: bold;
    color: #ececec;
  }
`;

export default YoutubeEmbeds;
