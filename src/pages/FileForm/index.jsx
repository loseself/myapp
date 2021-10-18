import { Form, Input, Button } from 'antd';
import React, { useState, useRef } from 'react';
import request from 'umi-request';

const FileForm = () => {
  const onFinish = (values) => {
    console.log(values);
    request
      .get('/api/hello')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: 'default',
        }}
        size={'default'}
        onFinish={onFinish}
      >
        <Form.Item name="targetDir" label="收集文件名的文件夹">
          <Input />
        </Form.Item>
        <Form.Item name="sourceDir" label="待拷贝的文件夹">
          <Input />
        </Form.Item>
        <Form.Item name="outputDir" label="输出的文件夹">
          <Input />
        </Form.Item>
        <Form.Item name="filenamesString" label="文件名称字符串">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FileForm;
