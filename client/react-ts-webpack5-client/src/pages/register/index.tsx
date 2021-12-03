import React from 'react';
import { UserLayout } from '@/layout/userLayout/UserLayout';
import styles from '@/pages/register/index.less';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  // const onFinish = async (values: any) => {
  //   console.log('Success:', values);
  //   try {
  //     await axios.post('http://123.56.149.216:8080/auth/register', {
  //       email: values.username,
  //       password: values.password,
  //       confirmPassword: values.confirm,
  //     });
  //     history.push('/signIn/');
  //   } catch (error) {
  //     alert('注册失败！');
  //   }
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };

  // 去登录
  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <UserLayout>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        className={styles['register-form']}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="确认密码"
          name="confirm"
          hasFeedback
          rules={[
            { required: true, message: '请再次输入密码!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject('密码确认不一致！');
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          {...tailLayout}
          name="remember"
          valuePropName="checked"
          className={styles.rememberMe}
        >
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout} className={styles.submitBtnWrapper}>
          <Button className={styles.submitBtn} type="primary" htmlType="submit">
            提 交
          </Button>
        </Form.Item>
        <Form.Item {...tailLayout} className={styles.gotoLogin}>
          <a onClick={goToLogin}>已有账号？去登录</a>
        </Form.Item>
      </Form>
    </UserLayout>
  );
};

export default RegisterPage;
