import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import {setStepOne } from '../../features/configs'


const StepOne = () => {
  const [form] = Form.useForm();
const dispatch = useDispatch()
  const onFinish = (values) => {
    console.log('Step 1 Values:', values);
    dispatch(setStepOne(true))
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <Input placeholder="Enter your first name" />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input placeholder="Enter your last name" />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default StepOne;
