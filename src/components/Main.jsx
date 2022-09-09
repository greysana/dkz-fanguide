import React from "react";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutDKZ from "../pages/AboutDKZ";
import Members from "../pages/Members";
import Musicvideos from "../pages/Musicvideos";
import Albums from "../pages/Albums";
import Chart from "../pages/Chart";
import { motion, useScroll } from "framer-motion";
import AlbumDetails from "../pages/AlbumDetails";
import MainGallery from "../pages/MainGallery";
import FanSite from "../pages/fan-community/FanSite";
import FanTranslator from "../pages/fan-community/FanTranslator";
import FanEditor from "../pages/fan-community/FanEditor";
import FanArtist from "../pages/fan-community/FanArtist";
import FanArtGallery from "../pages/fan-community/FanArtGallery";
const Main = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}>
      <MainCon>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest/" element={<Home />} />
          <Route path="/about/" element={<AboutDKZ />} />
          <Route path="/about/:sect" element={<AboutDKZ />} />
          <Route path="/about/main_gallery/:name" element={<MainGallery />} />
          <Route path="/members/:mem" element={<Members />} />
          <Route path="/music-videos/" element={<Musicvideos />} />
          <Route path="/albums/" element={<Albums />} />
          <Route path="/albums/:name/details/" element={<AlbumDetails />} />

          <Route path="/achievements/" element={<Chart />} />
          <Route path="/fan-community/fan-site" element={<FanSite />} />
          <Route
            path="/fan-community/fan-translator"
            element={<FanTranslator />}
          />
          <Route path="/fan-community/fan-editors" element={<FanEditor />} />
          <Route path="/fan-community/fan-arts" element={<FanArtist />} />
          <Route
            path="/fan-community/fan-art-gallery"
            element={<FanArtGallery />}
          />
        </Routes>
      </MainCon>
    </motion.div>
  );
};

const MainCon = styled.div`
  position: relative;
  overflow-x: hidden;
  scroll-behavior: smooth;
  top: 1rem;
  padding-top: 1rem;
  background-color: #323232;
  @media (max-width: 800px) {
    // height: 100vh;
  }
`;

export default Main;
