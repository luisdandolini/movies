import { useState } from "react";
import {
  HeaderContainer,
  ContainerLogo,
  ContainerFavorite,
  MobileMenuIcon,
  DropdownMenu,
} from "./styles";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonTheme } from "../ButtonTheme";

export function Header() {
  const pathname = usePathname();
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
      <Link href="/favorites" passHref>
        <ContainerFavorite>
          <img src="/favorite_accept.svg" alt="Logo de Favoritos" />
          <p>Favoritos</p>
        </ContainerFavorite>
      </Link>
      <MobileMenuIcon onClick={toggleMenu}>
        <img
          src={isMenuOpen ? "/close_menu.svg" : "/menu_mobile.svg"}
          alt="Menu"
        />
      </MobileMenuIcon>

      <DropdownMenu $isOpen={isMenuOpen}>
        <ul>
          <li>
            <Link href="/" passHref>
              <span
                onClick={toggleMenu}
                className={pathname === "/" ? "active" : ""}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/movies" passHref>
              <span
                onClick={toggleMenu}
                className={pathname === "/movies" ? "active" : ""}
              >
                Filmes
              </span>
            </Link>
          </li>
          <li>
            <Link href="/series" passHref>
              <span
                onClick={toggleMenu}
                className={pathname === "/series" ? "active" : ""}
              >
                Séries
              </span>
            </Link>
          </li>
          <li>
            <Link href="/favorites" passHref>
              <span
                onClick={toggleMenu}
                className={pathname === "/favorites" ? "active" : ""}
              >
                Favoritos
              </span>
            </Link>
          </li>
          <ButtonTheme />
        </ul>
      </DropdownMenu>
    </HeaderContainer>
  );
}
