import React from 'react';
import { Form, Input, Button } from 'antd';

const SignIn: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values:', values);
    // handling sign-in 
  };

  return (
    <Form
      name="sign-in"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
