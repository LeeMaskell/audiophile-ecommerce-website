import React from "react";
import { MobileNavbarContainer } from "./MobileNavbar.styles";
import { NavLinks } from "../NavLinks/NavLinks";

export const MobileNavbar = () => {
  return (
    <MobileNavbarContainer>
      <NavLinks />
    </MobileNavbarContainer>
  );
};
