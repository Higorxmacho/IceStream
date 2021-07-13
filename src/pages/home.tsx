import React from "react";

import Header from "../components/Header";
import ToolSideBar from "../components/ToolSideBar";
import LiveCounter from "../components/LiveCounter";
import Clips from "../components/Clips";
import NotifierConfig from "../components/NotifierConfig";
import { Container, BackgroundImage, MainContent } from "../styles/home";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <ToolSideBar />

      <MainContent>
        <LiveCounter />
        {/* <NotifierConfig /> */}
        {/* <Clips /> */}
      </MainContent>
      <BackgroundImage />
    </Container>
  );
};

export default Home;
