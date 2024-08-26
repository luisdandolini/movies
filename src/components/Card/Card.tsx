import { useFavoritesStore } from "@/store/useFavoritesStore";
import Image from "next/image";
import styles from "./Card.module.css";
import { CardProps } from "./types";

export function Card({ id, title, releaseDate, poster, genre }: CardProps) {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const isFavorite = favorites.includes(id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div className={styles.cardContainer}>
      <Image
        src={poster}
        alt={title}
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        priority
      />
      <span className={styles.badge}>
        {genre?.[1] || "Gênero não informado"}
      </span>
      <span className={styles.favoriteIcon} onClick={toggleFavorite}>
        <Image
          src={isFavorite ? "/favorite_accept.svg" : "/no_favorite.svg"}
          alt={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          width={24}
          height={24}
        />
      </span>
      <div className={styles.cardInfo}>
        <h3>{title}</h3>
        <p>{releaseDate}</p>
      </div>
    </div>
  );
}
