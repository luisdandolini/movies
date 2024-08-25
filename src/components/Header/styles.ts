import styled from "styled-components";
import { DropdownMenuProps } from "./types";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  height: 4.125rem;
  z-index: 1000;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ContainerFavorite = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    transition: transform 0.3s ease;
  }
`;

export const DropdownMenu = styled.div<DropdownMenuProps>`
  position: absolute;
  top: 5rem;
  right: 1.5rem;
  background-color: ${(props) => props.theme["background-color-menu"]};
  color: ${(props) => props.theme["text-color"]};
  border: 1px solid ${(props) => props.theme["border-color"]};
  border-radius: 8px;
  z-index: 1000;
  padding: 1rem;
  width: 150px;
  opacity: 0;
  transform: translateY(-10px);
  visibility: hidden;
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0s linear 0.3s;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 1rem 0;
      transition: color 0.2s ease-in-out;
    }
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
      transition: opacity 0.3s ease, transform 0.3s ease;
  `}
`;
