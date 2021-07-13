import styled, { keyframes } from "styled-components";

const openContainerAnimation = keyframes`
  0% {
    transform: translateX(-3%);
    opacity: 0;
  }

  100% {
    
    transform: translateX(0%);
    opacity: 1;

  }
`;

export const ClipsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 108rem;
  align-items: center;
  margin-top: 5rem;

  position: relative;

  animation: ${openContainerAnimation} 0.2s ease-in-out;
`;

export const ClipsHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const ClipsTitleContainer = styled.div`
  text-align: center;
`;
export const ClipsIcon = styled.div`
  font-size: 6rem;
  color: #ffffff;
`;

export const ClipsTitle = styled.div`
  margin-top: -2rem;
  font-family: Kanit, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 5rem;
  line-height: 5rem;
`;

export const ClipsMainContent = styled.div`
  width: 100%;
  margin-top: 3.5rem;
  padding: 0 4rem 4rem;

  backdrop-filter: blur(12px);

  border-radius: 17px;
`;
export const ClipsMainContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SearchCard = styled.input`
  width: 30.4rem;
  height: 4.2rem;
  font-family: Kanit, sans-serif;

  background: rgba(67, 67, 67, 0.5);

  border-radius: 7px;
  padding-left: 1.5rem;

  font-style: normal;
  font-weight: 300;
  font-size: 1.8rem;
  line-height: 2.1rem;

  outline: none;

  color: rgba(255, 255, 255, 0.49);
  transition: border-width 0.1s ease-in;

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;

  &::placeholder {
    font-family: "Roboto", sans-serif;
  }

  &:focus {
    border-bottom: 3px solid rgba(144, 124, 255, 0.25);
  }
`;
export const WeekFilter = styled.div`
  display: flex;
  gap: 1rem;
`;
export const Day = styled.div`
  width: 31px;
  height: 28px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(22px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  font-family: Kanit;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;

  transition: all 0.2s ease-in-out;
  &:hover {
    border-radius: 5px;
    background: rgba(144, 124, 255, 0.25);
  }
`;
export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3rem;
  row-gap: 3em;
  margin-top: 3rem;
  max-height: 30rem;
  overflow-y: auto;

  padding-right: 3rem;
`;
export const ClipCard = styled.div`
  width: 100%;
  height: 108px;

  background: rgba(67, 67, 67, 0.2);

  border-radius: 7px;
  padding: 1.5rem;

  color: #ffffff;
  cursor: pointer;
`;

export const ClipsCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ClipDay = styled.div`
  font-family: Kanit;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.7rem;
  user-select: none;
`;

export const ClipCount = styled.div`
  font-family: Kanit;
  font-style: normal;
  font-weight: normal;
  font-size: 1.8rem;
  line-height: 2.7rem;
`;

export const LiveName = styled.div`
  font-family: Kanit;
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 2.7rem;

  font-weight: 5 00;
`;

export const LiveDate = styled.div`
  font-family: Kanit;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2.7rem;

  color: rgba(144, 124, 255, 0.25);
`;
