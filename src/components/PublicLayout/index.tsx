import React, { ReactType } from 'react';
import { CopyrightOutlined } from '@ant-design/icons';
import { Layout, Button } from 'antd';
import { StringUtils } from '../../utils/string.utils';
import { RouteComponentProps } from 'react-router-dom';
import './index.scss';

const { Content } = Layout;

type Props = {
  component: ReactType;
} & RouteComponentProps;

const PublicLayout: React.FC<Props> = (props) => {
  const Component = props.component;
  return (
    <Layout className="default-layout">
      <Content>
        <Component {...props}></Component>
        <footer className="default-layout__footer">
          <div className="default-layout__footer-company">
            <Button type="link" title="Grid AI" target="_blank" rel="noopener noreferrer" href="http://www.beecomb-grid.co.jp/">
              Grid AI
            </Button>
          </div>
          <div className="default-layout__footer-copyright">
            <Button type="link" title="copyright" target="_blank" rel="noopener noreferrer" href="http://www.beecomb-grid.co.jp/">
              Copyright <CopyrightOutlined /> {StringUtils.dateFormat(new Date(), 'YYYY')} Your Company Co.,Ltd
            </Button>
          </div>
        </footer>
      </Content>
    </Layout>
  );
};

export default PublicLayout;
