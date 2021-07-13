import React from "react";

import {
  LiveCounterContainer,
  LiveCounterCount,
  LiveIndicatorContainer,
  LiveIndicatorPrefix,
  LiveIndicatorSign,
} from "../styles/components/LiveCounter";

const LiveCounter: React.FC = () => {
  return (
    <LiveCounterContainer>
      <LiveCounterCount>00:00:00</LiveCounterCount>
      <LiveIndicatorContainer>
        <LiveIndicatorPrefix>Live is</LiveIndicatorPrefix>
        <LiveIndicatorSign>Offline</LiveIndicatorSign>
      </LiveIndicatorContainer>
    </LiveCounterContainer>
  );
};

export default LiveCounter;
