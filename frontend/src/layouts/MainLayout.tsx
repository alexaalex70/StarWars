import React, { Fragment } from 'react';
import { Header } from '../components';

interface IMainLayout {
  children?: React.ReactNode;
}

const MainLayout: React.FC<{}> = ({ children }: IMainLayout) => {
  return (
    <Fragment>
      <Header />
      <div style={{ marginTop: '24px' }}>
        {children}
      </div>
    </Fragment>
  )
}

export default MainLayout;