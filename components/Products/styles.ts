import { css } from "styled-jsx/css";

const styles = css`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
`;

export default styles;
