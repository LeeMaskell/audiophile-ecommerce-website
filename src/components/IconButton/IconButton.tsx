import React from "react";
import { IconButtonContainer } from "./IconButton.styles";

interface IIconButtonprops {
  link: string;
  icon: string;
}

export const IconButton = ({ link, icon }: IIconButtonprops) => {
  return (
    <IconButtonContainer href={link}>
      <img src={icon} alt="cart icon" />
    </IconButtonContainer>
  );
};
