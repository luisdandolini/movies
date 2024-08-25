import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 20vw;
  padding: 0rem 1.5rem;
  margin-top: 5.125rem;
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
