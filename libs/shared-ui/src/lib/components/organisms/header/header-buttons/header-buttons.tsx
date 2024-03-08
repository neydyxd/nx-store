import style from "./style.module.scss"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsIcon from '@mui/icons-material/Notifications';

const HeaderButtons = () => {
  return (
    <div className={style.header__buttons}>
      <NotificationsIcon className={style.header__button} sx={{ fontSize: 30 }}/>
      <AccountBoxIcon className={style.header__button} sx={{ fontSize: 30 }}/>
    </div>
  );
}

export default HeaderButtons;
