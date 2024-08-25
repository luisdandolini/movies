import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 300px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Badge = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: ${(props) => props.theme["color-link-nav-access"]};
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
`;

export const FavoriteIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const CardInfo = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;

  h2 {
    margin: 0;
    font-size: 18px;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: ${(props) => props.theme["color-year-card"]};
  }
`;
