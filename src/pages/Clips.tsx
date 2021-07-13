import React from "react";

import Header from "../components/Header";
import ToolSideBar from "../components/ToolSideBar";
import LiveCounter from "../components/LiveCounter";
import NotifierConfig from "../components/NotifierConfig";
// import Clips from "../components/Clips";
import { Container, BackgroundImage, MainContent } from "../styles/home";
import SaveComponent from "../components/SaveComponent";
import WarningClipsMessage from "../components/WarningClipsMessage";

const Clips: React.FC = () => {
  return (
    <>
      {/* <SaveComponent /> */}
      <Container>
        <Header />
        <ToolSideBar />
        <MainContent>
          {/* <LiveCounter /> */}
          {/* <NotifierConfig /> */}
          <WarningClipsMessage />
          {/* <Clips /> */}
        </MainContent>
        <BackgroundImage />
      </Container>
    </>
  );
};

export default Clips;
