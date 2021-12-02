import React from 'react';
import { Layout, Typography } from 'antd';

export const Header: React.FC = () => {
  return (
    <Layout.Header>
      <Typography.Title level={3} style={{ textAlign: 'center' }}>
        Header
      </Typography.Title>
    </Layout.Header>
  );
};
