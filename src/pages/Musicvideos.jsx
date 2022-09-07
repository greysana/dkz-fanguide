import React from "react";
import styled from "styled-components";
import YoutubeEmbed from "../components/YoutubeEmbed";

const musicVideos = [
  {
    Title: "Cupid",
    Link: "HFxKVZdS1zQ",
    Description: "",
    ReleaseDate: "April 12, 2022",
  },
  {
    Title: "Crazy Night",
    Link: "b7HBeVGgy6M",
    Description: "",
    ReleaseDate: "July 1, 2021",
  },
  {
    Title: "Universe",
    Link: "Ny6bJWTNu5M",
    Description: "",
    ReleaseDate: "April 15, 2021",
  },
  {
    Title: "Beautiful",
    Link: "pORzUshV2GU",
    Description: "",
    ReleaseDate: "August 19,2020",
  },
  {
    Title: "Lupin",
    Link: "6ZgIW9CwhZw",
    Description: "",
    ReleaseDate: "March 15, 2020",
  },
  {
    Title: "Dreaming You",
    Link: "Ds_SRpB2-jQ",
    Description: "",
    ReleaseDate: "January 2, 2020",
  },
  {
    Title: "Fever",
    Link: "teql9Hr7TVM",
    Description: "",
    ReleaseDate: "November 6, 2019",
  },

  {
    Title: "Blockbuster",
    Link: "h0VIGOnjuhs",
    Description: "",
    ReleaseDate: "July 22, 2019",
  },
  {
    Title: "NOM",
    Link: "8o6ZxM_DNKY",
    Description: "",
    ReleaseDate: "April 24, 2019",
  },
];

const Musicvideos = () => {
  return (
    <MuVidCon>
      {musicVideos.map((musicVideo, index) => (
        <MvCon>
          <VidCon>
            <YoutubeEmbed embedId={musicVideo.Link} key={index} />
          </VidCon>
          <Info>
            <h1>{musicVideo.Title}</h1>
            <ul>
              <li>
                {" "}
                <span>Description:</span>
                {musicVideo.Description}
              </li>
              <li>
                <span>Release Date:</span>
                {musicVideo.ReleaseDate}
              </li>
            </ul>
          </Info>
        </MvCon>
      ))}
    </MuVidCon>
  );
};

const MuVidCon = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  flex-wrap: wrap;
  margin: auto;
  z-index: 13;
  justify-content: center;
  align-items: center;
  top: 2rem;
`;
const MvCon = styled.div`
  position: relative;
  height: 300px;
  width: 800px;
  display: flex;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
  padding: 0 10px;
  flex-wrap: wrap;
  display: inline-flex;
  background-color: #d3d3d321;
  // display: flexbox;
  border-radius: 15px;
  border: 1px solid #ffffff6e;
  flex-wrap: wrap;
  margin: 1rem auto;
  // height: 500px;
  position: relative;
  border-radius: 5px;
  margin: 20px;
  padding: 0;
  padding-bottom: 1rem;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.3);
  @media (max-width: 1000px) and (min-width: 830px) {
    width: 600px;
  }
  @media (min-width: 580px) and (max-width: 830px) {
    width: 550px;
    // display: flex;
    height: 100%;
  }
  @media (max-width: 580px) {
    width: 450px;
    display: flex;
    height: 100%;
  }
  @media (max-width: 450px) {
    width: 350px;
    display: flex;
    height: 100%;
  }
  @media (max-width: 400px) {
    width: 300px;
    display: flex;
    height: 100%;
  }
  @media (max-width: 380px) {
    width: 280px;
    display: flex;
    height: 100%;
  }
`;

const VidCon = styled.div`
  background-color: #4f4f4f;

  position: relative;
  width: 65%;
  height: 100%;
  margin: auto;
  object-fit: contain;
  & iframe {
    height: 300px;
    @media (min-width: 550px) and (max-width: 830px) {
    }
    @media (max-width: 550px) {
      height: 200px;
      // height: 300px;
    }
  }
  @media (min-width: 550px) and (max-width: 830px) {
    width: 100%;
    // height: 300px;
  }
  @media (max-width: 550px) {
    width: 100%;
    // height: 300px;
  }
`;

const Info = styled.div`
  position: relative;

  width: 35%;
  height: 70%;

  color: #d4d4d4;
  @media (min-width: 550px) and (max-width: 830px) {
    width: 100%;
    & h1 {
      font-size: 14px;
    }
  }
  @media (max-width: 550px) {
    width: 100%;
  }
  & h1 {
    margin: 0.5rem;
    margin-top: 1.5rem;
    font-size: 13px;
    color: #a7e685;
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
      color: #ea779c;
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

export default Musicvideos;
