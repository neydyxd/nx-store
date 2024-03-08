import { ReactNode } from "react";
import style from "./style.module.scss"

type PageProps = {
  mainContent: ReactNode;
}

const PageAuth = ({mainContent} : PageProps) => {
  return (
    <div className={style.container}>
      {mainContent}
    </div>
  );
}

export default PageAuth;
