import styled from "styled-components";
import Navbar from "./Navbar";

const LayoutContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const MainContent = styled.main`
  min-height: calc(100vh - 80px);
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
};

export default Layout;
