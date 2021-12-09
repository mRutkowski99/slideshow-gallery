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

    h2 {
        font-size: 2.5rem;
        font-weight: 700;
    }

    h3 {
        font-size: 1.4rem;
        font-weight: 400;
    }

    h4 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: .5rem;
    }

    h5 {
        font-size: 1.6rem;
        color: #999;
        font-weight: 400;
    }

    p {
        color: #555;
        line-height: 1.5;
        margin-bottom: 3rem;
        max-width: 70ch;
    }
`;

export default GlobalStyles;
