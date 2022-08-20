import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        @media screen and (max-width: 600px) {
            font-size: 3vw;    
        }
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Outfit', sans-serif;
        transition: color 200ms ease-in;
        transition: background-color 200ms ease-in;

    }

    .app {
        background-color: ${(props) => props.theme.colors.bgPrimary};
        max-width: 100vw;
    }

    .cardsWrapper {
        display: grid;
        place-items: center;
        width: 100%;
        min-height: calc(100vh - max(3.5rem, 60px));
    }

`;

const DefaultAnchor = styled.a.attrs((props) => ({
  href: props.to ? props.to : "#",
  target: props.target ? props.target : "_self",
  rel: props.rel ? props.rel : "noopener noreferrer",
}))`
  color: inherit;
  text-decoration: none;
  margin: 0 0.5ch;
  position: relative;

  &:hover,
  :focus-within {
    color: ${(props) => props.theme.colors.wordTerciary};
  }
`;

export { DefaultAnchor };
export default GlobalStyle;
