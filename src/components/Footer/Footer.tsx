import React from "react";
import {
  CompanyLogo,
  FooterContainer,
  ResponsiveContainer,
  LinkFlexContainer,
  SocialMediaLinkContainer,
  TextFlexContainer,
  FooterText,
  CopyrightText,
} from "./Footer.styles";
import logo from "../../logo.svg"; // move to an assets folder
import { NavLinks } from "../NavLinks/NavLinks";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

export const Footer = () => {
  return (
    <FooterContainer>
      <ResponsiveContainer>
        
        <LinkFlexContainer>
          <CompanyLogo src={logo} />
          <NavLinks />
        </LinkFlexContainer>

        <TextFlexContainer>
          <FooterText>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </FooterText>
          <SocialMediaLinkContainer>
            <AiFillFacebook size="1.5rem" color="white" />
            <AiOutlineTwitter size="1.5rem" color="white" />
            <AiOutlineInstagram size="1.5rem" color="white" />
          </SocialMediaLinkContainer>
          <CopyrightText>Copyright 2021. All Rights Reserved</CopyrightText>
        </TextFlexContainer>

      </ResponsiveContainer>
    </FooterContainer>
  );
};
