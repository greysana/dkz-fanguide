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
import useFetch from "../hooks/useFetch";
const Main = () => {
  const { scrollYProgress } = useScroll();
  const { data: member, loading, error, reFetch } = useFetch("/members");
  const {
    data: dkz,
    loading: dkzload,
    error: dkzerror,
    reFetch: dkzfetch,
  } = useFetch("/dkz");

  return (
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}>
      <MainCon>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/latest/" element={<Home />} />
          <Route
            path="/about/"
            element={<AboutDKZ member={member} dkz={dkz} />}
          />
          <Route path="/about/:sect" element={<AboutDKZ member={member} />} />
          <Route path="/about/main_gallery/:name" element={<MainGallery />} />
          <Route path="/members/:mem" element={<Members data={member} />} />
          <Route path="/music-videos/" element={<Musicvideos />} />
          <Route path="/albums/" element={<Albums />} />
          <Route path="/albums/:name/details/" element={<AlbumDetails />} />

          <Route path="/achievements" element={<Chart />} />
          <Route path="/fan-community/fan-site/:mem" element={<FanSite />} />
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
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    visibility: hidden;
    width: 0px;
    height: 0px;
  }
  @media (max-width: 800px) {
    // height: 100vh;
  }
`;

export default Main;
