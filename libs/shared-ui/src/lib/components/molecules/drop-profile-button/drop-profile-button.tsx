import { useState } from 'react';
import style from './style.module.scss';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const DropProfileButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AccountBoxIcon
        className={style.button}
        onClick={handleClick}
        sx={{ fontSize: 30 }}
      />
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          sx={{
            color: 'red',
          }}
          autoFocus={true}
          className={style.menu__item}
          onClick={handleClose}
        >
          Выйти
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropProfileButton;
