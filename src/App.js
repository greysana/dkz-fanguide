import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import FloatBar from "./components/FloatBar";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function App() {
  const [click, setclick] = useState(false);
  return (
    <Mains>
      <Router>
        <SidebarCon>
          <Sidebars>
            <Sidebar />
          </Sidebars>
          {click && (
            <Float>
              <FloatBar selected={setclick} />
            </Float>
          )}
        </SidebarCon>

        <MainCon>
          <button
            className="burger"
            onClick={() => {
              if (click) {
                setclick(false);
              } else {
                setclick(true);
              }
            }}
          >
            {" "}
            {click ? <AiOutlineClose /> : <FaBars />}
          </button>
          <Main />
        </MainCon>
      </Router>
    </Mains>
  );
}

const Mains = styled.div`
  text-align: center;
  background-color: #323232;
  display: grid;
  grid-template-columns: 0.2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px 0px;
  grid-template-areas: "Sidebar Main";
  grid-row-gap: 0px;
  max-width: 2100px;
  height: 100vh;
  margin: auto;
  //background-color: #fff;
  overflow-x: hidden;
  overflow-y: hidden;
  overflow: hidden;

  @media (max-width: 800px) {
    //display: block;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-template-areas: "Main";
    overflow: hidden;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: hidden;
    & .progress-bar {
      transform: none !important;
    }
    //  height: 100vh;
  }
`;
const MainCon = styled.div`
  grid-area: Main;
  //overflow: hidden;
  height: 100vh;
  background-color: #323232;

  @media (max-width: 800px) {
    width: 100vw;
  }
  & button.burger {
    visibility: hidden;
    position: fixed;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: bold;
    z-index: 35;
    overflow: hidden;
    &:hover {
      color: #bed542;
    }
    @media (max-width: 800px) {
      visibility: visible;
      z-index: 30;
      right: 1.5rem;
      top: 1rem;
      overflow: hidden;
      //  width: 100vw;
    }
  }
`;
const SidebarCon = styled.div`
  background-color: #292929;
  grid-area: Sidebar;
  @media (max-width: 800px) {
    visibility: hidden;
  }
`;

const Sidebars = styled.div`
  height: 100vh;
  @media (max-width: 800px) {
    visibility: hidden;
  }
`;

const Float = styled.div`
  visibility: hidden;
  height: 0px;
  width: 0px;
  @media (max-width: 800px) {
    visibility: visible;
    height: 100vh;
    width: 18vw;
  }
  position: absolute;
  top: 0;
  left: 0;
`;

export default App;
