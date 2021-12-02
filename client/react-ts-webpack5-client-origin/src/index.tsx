import React from 'react';
import ReactDOM from 'react-dom';
import CssDemo from '@/pages/CssDemo';
import AntdDemo from '@/pages/AntdDemo';
import '@/index.less';
// import East_White from '@/assets/East_White.jpg';

const App = () => {
  return (
    <div>
      <CssDemo />
      <h1>My React and TypeScript App!</h1>
      <AntdDemo />
      {/* <img src={East_White} alt="" /> */}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
