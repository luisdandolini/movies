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
import Image from "next/image";

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <ContainerLogo>
        <Image
          width={24}
          height={24}
          src="/movie.svg"
          alt="Logo do Pecege Movies"
        />
        <h1>MOVIES</h1>
      </ContainerLogo>
      <Link href="/favorites" passHref>
        <ContainerFavorite>
          <Image
            width={24}
            height={24}
            src="/favorite_accept.svg"
            alt="Logo de Favoritos"
          />
          <p>Favoritos</p>
        </ContainerFavorite>
      </Link>
      <MobileMenuIcon onClick={toggleMenu}>
        <Image
          width={24}
          height={24}
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
