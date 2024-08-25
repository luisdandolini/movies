import { useFavoritesStore } from "@/store/useFavoritesStore";
import {
  CardContainer,
  CardImage,
  Badge,
  FavoriteIcon,
  CardInfo,
} from "./styles";
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
    <CardContainer>
      <CardImage src={poster} alt={title} />
      <Badge>{genre?.[1] || "Gênero não informado"}</Badge>
      <FavoriteIcon onClick={toggleFavorite}>
        <img
          src={isFavorite ? "/favorite_accept.svg" : "/no_favorite.svg"}
          alt="Favorite Icon"
        />
      </FavoriteIcon>
      <CardInfo>
        <h3>{title}</h3>
        <p>{releaseDate}</p>
      </CardInfo>
    </CardContainer>
  );
}
