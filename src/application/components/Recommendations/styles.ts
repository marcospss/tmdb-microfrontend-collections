import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #000;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 2rem;
  background-color: #fff;
  border-radius: 1rem;
`;

export const GridList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1rem;
  @media screen and (min-width: 600px) and (max-width: 801px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }
  @media screen and (min-width: 801px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
  }
`;
