import style from "./style.module.scss"
import NotificationsIcon from '@mui/icons-material/Notifications';
import DropProfileButton from "../../../molecules/drop-profile-button/drop-profile-button";

const HeaderButtons = () => {
  return (
    <div className={style.header__buttons}>
      <NotificationsIcon className={style.header__button} sx={{ fontSize: 30 }}/>
      <DropProfileButton />
    </div>
  );
}

export default HeaderButtons;
