import React from "react";
import { NavLinksContainer } from "./NavLinks.styles";
import { LinkButton } from "../LinkButton/LinkButton";

// type NavlinksProps = {
//   title: string;
//   internalLink: string;
// }[];

// move out of this component to remain atomic
const internalNavigationLinks = [
    { title: "HOME", link: "/"},
    { title: "HEADPHONES", link: "/"},
    { title: "SPEAKERS", link: "/"},
    { title: "EARPHONES", link: "/"}
  ];

// pass in internalNavigationLinks as a prop
export const NavLinks = () => {
  return (
    <NavLinksContainer>
      {internalNavigationLinks.map((link) => (
        <LinkButton text={link.title} link={link.link} />
      ))}
    </NavLinksContainer>
  );
};
