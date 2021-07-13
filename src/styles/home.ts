import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  color: white;
`;

export const BackgroundImage = styled.div`
  z-index: -2;
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: url("https://www.xtrafondos.com/wallpapers/canal-lemaire-en-la-antartida-827.jpg")
    no-repeat center;
  background-size: cover;
  filter: brightness(0.15);
`;

export const MainContent = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
`;
