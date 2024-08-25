import { SidebarContainer, NavLinks, Links, Link } from "./styles";

export function Sidebar() {
  return (
    <SidebarContainer>
      <h2>Menu</h2>
      <NavLinks>
        <Links>
          <Link>
            <img src="/home.svg" alt="" /> Home
          </Link>
          <Link>
            <img src="/filme.svg" alt="" /> Filmes
          </Link>
          <Link>
            <img src="/series.svg " alt="" /> Series
          </Link>
        </Links>
      </NavLinks>
    </SidebarContainer>
  );
}
