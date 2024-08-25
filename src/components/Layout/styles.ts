import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  margin-left: 10vw;
  margin-top: 2rem;
  padding: 1rem;

  @media (max-width: 768px) {
    margin-left: initial;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: initial;
  }
`;
