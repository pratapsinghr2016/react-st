import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  ${(props) =>
    props.active &&
    `
    background-color: rgba(255, 255, 255, 0.2);
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 3px;
      background-color: white;
      border-radius: 2px;
    }
  `}
`;

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Module 00" },
    { path: "/module01", label: "Module 01" },
    { path: "/module1", label: "Module 1" },
    { path: "/module2", label: "Module 2" },
    { path: "/module3", label: "Module 3" },
    { path: "/module4", label: "Module 4" },
    { path: "/module5", label: "Module 5" },
  ];

  return (
    <NavbarContainer>
      <NavContent>
        <Logo>State Management</Logo>
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              active={location.pathname === item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;
