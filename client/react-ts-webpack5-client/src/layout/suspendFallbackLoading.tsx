import React, { FC } from 'react';
import { Spin, Alert } from 'antd';

interface FallbackMessageProps {
  message: string;
  description?: string;
}

const SuspendFallbackLoading: FC<FallbackMessageProps> = ({ message, description }) => {
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

export default SuspendFallbackLoading;
