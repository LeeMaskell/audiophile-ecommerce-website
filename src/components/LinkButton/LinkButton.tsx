import React from "react";
import { LinkButtonContainer } from "./LinkButton.styles";

interface ILinkButtonProps {
    text: string;
    link: string;
};

export const LinkButton = ({text, link}: ILinkButtonProps) => {
    return (
        <LinkButtonContainer href={link}>{text}</LinkButtonContainer>
    )
};