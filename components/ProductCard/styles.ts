import { css } from "styled-jsx/css";

const styles = css`
  .container {
    cursor: pointer;
    transition: 300ms all ease;
    box-shadow: 0.25rem 0.25rem 1rem -0.125rem rgba(0, 0, 0, 0.05);
    background-color: white;
    border-radius: 0.25rem;
    overflow: hidden;
  }

  .container:hover {
    transform: translateY(-0.125rem);
    box-shadow: 0.25rem 0.25rem 1rem -0.125rem rgba(0, 0, 0, 0.1);
  }

  .details {
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .details p {
    margin: 0;
  }

  .details .price {
    color: gray;
  }
`;

export default styles;
