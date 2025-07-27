import Footer from "./Footer";
import Header from "./Header";
import { LayoutWrapper, MainContent } from "../styled";
const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
