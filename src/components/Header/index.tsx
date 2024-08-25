import { useState } from "react";
import {
  HeaderContainer,
  ContainerLogo,
  ContainerFavorite,
  MobileMenuIcon,
  DropdownMenu,
} from "./styles";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <ContainerLogo>
        <img src="/movie.svg" alt="Logo do Pecege Movies" />
        <h1>MOVIES</h1>
      </ContainerLogo>
      <ContainerFavorite>
        <img src="/favorite_accept.svg" alt="Logo de Favoritos" />
        <p>Favoritos</p>
      </ContainerFavorite>
      <MobileMenuIcon onClick={toggleMenu}>
        <img
          src={isMenuOpen ? "/close_menu.svg" : "/menu_mobile.svg"}
          alt="Menu"
        />
      </MobileMenuIcon>

      <DropdownMenu $isOpen={isMenuOpen}>
        <ul>
          <li>home</li>
          <li>filmes</li>
          <li>series</li>
          <li>Favoritos</li>
        </ul>
      </DropdownMenu>
    </HeaderContainer>
  );
}
