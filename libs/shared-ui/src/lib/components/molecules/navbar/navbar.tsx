import NavbarItem from "../../atoms/navbar-item/navbar-item";
import style from "./style.module.scss"

const NavBar = () => {
  return(
    <div className={style.navbar}>
      <NavbarItem url="" text="Главная" />
      <NavbarItem url="" text="Новости" />
      <NavbarItem url="" text="О нас" />
    </div>
  );
}

export default NavBar;
