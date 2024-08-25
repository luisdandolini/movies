import styled from "styled-components";

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
