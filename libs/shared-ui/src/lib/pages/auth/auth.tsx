import AuthForm from "../../components/organisms/auth-form/auth-form";
import TitleAtom from "../../components/atoms/title/title";
import style from "./style.module.scss"
import PageAuth from "../../components/templates/page-auth/page-auth";
import BaseLogo from "../../components/atoms/base-logo/base-logo";
const Auth = () => {
  const mainContent = (
    <div className={style.main}>
      <TitleAtom text="Авторизация" />
      <AuthForm />
    </div>
  );

  return <PageAuth mainContent={mainContent}/>
}

export default Auth;
