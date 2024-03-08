import { ReactNode } from 'react';
import Header from '../../organisms/header/header';
import MainContent from './main-content/main-content';
import style from "./style.module.scss"

type PageProps = {
  mainContent: ReactNode;
};

const Main = ({ mainContent }: PageProps) => {
  return (
    <div className={style.main}>
      <Header />
      <MainContent>{mainContent}</MainContent>
    </div>
  );
};

export default Main;
