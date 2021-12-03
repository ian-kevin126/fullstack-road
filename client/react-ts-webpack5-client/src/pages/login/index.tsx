import React from 'react';
import { UserLayout } from '@/layouts/userLayout';
import {LoginParams} from "@/interface/user";
import {Button, Checkbox, Form, Input} from "antd";
import styles from "@/pages/login/index.less";
import {useNavigate} from "react-router-dom";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const initialValues: LoginParams = {
  username: 'admin',
  password: 'admin',
};


const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <UserLayout>
      <Form<LoginParams>
        {...layout}
        // onFinish={onFinished}
        initialValues={initialValues}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名！' }]}
        >
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码！' }]}>
          <Input type="password" placeholder="密码" />
        </Form.Item>
        <Form.Item
          {...tailLayout}
          name="remember"
          valuePropName="checked"
          className={styles.rememberMe}
        >
          <Checkbox>记住用户</Checkbox>
        </Form.Item>
        <Form.Item {...tailLayout} className={styles.submitBtnWrapper}>
          <Button htmlType="submit" type="primary" className={styles.submitBtn}>
            登录
          </Button>
        </Form.Item>
        <Form.Item {...tailLayout} className={styles.gotoRegister}>
          <a onClick={goToRegister}>没有账号？去注册</a>
        </Form.Item>
      </Form>
    </UserLayout>
  );
};

export default LoginPage;
