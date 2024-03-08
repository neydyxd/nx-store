import style from "./style.module.scss"

type TitleProps = {
  text: string;
}

const TitleAtom = ({text} : TitleProps) => {
  return(
    <h2 className={style.title}>{text}</h2>
  )
}

export default TitleAtom;
