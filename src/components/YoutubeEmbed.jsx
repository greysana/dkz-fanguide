import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const YoutubeEmbed = ({ embedId }) => (
  <Yt>
    <div className="video-responsive">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  </Yt>
);

const Yt = styled.div`
  & iframe {
    width: 530px;
    height: 100%;
    @media (max-width: 1000px) and (min-width: 830px) {
      width: 600px;
    }
    @media (min-width: 580px) and (max-width: 830px) {
      width: 550px;
    }
    @media (max-width: 580px) {
      width: 450px;
      //height: 200px;
    }
    @media (max-width: 450px) {
      width: 350px;
    }
    @media (max-width: 400px) {
      width: 300px;
    }
    @media (max-width: 380px) {
      width: 280px;
    }
  }
`;
YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
