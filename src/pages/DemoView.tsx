import { Button } from 'antd';
import { observer } from 'mobx-react-lite';
import { RouteComponentProps } from 'react-router';

type Props = {} & RouteComponentProps;

const DemoView: React.FC<Props> = observer((props) => {
  return (
    <span>
      Demo View
      <Button type="primary">Button</Button>
    </span>
  );
});

export default DemoView;
