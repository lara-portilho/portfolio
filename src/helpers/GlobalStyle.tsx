import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    /* fonts */
    --primary-font: 'Poppins';
    --secondary-font: 'Fragment Mono';

    /* sidebar */
    --sidebar-width: 12rem;
    --sidebar-height-responsive: 6rem;

    /* color */
    --white: #dadada;
    --blue: #168ced;
    --gray: #2f2f2f;
    --dark-gray: #292929;

    /* paddings */
    --global-padding: 2rem;
    --global-padding-2: 4rem;

    /* border-radius */
    --radius-input: 5px;
    --radius-page: 10px;
    --radius-button: 3px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--gray);
    color: var(--white);
    font-family: var(--primary-font), sans-serif;
  }
`;
