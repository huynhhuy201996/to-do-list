
import React from 'react'
import { Modal, Form, Input } from 'antd'

const AddAuthorModal = ({ isVisible, onClose }) => {

    const [form] = Form.useForm();

    const handleAddNewAuthor = (values) => {
        console.log(values);
    }

    const handleCloseModal = () => {
        form.resetFields();
        onClose();
    }

    return (
        <Modal
            open={isVisible}
            onCancel={handleCloseModal}
            onOK={() => form.submit()} title={'Add new Author'}>
            <Form form={form} onFinish={handleAddNewAuthor} layout='vertical'>
                <Form.Item name={'name'} label='name'>
                    <Input allowClear maxlength={100} />
                </Form.Item>
                <Form.Item name={'Description'} label='Description'>
                    <Input.TexArea rows={5} allowClear maxlength={1500} />
                </Form.Item>
            </Form>
        </Modal >
    );
};


export default AddAuthorModal