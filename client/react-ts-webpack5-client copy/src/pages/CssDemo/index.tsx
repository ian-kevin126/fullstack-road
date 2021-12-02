import React from 'react';
import indexStyles from './index.less';
import Header from './Header';
import Content from './Content';

const Index: React.FC = () => {
  return (
    <div className={indexStyles.container}>
      <div>CSSDemo</div>
      <Header />
      <Content />
      <div className={indexStyles.bgStyle}>dddd</div>
    </div>
  );
};

export default Index;
