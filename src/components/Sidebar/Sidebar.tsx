import styles from "./Sidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonTheme } from "../ButtonTheme/ButtonTheme";
import Image from "next/image";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebarContainer}>
      <h2 className="text-xl font-bold">Menu</h2>
      <nav className="mt-5">
        <ul className="flex flex-col gap-5">
          <li>
            <Link href="/" passHref>
              <div
                className={`${styles.styledLink} ${
                  pathname === "/"
                    ? styles.styledLinkActive
                    : styles.styledLinkInactive
                }`}
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
              </div>
            </Link>
          </li>
          <li>
            <Link href="/movies" passHref>
              <div
                className={`${styles.styledLink} ${
                  pathname === "/movies"
                    ? styles.styledLinkActive
                    : styles.styledLinkInactive
                }`}
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
              </div>
            </Link>
          </li>
          <li>
            <Link href="/series" passHref>
              <div
                className={`${styles.styledLink} ${
                  pathname === "/series"
                    ? styles.styledLinkActive
                    : styles.styledLinkInactive
                }`}
                aria-current={pathname === "/series" ? "page" : undefined}
              >
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "16px", height: "16px" }}
                  src={
                    pathname === "/series" ? "/in_series.svg" : "/series.svg"
                  }
                  alt="Series"
                />
                <span>Séries</span>
              </div>
            </Link>
          </li>
          <li className={styles.containerButtonTheme}>
            <span>Tema</span>
            <ButtonTheme />
          </li>
        </ul>
      </nav>
    </aside>
  );
}
