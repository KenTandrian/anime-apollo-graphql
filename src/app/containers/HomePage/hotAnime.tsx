import React from "react";
import { createSelector } from "reselect";
import styled from "styled-components";
import AnimeItem from "../../components/animeItem";
import { useAppSelector } from "../../hooks";
import { makeSelectAnimePage } from "./selectors";

const HotAnimeContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
  animePage,
}));

const HotAnime = () => {
  const { animePage } = useAppSelector(stateSelector);

  const isEmptyAnimePage =
    !animePage || !animePage.media || animePage.media.length === 0;

  if (isEmptyAnimePage) {
    return null;
  }

  return (
    <HotAnimeContainer>
      {animePage &&
        animePage.media &&
        animePage.media.map((anime) => (
          <AnimeItem key={anime?.id} anime={anime} />
        ))}
    </HotAnimeContainer>
  );
};

export default HotAnime;
