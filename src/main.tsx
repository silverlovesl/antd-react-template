import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'ant-design-style-sumamry/dist/ant-design-style-summary.min.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import jaJP from 'antd/es/locale/ja_JP';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/ja';

moment.locale('ja');

ReactDOM.render(
  <ConfigProvider locale={jaJP}>
    <BrowserRouter>
      <Route component={App} path="/" />
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root')
);

// serviceWorker.unregister();
