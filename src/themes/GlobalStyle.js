import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;

        @media (max-width: 575.98px) {
            font-size: 31.25%;
        }

        @media (min-width: 576px) and (max-width: 767.98px) {
            font-size: 39.0625%;
        }

        @media (min-width: 768px) and (max-width: 991.98px) {
            font-size: 46.875%;
        }

        @media (min-width: 992px) and (max-width: 1199.98px) {
            font-size: 54.6875%;
        }

        @media (min-width: 1200px) and(max-width: 2047.98px) {
            font-size: 62.5%;
        }

        @media (min-width: 2048px) {
            font-size: 100%;
        }
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.6rem;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyle;
