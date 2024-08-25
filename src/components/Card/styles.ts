import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  width: 300px;
  border-radius: 15px;
  overflow: hidden;
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
