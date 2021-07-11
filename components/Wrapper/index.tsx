import { PropsWithChildren } from "react";

// styles
import styles from "./styles";

function Wrapper({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      {children}
      <style jsx>{styles}</style>
    </div>
  );
}

export default Wrapper;
