import { Dispatch } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Hero from "../../components/hero";
import { useAppDispatch } from "../../hooks";
import animeService from "../../services/animeService";
import { GetAnimePage } from "../../services/animeService/__generated__/GetAnimePage";
import { setAnimePage } from "./homePageSlice";
import HotAnime from "./hotAnime";

interface IHomePageProps {}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const actionDispatch = (dispatch: Dispatch) => ({
  setAnimePage: (page: GetAnimePage["Page"]) => dispatch(setAnimePage(page)),
});

const HomePage = (props: IHomePageProps) => {
  const { setAnimePage } = actionDispatch(useAppDispatch());

  const fetchAnimePage = async () => {
    const animePage = await animeService.getAnimePage(0, 12).catch((err) => {
      console.log("Error: " + err);
    });
    if (animePage) setAnimePage(animePage);
  };

  useEffect(() => {
    fetchAnimePage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />
      <Hero />
      <HotAnime />
      <Footer />
    </Container>
  );
};

export default HomePage;
