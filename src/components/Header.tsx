import React from "react";
import { Link } from "react-router-dom";

import { HeaderContainer, LogoHeader } from "../styles/components/Header";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoHeader>IceStream</LogoHeader>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
