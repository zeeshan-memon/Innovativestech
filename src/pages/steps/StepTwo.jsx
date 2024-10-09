import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import {setStepTwo } from '../../features/configs'

const StepTwo = () => {
  const [form] = Form.useForm();

  const dispatch = useDispatch()
  const onFinish = (values) => {
    console.log('Step 1 Values:', values);
    dispatch(setStepTwo(true))
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email!' },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[
          { required: true, message: 'Please input your phone number!' },
          { pattern: /^[0-9]+$/, message: 'Please enter a valid phone number!' },
        ]}
      >
        <Input placeholder="Enter your phone number" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default StepTwo;
