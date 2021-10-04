import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import './index.scss';
import logo from '../../assets/images/logo.svg';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

type Props = {} & RouteComponentProps;

const LoginView: React.FC<Props> = observer((props) => {
  const [loading, setLoading] = useState(false);

  return (
    <article className="login-view">
      <div className="login-view__top">
        <div className="login-view__header">
          <span className="login-view__logo">
            <img alt="logo" src={logo} />
          </span>
          <span className="login-view__title">Your Header</span>
        </div>
        <div className="login-view__description">Input your sub title here XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</div>
      </div>
      <div className="login-view__form-wrap">
        <Form name="login" autoComplete="off">
          <Form.Item>
            <Input size="large" placeholder="Email" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item>
            <Input.Password size="large" placeholder="Password" prefix={<LockOutlined />} />
          </Form.Item>
        </Form>
        <Row>
          <Col span={12} className="g-text-left">
            <Checkbox>Remember me</Checkbox>
          </Col>
          <Col span={12} className="g-text-right">
            <a>Forgot password ?</a>
          </Col>
          <Col span={24} className="g-mt-md">
            <Button type="primary" size="large" block htmlType="submit" loading={loading}>
              Login
            </Button>
          </Col>
        </Row>
      </div>
    </article>
  );
});

export default LoginView;
