import { css } from "styled-jsx/css";

const styles = css`
  header {
    box-shadow: 0px 0.1rem 0.5rem -0.25rem rgba(0, 0, 0, 0.3);
  }

  .content {
    display: flex;
    justify-content: space-between;
  }

  .item {
    display: flex;
    padding: 0.25rem 1rem;
    align-items: center;
    transition: ease 300ms background;
  }

  .item:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .item span {
    font-size: 1rem;
    font-weight: 500;
  }
`;

export default styles;
