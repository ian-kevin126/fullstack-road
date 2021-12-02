import React from 'react';
import styles from './UserLayout.less';
import { Layout, Menu, Dropdown, Button } from 'antd';

const { Header, Content } = Layout;

export const UserLayout: React.FC = ({ children }) => {
  const menu = (
    <Menu>
      <Menu.Item>中文</Menu.Item>
      <Menu.Item>English</Menu.Item>
    </Menu>
  );

  return (
    <Layout className={styles.userLayoutWrapper}>
      <Header className={styles.header}>
        <div className={styles.lang}>
          <Dropdown overlay={menu}>
            <Button>选择语言</Button>
          </Dropdown>
        </div>
      </Header>
      <Content className={styles.contentWrapper}>
        <div className={styles.content}>{children}</div>
      </Content>
      {/* <Footer className={styles.footer}>ian-kevin的后台管理系统</Footer> */}
    </Layout>
  );
};
