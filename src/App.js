import logo from './logo.svg';
import './App.css';

import {
  Form, Input, Button, Card
} from 'antd';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const layout = {
  labelCol: {
    spam: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const App = () => {
  // 提交表单且数据验证成功后回调事件
  const onFinish = values => {
    console.log('Success:', values);
  };

  // 提交表单且数据验证失败后回调事件
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card title="登陆页面" className="login-form">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
      <Form.Item
        label="用户名"
        name="用户名"
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
        ]}
      >
      <Input />
      </Form.Item>
  
      <Form.Item
        label="密码"
        name="密码"
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
      <Input.Password />
      </Form.Item>
  
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登陆
        </Button>
      </Form.Item>
    </Form>
  </Card>
  );
}

export default App;
