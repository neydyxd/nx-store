import ButtonAtom from "../../atoms/button/button";
import RememberMe from "../remember-me/rememver-me";
import style from "./style.module.scss"

type ButtonsAuthProps = {
  handleClick: () => void;
}

const ButtonsAuth = ({handleClick} : ButtonsAuthProps) => {
  return(
    <div className={style.buttons}>
      <ButtonAtom handleClick={handleClick} buttonText="Войти"/>
      <RememberMe />
    </div>
  );
}

export default ButtonsAuth;
