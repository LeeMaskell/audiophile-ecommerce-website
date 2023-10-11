import React, { useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import {
  NavbarContainer,
  ResponsiveContainer,
  NavIconButton,
  LogoContainer,
  CartContainer,
  CompanyLogo,
} from "./Navbar.styles";
import logo from "../../assets/logo.svg"; // move to an assets folder
import cart from "../../assets/icon-cart.svg"; // move to an assets folder
import hamburger from "../../assets/icon-hamburger.svg"; // move to an assets folder
import { NavLinks } from "../NavLinks/NavLinks";
import { IconButton } from "../IconButton/IconButton";

interface navStateProps {
  openNavbar: boolean;
  setOpenNavbar: Dispatch<SetStateAction<boolean>>;
};

const internalNavigationLinks = [
  { title: "HOME", link: "/" },
  { title: "HEADPHONES", link: "/" },
  { title: "SPEAKERSe", link: "/" },
  { title: "EARPHONES", link: "/" },
];

export const Navbar = ({ openNavbar, setOpenNavbar }: navStateProps) => {
  const [showNavLinks, setShowNavLinks] = useState(true);
  const handleResize = () => {
    if (window.innerWidth < 1280) {
      setShowNavLinks(false);
    } else {
      setShowNavLinks(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <NavbarContainer>
      <ResponsiveContainer>
        <NavIconButton
          src={hamburger}
          onClick={() => setOpenNavbar(!openNavbar)}
        />
        <LogoContainer>
          <CompanyLogo src={logo} />
        </LogoContainer>

        {showNavLinks && <NavLinks />}
        <CartContainer>
          <IconButton link={"/cart"} icon={cart} />
        </CartContainer>
      </ResponsiveContainer>
    </NavbarContainer>
  );
};
