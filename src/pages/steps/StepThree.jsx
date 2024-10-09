import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import {setStepThree } from '../../features/configs'

const StepThree = () => {
  const [form] = Form.useForm();

  const dispatch = useDispatch()
  const onFinish = (values) => {
    console.log('Step 1 Values:', values);
    dispatch(setStepThree(true))
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>
      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={['password']}
        rules={[
          { required: true, message: 'Please confirm your password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Passwords do not match!'));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm your password" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Validate
      </Button>
    </Form>
  );
};

export default StepThree;
