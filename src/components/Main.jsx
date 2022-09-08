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
        </Routes>
      </MainCon>
    </motion.div>
  );
};

const MainCon = styled.div`
  position: relative;
  overflow-x: hidden;
  scroll-behavior: smooth;
  height: 100vh;
  //width: 80vw;
  top: 0px;

  background-color: #323232;
  @media (max-width: 800px) {
    width: 100vw;
  }
  // width: 85vw;
  //overflow-y: scroll;
`;

export default Main;
