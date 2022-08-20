import { createGlobalStyle } from "styled-components";

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
    }

    
    .app {
        background-color: ${(props) => props.theme.colors.bgBody};
        max-width: 100vw;
        min-height: 100vh;
        display: grid;
        place-items: center;
    }

`;

export default GlobalStyle;
