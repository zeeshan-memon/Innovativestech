import React, {useEffect} from 'react';
import { Button, Form, Input } from 'antd';
import { updateUser, addUser} from '../features/user'
import {  useDispatch } from 'react-redux'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: '${label} is required!',

};

const UsersForm = ({userData}) => {
    const dispatch = useDispatch()
    const onFinish = (values) => {
        if(userData && userData?.id){
            dispatch(updateUser({id:userData.id, updatedData:values.user}))
        }else{
            dispatch(addUser({id: new Date().getTime(), ...values.user}))
        }
    };
    const [form] = Form.useForm();
    // Use useEffect to load data when component mounts or userData changes
    useEffect(() => {
      if (userData) {
        form.setFieldsValue({
          user: {
            name: userData.name,
            address: userData.address,
          },
        });
      }
    }, [userData, form]);

 return (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
    style={{
      maxWidth: 600,
    }}
    validateMessages={validateMessages}
    initialValues={{user: userData}}
  >
    <Form.Item
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={['user', 'address']}
      label="Address"
      rules={[
        {
            required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
   

    <Form.Item
      wrapperCol={{
        ...layout.wrapperCol,
        offset: 8,
      }}
    >
      <Button type="primary" htmlType="submit">
        {userData?.id ? "Update":"Submit"}
      </Button>
    </Form.Item>
  </Form>
 )
};
export default UsersForm;