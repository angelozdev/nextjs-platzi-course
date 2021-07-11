import { css } from "styled-jsx/css";

const styles = css.global`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  main {
    background-color: #fbfbfb;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  figure {
    margin: 0;
  }
`;

export default styles;
