import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    } 

    html {
        font-size: 67.5%;
    }

    body {
        min-height: 100vh;
        width: 100%;
        font-family: 'Libre Baskerville', serif;
        font-weight: 400;
        font-size: 1.6rem;
    }

    ul {
        list-style-type: none;
    }

    a {
        font: inherit;
        text-decoration: none;
        cursor: pointer;
    }
`;

export default GlobalStyles;
