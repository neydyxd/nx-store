import { useEffect, useState } from 'react';
import InputAtom from '../../atoms/input/input';
import ButtonsAuth from '../../molecules/buttons-auth/buttons-auth';
import style from './style.module.scss';

const AuthForm = () => {
  const [userData, setUserData] = useState({ login: '', password: '' });

  const hangleLoginChange = (arg: string) => {
    setUserData((prevUserData) => ({ ...prevUserData, login: arg }));
  };

  const hanglePasswordChange = (arg: string) => {
    setUserData((prevUserData) => ({ ...prevUserData, password: arg }));
  };
  const handleSubmit = () => {
    console.log(userData)
  }

  return (
    <form className={style.form}>
      <InputAtom
        type='text'
        value={userData.login}
        onChange={hangleLoginChange}
        text="Логин"
      />
      <InputAtom
        type='password'
        value={userData.password}
        onChange={hanglePasswordChange}
        text="Пароль"
      />
      <ButtonsAuth handleClick={handleSubmit} />
    </form>
  );
};

export default AuthForm;
