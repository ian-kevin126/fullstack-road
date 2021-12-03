import { Button, Result } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate, Route } from 'react-router-dom';
import { RouteProps } from 'react-router';

const ResultRedirect = () => {
  const [seconds, setSeconds] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // 倒计时
    let countdown = 5;
    const timer = setInterval(() => {
      setSeconds(--countdown);
      if (countdown === 0) {
        clearInterval(timer);
        navigate(`/login${'?from=' + encodeURIComponent(location.pathname)}`);
      }
    }, 1000);
    return clearInterval(timer);
  }, [navigate]);

  const goToLogin = () => {
    navigate(`/login${'?from=' + encodeURIComponent(location.pathname)}`, { replace: true });
  };

  return (
    <Result
      status={'403'}
      title={'403'}
      subTitle={'subtitle'}
      extra={
        <Button type="primary" onClick={goToLogin}>
          {seconds}后退出登录，您也可以点击返回
        </Button>
      }
    />
  );
};

const PrivateRoute: React.FC<RouteProps> = (props) => {
  // const { logged } = useAppState(state => state.user)
  const logged = true;
  return logged ? <Route {...props} /> : <ResultRedirect />;
};

export default PrivateRoute;
