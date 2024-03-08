import { ReactNode } from "react";
import style from "./style.module.scss"

type MainContentProps = {
  children: ReactNode
}

const MainContent = ({children} : MainContentProps) => {
  return(
    <div className={style.main__content}>
      {children}
    </div>
  )
}

export default MainContent;
