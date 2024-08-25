import {
  CardContainer,
  CardImage,
  Badge,
  FavoriteIcon,
  CardInfo,
} from "./styles";

interface CardProps {
  title: string;
  releaseDate: string;
  poster: string;
  genre: string;
}

export function Card({ title, releaseDate, poster, genre }: CardProps) {
  return (
    <CardContainer>
      <CardImage src={poster} alt={title} />
      <Badge>{genre?.[1] || "Gênero não informado"}</Badge>
      <FavoriteIcon>
        <img src="/favorite_accept.svg" alt="Favorite Icon" />
      </FavoriteIcon>
      <CardInfo>
        <h3>{title}</h3>
        <p>{releaseDate}</p>
      </CardInfo>
    </CardContainer>
  );
}
