import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import WelcomeView from "./WelcomeView";
import { LayoutWrapper, MainContent } from "../styled";

const Layout = ({  }) => {
  const [currentScreen, setCurrentScreen] = useState("welcome");

  const handleStart = () => {
   
    setCurrentScreen("workout");
  };

  return (
    <LayoutWrapper>
      <Header />
      <MainContent>
         <WelcomeView />
      </MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
