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
            <StyledLink isActive={pathname === "/"}>
              <Image
                width={16}
                height={16}
                src={pathname === "/" ? "/in_home.svg" : "/home.svg"}
                alt="Home"
              />
              <span>Home</span>
            </StyledLink>
          </Link>
          <Link href="/movies" passHref>
            <StyledLink isActive={pathname === "/movies"}>
              <Image
                width={16}
                height={16}
                src={pathname === "/movies" ? "/in_filmes.svg" : "/filme.svg"}
                alt="Filmes"
              />
              <span>Filmes</span>
            </StyledLink>
          </Link>
          <Link href="/series" passHref>
            <StyledLink isActive={pathname === "/series"}>
              <Image
                width={16}
                height={16}
                src={pathname === "/series" ? "/in_series.svg" : "/series.svg"}
                alt="Series"
              />
              <span>Series</span>
            </StyledLink>
          </Link>
          <ContainerButtonTheme>
            <span>Tema</span>
            <ButtonTheme />
          </ContainerButtonTheme>
        </Links>
      </NavLinks>
    </SidebarContainer>
  );
}
