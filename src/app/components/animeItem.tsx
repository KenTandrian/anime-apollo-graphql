import React from "react";
import styled from "styled-components";
import { GetAnimePage_Page_media } from "../services/animeService/__generated__/GetAnimePage";

const AnimeItemContainer = styled.div`
  width: 14em;
  height: 18em;
  display: flex;
  flex-direction: column;
`;

const AnimeCover = styled.div`
  width: auto;
  height: 13em;

  img {
    width: auto;
    height: 100%;
  }
`;

const AnimeTitle = styled.h6`
  margin-top: 8px;
  font-size: 19px;
  color: black;
  font-weight: 600;
`;

const AnimeItem = ({ anime }: { anime: GetAnimePage_Page_media | null }) => {
  return (
    <AnimeItemContainer>
      <AnimeCover>
        <img
          alt={anime?.title?.english || ""}
          src={anime?.coverImage?.large || ""}
        />
      </AnimeCover>
      <AnimeTitle>{anime?.title?.english}</AnimeTitle>
      <h5>Average Score: {anime?.averageScore}</h5>
    </AnimeItemContainer>
  );
};

export default AnimeItem;
