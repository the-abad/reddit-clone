import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import useAuth from "../../hooks/useAuth";
import Navbar from "../Navbar";
import AuthModal from "../Modal/Auth";
import SideNavBar from "../SideNavBar";

import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <SideNavBar />
      {children}
    </>
  );
};

export default Layout;

