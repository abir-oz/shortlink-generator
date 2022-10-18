import { createGlobalStyle } from 'styled-components';

// colors
const primary = {
  cyan: 'hsl(180, 66%, 49%)',
  darkViolet: 'hsl(257, 27%, 26%)',
};

const secondary = {
  red: 'hsl(0, 87%, 67%)',
};

const neutral = {
  white: 'hsl(0, 0%, 100%)',
  grayBg: 'hsl(230, 25%, 95%)',
  gray: 'hsl(0, 0%, 75%)',
  grayishViolet: 'hsl(257, 7%, 63%)',
  veryDarkBlue: 'hsl(255, 11%, 22%)',
  veryDarkViolet: 'hsl(260, 8%, 14%)',
};

export const colors = {
  primary,
  secondary,
  neutral,
};

// Typography
export const fontSize = '18px';

// Global Style
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-size: ${fontSize};
        width: 100%;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }
    
    button {
        cursor: pointer;
    }
`;
