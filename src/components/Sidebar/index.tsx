import { SidebarContainer, NavLinks, Links, StyledLink } from "./styles";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <SidebarContainer>
      <h2>Menu</h2>
      <NavLinks>
        <Links>
          <Link href="/" passHref>
            <StyledLink isActive={pathname === "/"}>
              <img
                src={pathname === "/" ? "/in_home.svg" : "/home.svg"}
                alt="Home"
              />
              <span>Home</span>
            </StyledLink>
          </Link>
          <Link href="/movies" passHref>
            <StyledLink isActive={pathname === "/movies"}>
              <img
                src={pathname === "/movies" ? "/in_filmes.svg" : "/filme.svg"}
                alt="Filmes"
              />
              <span>Filmes</span>
            </StyledLink>
          </Link>
          <Link href="/series" passHref>
            <StyledLink isActive={pathname === "/series"}>
              <img
                src={pathname === "/series" ? "/in_series.svg" : "/series.svg"}
                alt="Series"
              />
              <span>Series</span>
            </StyledLink>
          </Link>
        </Links>
      </NavLinks>
    </SidebarContainer>
  );
}
