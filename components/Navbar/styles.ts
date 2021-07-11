import { css } from "styled-jsx/css";

const styles = css`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
  }

  li {
    flex-grow: 1;
    text-align: center;
  }

  li.active {
    background-color: #efefefef;
  }

  li a {
    display: inline-block;
    padding: 1rem 2rem;
    width: 100%;
  }
`;

export default styles;
