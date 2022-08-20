import styled from "styled-components";

const CardBody = styled.article`
  width: 25rem;
  height: 40rem;
  background-color: ${(props) => props.theme.colors.bgCard};
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 1.5rem;
  border-radius: 1.5rem;

  .card__preview {
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
      z-index: 1;
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
        opacity: 0.2;
      }

      & img:nth-child(1) {
        transform: scale(1.5);
      }
    }
  }

  .card__name {
    color: ${(props) => props.theme.colors.wordPrimary};
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: none;
    transition: color 200ms ease-in;

    &:hover,
    :focus-within {
      color: ${(props) => props.theme.colors.wordTerciary};
    }

    & span:before {
      content: "#";
    }
  }

  .card__description {
    color: ${(props) => props.theme.colors.wordSecundary};
    font-weight: 300;
    font-size: 1.15rem;
  }

  .card__owner-info {
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

    & figcaption a {
      margin-left: 0.5ch;
    }
    & a {
      text-decoration: none;
      color: ${(props) => props.theme.colors.wordPrimary};
      transition: color 200ms ease-in;

      &:hover,
      :focus-within {
        color: ${(props) => props.theme.colors.wordTerciary};
      }
    }

    &:before {
      content: "";
      position: absolute;
      top: -1.5rem;
      width: 100%;
      height: 0.02rem;
      background-color: ${(props) => props.theme.colors.bgLine};
    }
  }

  .card__details {
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
      }

      &:last-child:hover > img {
        transform: rotate(360deg);
      }
    }

    & .details__currency img {
      width: 0.9rem;
    }

    & .details__period img {
      width: 1.4rem;
    }
  }
`;

export { CardBody };
