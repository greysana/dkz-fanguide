import React from "react";
import styled from "styled-components";
import PhotoCard from "../../components/PhotoCard";

const AlbumCon = () => {
  return (
    <AlbumCons>
      <PhotoCard />
    </AlbumCons>
  );
};

const AlbumCons = styled.div`
  position: relative;
  margin: auto;
  margin-top: 5rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
export default AlbumCon;
