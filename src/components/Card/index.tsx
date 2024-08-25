import { useFavoritesStore } from "@/store/useFavoritesStore";
import { CardContainer, Badge, FavoriteIcon, CardInfo } from "./styles";
import { CardProps } from "./types";
import Image from "next/image";

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
    <CardContainer>
      <Image
        src={poster}
        alt={title}
        width={300}
        height={450}
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      <Badge>{genre?.[1] || "Gênero não informado"}</Badge>
      <FavoriteIcon onClick={toggleFavorite}>
        <Image
          src={isFavorite ? "/favorite_accept.svg" : "/no_favorite.svg"}
          alt="Favorite Icon"
          width={24}
          height={24}
        />
      </FavoriteIcon>
      <CardInfo>
        <h3>{title}</h3>
        <p>{releaseDate}</p>
      </CardInfo>
    </CardContainer>
  );
}
