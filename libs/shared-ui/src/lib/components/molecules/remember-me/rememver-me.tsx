import CheckboxAtom  from "../../atoms/checkbox/checkbox"
import SubtitleAtom  from "../../atoms/subtitle/subtitle"
import style from "./style.module.scss"

const RememberMe = () => {
  return(
    <div className={style.remember}>
      <CheckboxAtom />
      <SubtitleAtom text="Запомнить меня"/>
    </div>
  )
}

export default RememberMe;
