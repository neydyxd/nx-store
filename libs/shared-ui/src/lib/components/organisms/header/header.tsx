import HeaderButtons from "./header-buttons/header-buttons";
import NavBar from "../../molecules/navbar/navbar";
import style from "./style.module.scss"

const Header = () => {
  return(
    <header className={style.header}>
      <div>лого</div>
      <NavBar />
      <HeaderButtons />
    </header>
  );
}

export default Header;
