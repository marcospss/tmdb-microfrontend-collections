/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const BackdropList = styled.section`
  padding: 14px;
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

export const Card = styled.article`
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
`;

export const WrapperButtonFavorite = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9;
  font-size: 0.8rem;
  color: #fff;
  button {
    padding: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    box-shadow: 0px 1px 3px 1px rgb(0 0 0 / 30%);
    text-align: center;
  }
`;

export const Header = styled.div`
  position: relative;
  cursor: pointer;
  min-height: 183px;
  max-height: 183px;
  overflow: hidden;
`;

export const Figure = styled.figure`
  padding: 0;
  margin: 0;
`;

export const Image = styled.img`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Title = styled.h1`
  width: 100%;
  position: absolute;
  bottom: 2px;
  left: 0;
  margin: 0;
  background-color: #ffffff96;
  padding: 0.5rem;
  font-size: 1.5rem;
  color: #000;
  font-weight: normal;
  box-shadow: 0px 0px 4px 2px rgba(158, 158, 158, 0.5);
  overflow: hidden;
`;

export const Overview = styled.p`
  padding: 1rem;
  line-height: 1.2rem;
  min-height: 128px;
  max-height: 128px;
  overflow: hidden;
  cursor: pointer;
`;

export const ButtonsActions = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  color: #fff;
  button {
    width: 100%;
    padding: 0.8rem;
    text-align: center;
    font-size: 0.8rem;
    text-transform: uppercase;
    &.learn-more {
      background-color: #55585f;
    }
  }
`;

export const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
`;

export const Button = styled.button`
  margin: 0 10px;
  background: transparent;
  border: 3px solid #000;
  border-radius: 2rem;
  padding: 0.5rem 2rem;
  color: #000;
  font-size: 1em;
  outline: none;
  cursor: pointer;
  &:hover {
    color: #fff;
    border-color: #fff;
    background: #000;
  }
  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;

export const TotalPages = styled.div`
  font-weight: bold;
  width: 100%;
  max-width: 150px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  padding: 0.5rem 2rem;
  background-color: #ccc;
`;
