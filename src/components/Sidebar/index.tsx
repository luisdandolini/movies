import {
  SidebarContainer,
  NavLinks,
  Links,
  StyledLink,
  ContainerButtonTheme,
} from "./styles";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonTheme } from "../ButtonTheme";
import Image from "next/image";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <SidebarContainer>
      <h2>Menu</h2>
      <NavLinks>
        <Links>
          <Link href="/" passHref>
            <StyledLink
              $isActive={pathname === "/"}
              aria-current={pathname === "/" ? "page" : undefined}
            >
              <Image
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "16px", height: "16px" }}
                src={pathname === "/" ? "/in_home.svg" : "/home.svg"}
                alt="Home"
              />
              <span>Home</span>
            </StyledLink>
          </Link>
          <Link href="/movies" passHref>
            <StyledLink
              $isActive={pathname === "/movies"}
              aria-current={pathname === "/movies" ? "page" : undefined}
            >
              <Image
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "16px", height: "16px" }}
                src={pathname === "/movies" ? "/in_filmes.svg" : "/filme.svg"}
                alt="Filmes"
              />
              <span>Filmes</span>
            </StyledLink>
          </Link>
          <Link href="/series" passHref>
            <StyledLink
              $isActive={pathname === "/series"}
              aria-current={pathname === "/series" ? "page" : undefined}
            >
              <Image
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "16px", height: "16px" }}
                src={pathname === "/series" ? "/in_series.svg" : "/series.svg"}
                alt="Series"
              />
              <span>Séries</span>
            </StyledLink>
          </Link>
          <ContainerButtonTheme>
            <li>
              <span>Tema</span>
              <ButtonTheme />
            </li>
          </ContainerButtonTheme>
        </Links>
      </NavLinks>
    </SidebarContainer>
  );
}
