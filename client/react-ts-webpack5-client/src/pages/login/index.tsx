import React from 'react';
import { UserLayout } from '@/layout/userLayout/UserLayout';
import { LoginParams } from '@/interface/user/login';
import { Button, Checkbox, Form, Input } from 'antd';
import styles from '@/pages/login/index.less';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { loginAsync } from '@/store/user.slice';
import { formatSearch } from '@/utils/formatSearch';

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
  const dispatch = useAppDispatch();
  const location = useLocation();

  const goToRegister = () => {
    navigate('/register');
  };

  // 登录
  const onFinished = async (form: LoginParams) => {
    const res = await dispatch(loginAsync(form));
    if (res) {
      const search = formatSearch(location.search);
      const from = search?.from || { pathname: '/dashboard' };
      console.log('====================================');
      console.log(from);
      console.log('====================================');
      navigate(from);
    }
  };

  return (
    <UserLayout>
      <Form<LoginParams> {...layout} onFinish={onFinished} initialValues={initialValues}>
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名！' }]}
        >
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码！' }]}
        >
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
