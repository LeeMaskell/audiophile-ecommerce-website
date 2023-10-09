import React, { useState } from "react";
import { LayoutContainer } from "./Layout.styles";
import { Navbar } from "../Navbar/Navbar";
import { MobileNavbar } from "../MobileNavbar/MobileNavbar";
import { Footer } from "../Footer/Footer";

export const Layout = () => {
  const [openNavbar, setOpenNavbar] = useState<boolean>(false);
  return (
    <LayoutContainer>
      <Navbar openNavbar={openNavbar} setOpenNavbar={setOpenNavbar} />
      {openNavbar && <MobileNavbar />}
      <h1>page content here</h1>
      <Footer />
    </LayoutContainer>
  );
};
