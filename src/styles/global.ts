import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;

    background-color: ${(props) => props.theme["background-color"]};
    color: ${(props) => props.theme["text-color"]};
    font-family: 'Inter', sans-serif;
  }

  body, input, textarea, button {
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ol, ul {
	list-style: none;
}

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`;

export default GlobalStyles;
