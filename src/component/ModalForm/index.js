import React, { useState } from 'react';
import { Modal, Form, Input, Button, Select, DatePicker } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FloatingAddButton } from './style';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { addTask } from '../../redux/Task/action';
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};

const users = ['User A', 'User B', 'User C', 'User D'];

const ModalForm = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleAdd = () => {
    setModalOpen(true);
  };
  const handleSubmit = () => {};
  const onFinish = (values) => {
    console.log('Success:', values);
    dispatch(addTask(values));
    setModalOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <FloatingAddButton onClick={handleAdd}>
        <FontAwesomeIcon icon={faPlus} color='#fff' />
      </FloatingAddButton>
      <Modal
        footer={null}
        title='Add Task'
        visible={modalOpen}
        onCancel={() => setModalOpen(false)}
      >
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          {...layout}
          name='basic'
          initialValues={{
            remember: true
          }}
        >
          <Form.Item
            label='Title'
            name='title'
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='description'
            label='Description'
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            rules={[
              {
                required: true
              }
            ]}
            name='users'
            label='Users'
          >
            <Select
              mode='multiple'
              style={{ width: '100%' }}
              placeholder='Please select'
              // defaultValue={['a10', 'c12']}
              // onChange={handleChange}
            >
              {users.map((item, index) => (
                <Select.Option value={item} key={index}>
                  {item}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name='estimateDate'
            label='Estimate Date'
            rules={[
              {
                required: true
              }
            ]}
          >
            <DatePicker
              disabledDate={(current) => {
                return (
                  current.format('YYYY-MM-DD') < moment().format('YYYY-MM-DD')
                );
              }}
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit' onClick={handleSubmit}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalForm;
