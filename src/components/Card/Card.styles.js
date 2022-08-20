import styled, { keyframes } from "styled-components";
import { DefaultAnchor } from "../../styles/global.styles";

const CCEaseIn = keyframes`
  
  0%{
    transform: translateX(-3rem)
  }

  100% {
    transform: translateX(0)

  }
 `;

export const CardBody = styled.article`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 25rem;
  height: 40rem;
  padding: 1.5rem;
  z-index: 1;
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.colors.bgSecundary};
  animation: ${CCEaseIn} 500ms linear;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const CardImage = styled(DefaultAnchor)`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 100%;
  border-radius: 1rem;
  overflow: hidden;

  & img:first-child {
    transition: transform 700ms ease;
    width: 100%;
  }

  & img:nth-child(2),
  :after {
    transition: opacity 500ms ease;
  }

  & img:nth-child(2) {
    width: 25%;
    opacity: 0;
    z-index: 10;
    position: absolute;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.wordTerciary};
    opacity: 0;
  }

  &:hover,
  :focus-within {
    & img:nth-child(2) {
      opacity: 1;
    }

    &:after {
      opacity: 0.3;
    }

    & img:nth-child(1) {
      transform: scale(1.5);
    }
  }
`;

export const CardName = styled.h3`
  color: ${(props) => props.theme.colors.wordPrimary};
  font-size: 1.5rem;
  font-weight: 500;
  & span {
    margin-left: 0.2ch;
    &:before {
      content: "#";
    }
  }
`;

export const CardDescription = styled.p`
  color: ${(props) => props.theme.colors.wordSecundary};
  font-weight: 300;
  font-size: 1.15rem;
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.wordSecundary};
  font-size: 1.2rem;

  & span {
    display: flex;
    align-items: center;
    gap: 0.7ch;

    &:first-child {
      color: ${(props) => props.theme.colors.wordTerciary};

      & > img {
        width: 0.9rem;
      }
    }

    &:last-child > img {
      width: 1.5rem;
      fill: ${(props) => props.theme.colors.wordSecundary};
    }
  }
`;

export const OwnerInfo = styled.figure`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.wordSecundary};
  position: relative;
  margin-top: 2rem;

  & img {
    border-radius: 50vw;
    border: 0.1rem solid ${(props) => props.theme.colors.wordPrimary};
    width: 2.7rem;
    margin-right: 1.5rem;
  }

  & a {
    color: ${(props) => props.theme.colors.wordPrimary};
  }

  &:before {
    content: "";
    position: absolute;
    top: -1.5rem;
    width: 100%;
    height: 0.02rem;
    background-color: ${(props) => props.theme.colors.bgTerciary};
  }
`;
