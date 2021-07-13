import styled, { keyframes } from "styled-components";

const openContainerAnimation = keyframes`
  0% {
    transform: translateY(2%);
    opacity: 0;
  }

  100% {
    
    transform: translateY(0%);
    opacity: 1;

  }
`;

export const LiveCounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  font-family: Kanit, sans-serif;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  animation: ${openContainerAnimation} 0.2s ease-in-out;
`;

export const LiveCounterCount = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 8.4rem;
  line-height: 8.4rem;
`;

const breatheAnimation = keyframes`
  0% {
    transform: scale(0.9);
  }

  25% {
    
    transform: scale(1);
  }

  60% {
    
    transform: scale(0.9);
  }

  100% {
    
    transform: scale(0.9);
  }
`;

export const LiveIndicatorContainer = styled.div`
  display: flex;
  font-size: 2.1rem;
  line-height: 3.6rem;
  align-items: center;
  justify-content: center;

  animation-name: ${breatheAnimation};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export const LiveIndicatorPrefix = styled.div``;

export const LiveIndicatorSign = styled.div`
  padding-left: 0.5rem;
`;
