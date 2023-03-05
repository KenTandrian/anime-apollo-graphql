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
`;

const stateSelector = createSelector(makeSelectAnimePage, (animePage) => ({
  animePage,
}));

const HotAnime = () => {
  const { animePage } = useAppSelector(stateSelector);

  const isEmptyAnimePage =
    !animePage || !animePage.media || animePage.media.length === 0;

  if (isEmptyAnimePage) return null;

  return (
    <div className="py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" id="hot">
        <div className="sm:text-center mb-12">
          <h2 className="text-lg font-semibold leading-8 text-amber-600">
            Hot Anime
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Most Watched Anime in The Past Week
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Here are some anime with the highest view rate in the previous week,
            which might be your next watchlist.
          </p>
        </div>
        <HotAnimeContainer className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {animePage &&
            animePage.media &&
            animePage.media.map((anime) => (
              <AnimeItem key={anime?.id} anime={anime} />
            ))}
        </HotAnimeContainer>
      </div>
    </div>
  );
};

export default HotAnime;
