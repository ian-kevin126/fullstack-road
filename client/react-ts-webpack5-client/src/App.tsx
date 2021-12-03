import React, {Suspense} from 'react';
import routes from './routes';
import {useRoutes} from "react-router-dom";

const App: React.FC = () => {
  const element = useRoutes(routes)
  return <Suspense fallback={<div>suspense</div>}>
    <>{element}</>
  </Suspense>;
};

export default App;
