import React, { memo } from "react";
import { Link } from "react-router-dom";
import {
  FiClock as ClockIcon,
  FiScissors as ScissorsIcon,
} from "react-icons/fi";

import {
  ToolSideBard,
  ToolItemsContainer,
  ToolItem,
  TollItemIcon,
  ToolItemName,
} from "../styles/components/ToolBarSide";

function ToolSideBar() {
  return (
    <ToolSideBard>
      <ToolItemsContainer>
        <ToolItem>
          <Link to="/notifier">
            <TollItemIcon>
              <ClockIcon />
            </TollItemIcon>
            <ToolItemName>Alarms</ToolItemName>
          </Link>
        </ToolItem>
        <ToolItem>
          <Link to="/clips">
            <TollItemIcon>
              <ScissorsIcon />
            </TollItemIcon>
            <ToolItemName>Clips</ToolItemName>
          </Link>
        </ToolItem>
      </ToolItemsContainer>
    </ToolSideBard>
  );
}

export default memo(ToolSideBar);
