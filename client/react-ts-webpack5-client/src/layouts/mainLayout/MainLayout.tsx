import React from 'react';
import { Footer, Header } from '@/components';
import styles from './MainLayout.less';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {/* 页面内容 content */}
      <div className={styles.mainLayoutWrapper}>{children}</div>
      <Footer />
    </>
  );
};
