import {
  CardContainer,
  CardImage,
  Badge,
  FavoriteIcon,
  CardInfo,
} from "./styles";

export function Card() {
  return (
    <CardContainer>
      <CardImage src="/example.png" alt="John Wick 4" />
      <Badge>Ação</Badge>
      <FavoriteIcon>
        <img src="/favorite_accept.svg" alt="" />
      </FavoriteIcon>
      <CardInfo>
        <h3>John Wick 4</h3>
        <p>2023</p>
      </CardInfo>
    </CardContainer>
  );
}
