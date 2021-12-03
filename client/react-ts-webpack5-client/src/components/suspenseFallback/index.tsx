import React, { FC } from 'react';
import { Spin, Alert } from 'antd';

interface FallbackProps {
  message: string;
  description?: string;
}

const SuspendFallback: FC<FallbackProps> = ({ message, description }) => {
  return (
    <div
      style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Spin tip="加载中...">
        <Alert message={message} description={description} type="info" />
      </Spin>
    </div>
  );
};

export default SuspendFallback;
