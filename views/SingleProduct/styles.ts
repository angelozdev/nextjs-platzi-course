import { css } from "styled-jsx/css";

const styles = css`
  .container {
    padding: 3rem 0;
  }

  .grid {
    display: grid;
    grid-template-columns: minmax(150px, 300px) minmax(300px, 1fr);
    gap: 2rem;
  }

  @media (max-width: 500px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }

  .main-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.75rem;
  }

  .main-details p,
  .title {
    margin: 0;
  }

  .title {
    font-size: 1.5rem;
  }

  .price {
    color: gray;
  }

  .label {
    padding: 0.5rem 1rem;
    background-color: rgba(0, 0, 0, 0.1);
    width: fit-content;
    border-radius: 0.25rem;
  }

  .form-control {
    display: flex;
    max-width: 400px;
    border-radius: 0.25rem;
    overflow: hidden;
  }

  .form-control button {
    width: 100%;
    max-width: 150px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    border: none;
    background-color: #00a5a5;
    color: white;
  }

  .form-control input {
    width: 100%;
    border: none;
    padding: 0.75rem 1rem;
  }
`;

export default styles;
