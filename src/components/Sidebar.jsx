import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { RiFileUserFill } from "react-icons/ri";
import { RiAlbumFill } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { AiOutlineBarChart } from "react-icons/ai";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [active, setactive] = useState("latest");
  const [activesub, setactivesub] = useState("");

  const _handleClick = (menuItem) => {
    setactive(menuItem);
  };
  const handleClick2 = (submenuItem) => {
    setactivesub(submenuItem);
    navigate(`/about/${submenuItem}`);
  };
  useEffect(() => {
    const loc = location.pathname;
    if (loc.includes("latest")) {
      setactive("latest");
    } else if (loc.includes("about")) {
      setactive("about");
    } else if (loc.includes("members")) {
      setactive("members");
    } else if (loc.includes("music")) {
      setactive("music");
    } else if (loc.includes("albums")) {
      setactive("albums");
    } else if (loc.includes("achievements")) {
      setactive("achievements");
    }

    if (loc.includes("intro")) {
      setactivesub("intro");
    } else if (loc.includes("timeline")) {
      setactivesub("timeline");
    } else if (loc.includes("gallery")) {
      setactivesub("gallery");
    } else if (loc === "/about/") {
      setactivesub("");
    }
  }, [location]);
  console.log(activesub);

  return (
    <SidebarWrap>
      <SidebarCon>
        <Info className="heading">
          <h1>DKZ</h1>
          <span>DKZ</span>
        </Info>
        <Nav>
          <ul>
            <div></div>
            <li>
              <button className={active === "latest" ? " active" : ""}>
                .
              </button>
              <MenuItem
                to="/latest/"
                onClick={_handleClick.bind(this, "latest")}
              >
                <div className={active === "latest" ? "menu active" : "menu"}>
                  <i>
                    <AiFillHome />
                  </i>
                  <p>Home</p>
                </div>
              </MenuItem>
            </li>
            <li>
              <button className={active === "about" ? " active" : ""}>.</button>

              <MenuItem to="/about/" onClick={_handleClick.bind(this, "about")}>
                <text className={active === "about" ? "menu active" : "menu"}>
                  <i>
                    <FaUsers />
                  </i>
                  <p>About DKZ</p>
                </text>
              </MenuItem>
              {active === "about" && (
                <div className="subMenu">
                  <ul>
                    <li>
                      <div
                        className={
                          activesub === "intro" ? "line active" : "line"
                        }
                      ></div>
                      <button
                        className={
                          activesub === "intro" ? "text active" : "text"
                        }
                        onClick={handleClick2.bind(this, "intro")}
                      >
                        Intro
                      </button>
                    </li>
                    <li>
                      <div
                        className={
                          activesub === "timeline" ? "line active" : "line"
                        }
                      ></div>
                      <button
                        className={
                          activesub === "timeline" ? "text active" : "text"
                        }
                        onClick={handleClick2.bind(this, "timeline")}
                      >
                        TimeLine
                      </button>
                    </li>
                    <li>
                      <div
                        className={
                          activesub === "gallery" ? "line active" : "line"
                        }
                      ></div>
                      <button
                        className={
                          activesub === "gallery" ? "text active" : "text"
                        }
                        onClick={handleClick2.bind(this, "gallery")}
                      >
                        Gallery
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <button className={active === "members" ? " active" : ""}>
                .
              </button>

              <MenuItem
                to="/members/Kyoungyoon 경윤/"
                onClick={_handleClick.bind(this, "members")}
              >
                <text className={active === "members" ? "menu active" : "menu"}>
                  <i>
                    <RiFileUserFill />
                  </i>
                  <p>Members</p>
                </text>
              </MenuItem>
            </li>
            <li>
              <button className={active === "music" ? " active" : ""}>.</button>

              <MenuItem
                to="/music-videos/"
                onClick={_handleClick.bind(this, "music")}
              >
                <text className={active === "music" ? "menu active" : "menu"}>
                  <i>
                    <MdOndemandVideo />
                  </i>
                  <p> Music Videos</p>
                </text>
              </MenuItem>
            </li>
            <li>
              <button className={active === "albums" ? " active" : ""}>
                .
              </button>

              <MenuItem
                to="/albums/"
                onClick={_handleClick.bind(this, "albums")}
              >
                <text className={active === "albums" ? "menu active" : "menu"}>
                  <i>
                    <RiAlbumFill />
                  </i>
                  <p> Albums</p>
                </text>
              </MenuItem>
            </li>
            <li>
              <button className={active === "achievements" ? " active" : ""}>
                .
              </button>

              <MenuItem
                to="/achievements/"
                onClick={_handleClick.bind(this, "achievements")}
              >
                <text
                  className={active === "achievements" ? "menu active" : "menu"}
                >
                  <i>
                    <AiOutlineBarChart />
                  </i>
                  <p>Achievements</p>
                </text>
              </MenuItem>
            </li>
          </ul>
        </Nav>
      </SidebarCon>
    </SidebarWrap>
  );
};

const SidebarWrap = styled.div``;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: #d8cccc;
`;

const Nav = styled.div`
  position: relative;
  border-left: 4px solid #0b0b0b;
  margin: auto;
  margin-left: 3.5rem;

  & ul {
    list-style: none;
    text-align: left;
    color: #d8cccc;
    font-family: "Exo", sans-serif;
    font-size: 14px;
    position: relative;
    left: -48.5px;
  }
  & li {
    margin: 1rem auto;
    cursor: pointer;
    & .subMenu {
      position: relative;
      margin: auto;
      width: 200px;
      left: 68px;
      display: inline;
      margin-top: 18px;
      & ul {
        margin-top: 30px;
      }
      & li {
        margin: 1rem auto;
        cursor: pointer;

        & .line {
          width: 10px;
          height: 3px;
          position: relative;
          left: -58px;
          top: 0.65rem;
          background-color: #0a0a0a;
          &.active {
            background-color: #be3360;
            width: 15px;
            left: -61px;
          }
        }
        & button.text {
          position: relative;
          padding: 10px;
          font-size: 0.8rem;
          background-color: transparent;
          width: 50%;
          border-radius: 15px;
          color: #e4e4e4;
          height: 40px;

          cursor: pointer;

          &.active {
            color: #bed542;
            font-weight: 600;
            font-size: 0.6rem;
            background-color: #191919a1;
            padding: 3px;
            border-radius: 15px;
          }
          &:hover {
            background-color: #1818189f;
            padding: 10px;
            border-radius: 15px;
          }
        }
      }
    }
  }
  & button {
    background-color: #0a0a0a;
    color: transparent;
    height: 13px;
    width: 13px;
    margin-right: 10px;
    border-radius: 50%;
    position: relative;
    z-index: 10;
    border: none;
    &.active {
      background-color: #bed542;
      color: transparent;
      -webkit-animation: scale-up-center 0.4s
        cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1)
        ease-in-out;

      @keyframes scale-up-center {
        0% {
          transform: scale(0.5);
        }
        100% {
          transform: scale(1.2);
        }
      }
    }
    &:hover {
      transform: scale(1.5) both;
      transition: 0.2s ease-in-out;
    }
  }
  & .menu {
    position: relative;
    display: inline-flex;
    // margin-left: 12px;
    padding: 10px 20px;
    &.active {
      -webkit-animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
        both;
      animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      font-weight: bold;
      background-color: #be3360;
      color: #ededed;
      padding: 10px 20px;
      border-radius: 30px;
      transition: 0.2s ease-in-out;
    }
    &:hover {
      background-color: #1b1b1b;
      color: #ededed;
      padding: 10px 20px;
      border-radius: 30px;
      transition: 0.2s ease-in-out;
    }
  }
  & i {
    position: relative;
    object-fit: contain;
    margin: 10px 0px;
    margin-right: 5px;
    top: 2px;
  }

  @media (min-width: 800px) and (max-width: 1280px) {
    margin-left: 1rem;
    width: 100%;
    display: inline-block;
    & ul {
      font-size: 10px;
      position: relative;
      left: -48.5px;
      width: 100%;
    }
    & li {
      margin: 1rem auto;

      & .subMenu {
        width: 200px;
        left: 68px;

        margin-top: 18px;
        & ul {
          margin-top: 30px;
        }
        & li {
          margin: 1rem auto;
          cursor: pointer;

          & .line {
            width: 10px;
            height: 3px;
            position: relative;
            left: -58px;
            top: 0.65rem;
            background-color: #0a0a0a;
            &.active {
              background-color: #be3360;
              width: 15px;
              left: -61px;
            }
          }
          & button.text {
            position: relative;
            padding: 10px;
            font-size: 0.8rem;
            background-color: transparent;
            width: 50%;
            border-radius: 15px;
            color: #e4e4e4;
            height: 40px;

            cursor: pointer;

            &.active {
              color: #bed542;
              font-weight: 600;
              font-size: 0.6rem;
              background-color: #191919a1;
              padding: 3px;
              border-radius: 15px;
            }
            &:hover {
              background-color: #1818189f;
              padding: 10px;
              border-radius: 15px;
            }
          }
        }
      }
    }
    & button {
      background-color: #0a0a0a;
      color: transparent;
      height: 13px;
      width: 13px;
      margin-right: 10px;
      border-radius: 50%;
      position: relative;
      z-index: 10;
      border: none;
      &.active {
        background-color: #bed542;
        color: transparent;
        -webkit-animation: scale-up-center 0.4s
          cubic-bezier(0.39, 0.575, 0.565, 1) both;
        animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1)
          ease-in-out;

        @keyframes scale-up-center {
          0% {
            transform: scale(0.5);
          }
          100% {
            transform: scale(1.2);
          }
        }
      }
      &:hover {
        transform: scale(1.5) both;
        transition: 0.2s ease-in-out;
      }
    }
    & .menu {
      margin-left: 8px;
      font-size: 10px;
      padding: 8px 10px;

      &.active {
        -webkit-animation: slide-in-left 0.5s
          cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        font-weight: bold;
        background-color: #be3360;
        color: #ededed;
        padding: 8px 15px;
        border-radius: 25px;
        transition: 0.2s ease-in-out;
      }
      &:hover {
        background-color: #1b1b1b;
        color: #ededed;
        padding: 8px 15px;
        border-radius: 25px;
        transition: 0.2s ease-in-out;
      }
    }
    & i {
      position: relative;
      object-fit: contain;
      margin: 10px 0px;
      margin-right: 5px;
      top: 2px;
    }
  }
  @media (min-width: 300px) and (max-width: 800px) {
  }
`;

const SidebarCon = styled.div`
  display: block;
  position: fixed;
  float: right;
  z-index: 10;
  background-color: #292929;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  color: #bed542;

  & h1 {
    position: relative;
    height: 10px;
    z-index: 10;
  }
  & span {
    font-weight: 700;
    font-size: 50px;
    color: #be335f35;
    position: relative;
    top: -50px;
    z-index: 5;
  }
`;

export default Sidebar;
