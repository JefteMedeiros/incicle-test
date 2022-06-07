import React from 'react';
import Header from '../Header';

interface Props {
  children: JSX.Element;
}

const layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default layout;
