import styled from "styled-components";
import { StyledLinkProps } from "./types";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 8.125rem;
  left: 0;
  width: 20vw;
  height: calc(100vh - 5.125rem);
  padding: 0rem 1.5rem;
  background-color: ${(props) => props.theme["sidebar-background-color"]};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.nav`
  margin-top: 1.25rem;
`;

export const Links = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
`;

export const Link = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["color-link-nav"]};
  cursor: pointer;
`;

export const StyledLink = styled.div<StyledLinkProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) =>
    props.$isActive
      ? props.theme["color-link-nav-access"]
      : props.theme["color-link-nav"]};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme["hover-link-color"]};
  }
`;

export const ContainerButtonTheme = styled.div`
  color: ${(props) => props.theme["color-link-nav"]};
`;
