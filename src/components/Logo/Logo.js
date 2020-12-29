import React from "react";
import { StyledLogo } from "./Logo.styled";

import LogoBlack from "./../../images/dept_logo.svg";
import LogoWhite from "./../../images/dept_logo_white.svg";

const Logo = ({ open }) => {
  return <StyledLogo alt={`Logo DEPT`} src={open ? LogoWhite : LogoBlack}></StyledLogo>;
};

export default Logo;
