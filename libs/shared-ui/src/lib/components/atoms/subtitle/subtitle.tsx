import style from "./style.module.scss"

type SubtitleProps = {
  text: string;
}

const SubtitleAtom = ({text} : SubtitleProps) => {
  return <p className={style.subtitle}>{text}</p>
}

export default SubtitleAtom;
