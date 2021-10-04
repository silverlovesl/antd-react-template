import { useState } from 'react';
import logo from './assets/images/logo.svg';
import { RouteComponentProps } from 'react-router';
import './App.css';
import RouterTemplate from './routes/RouterTemplate';

type PageProps = {} & RouteComponentProps;

const App: React.FC<PageProps> = (props) => {
  return (
    <div className="App">
      <RouterTemplate {...props}></RouterTemplate>
    </div>
  );
};

export default App;
