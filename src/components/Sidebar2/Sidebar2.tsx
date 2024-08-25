import styles from "./Sidebar2.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonTheme } from "../ButtonTheme";
import Image from "next/image";

export function Sidebar2() {
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
                  width="16"
                  height="16"
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
                  width="16"
                  height="16"
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
                  width="16"
                  height="16"
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
