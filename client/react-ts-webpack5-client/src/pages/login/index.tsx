import React from 'react';
import { LoginParams } from '@/interface/user';
import { Button, Checkbox, Form, Input } from 'antd';

const initialValues: LoginParams = {
  username: 'admin',
  password: 'admin',
};

const LoginPage: React.FC = () => {
  // const onFinished = () => {};

  return (
    <div>
      <Form<LoginParams>
        // onFinish={onFinished}
        className="login-page-form"
        initialValues={initialValues}
      >
        <h2>REACT ANTD ADMIN</h2>
        <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！' }]}>
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]}>
          <Input type="password" placeholder="密码" />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>记住用户</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" className="login-page-form_button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
