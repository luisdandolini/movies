import { useState } from "react";
import styles from "./Header2.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonTheme } from "../ButtonTheme";
import Image from "next/image";

export function Header2() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.container}>
        <div className={styles.containerLogo}>
          <Image
            width={16}
            height={16}
            src="/movie.svg"
            alt="Logo do Pecege Movies"
          />
          <h1 className="text-lg font-bold">MOVIES</h1>
        </div>
        <Link href="/favorites" passHref>
          <div className={styles.containerFavorite}>
            <Image
              width={16}
              height={16}
              src="/favorite_accept.svg"
              alt="Favoritos"
            />
            <p>Favoritos</p>
          </div>
        </Link>
      </div>
      <button
        className={styles.mobileMenuIcon}
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="menu"
      >
        <Image
          width={16}
          height={16}
          src={isMenuOpen ? "/close_menu.svg" : "/menu_mobile.svg"}
          alt="Menu"
        />
      </button>

      <div
        id="menu"
        className={`${styles.dropdownMenu} ${
          isMenuOpen ? styles.dropdownMenuOpen : ""
        }`}
      >
        <ul className={styles.menuList}>
          <li className="list">
            <Link href="/" passHref>
              <span
                onClick={toggleMenu}
                className={pathname === "/" ? styles.active : ""}
                aria-current={pathname === "/" ? "page" : undefined}
              >
                Home
              </span>
            </Link>
          </li>
          <li className="list">
            <Link href="/movies" passHref>
              <span
                onClick={toggleMenu}
                className={pathname === "/movies" ? styles.active : ""}
                aria-current={pathname === "/movies" ? "page" : undefined}
              >
                Filmes
              </span>
            </Link>
          </li>
          <li className="list">
            <Link href="/series" passHref>
              <span
                onClick={toggleMenu}
                className={pathname === "/series" ? styles.active : ""}
                aria-current={pathname === "/series" ? "page" : undefined}
              >
                Séries
              </span>
            </Link>
          </li>
          <li className="list">
            <Link href="/favorites" passHref>
              <span
                onClick={toggleMenu}
                className={pathname === "/favorites" ? styles.active : ""}
                aria-current={pathname === "/favorites" ? "page" : undefined}
              >
                Favoritos
              </span>
            </Link>
          </li>
          <ButtonTheme />
        </ul>
      </div>
    </header>
  );
}
