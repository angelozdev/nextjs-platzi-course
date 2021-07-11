import { PropsWithChildren } from "react";
import classnames from "classnames";

// styles
import styles from "./styles";

interface Props {
  withPadding?: boolean;
}

function Wrapper({ children, withPadding = true }: PropsWithChildren<Props>) {
  return (
    <div className={classnames("container", { withPadding })}>
      {children}
      <style jsx>{styles}</style>
    </div>
  );
}

export default Wrapper;
