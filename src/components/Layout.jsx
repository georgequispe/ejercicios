import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Welcome from "./Welcome";
import Workout from "./Workout";
import { LayoutWrapper, MainContent } from "../styled";

const Layout = () => {
  const [currentScreen, setCurrentScreen] = useState("welcome");

  const handleStart = () => setCurrentScreen("workout");

  return (
    <LayoutWrapper>
      <Header />
      <MainContent>
        {currentScreen === "welcome" && <Welcome onStart={handleStart} />}
        {currentScreen === "workout" && <Workout />}
      </MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
