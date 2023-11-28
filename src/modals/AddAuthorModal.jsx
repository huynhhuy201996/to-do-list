
import React from 'react'
import { Modal, Form, Input, Button } from 'antd'

const AddAuthorModal = ({ isVisible, onClose }) => {

    const [form] = Form.useForm();

    const handleAddNewAuthor = (values) => {
        if (values.name) {
            const res = localStorage.getItem('authors');
            const authors = res ? JSON.parse(res) : [];

            const index = authors.findIndex(element => element.title === values.title);
            if (index !== -1) {
                alert('Author is existing')
            } else {
                authors.push(values)
                localStorage.setItem('authors', JSON.stringify(authors));
                handleCloseModal();
            }
        };
    };

    const handleCloseModal = () => {
        form.resetFields();
        onClose();
    }

    return (
        <Modal
            open={isVisible}
            onCancel={handleCloseModal}
            onOk={() => form.submit()} title={'Add new audio'}>
            <Form form={form} onFinish={handleAddNewAuthor} layout='vertical'>
                <Form.Item name={'name'} label='name'>
                    <Input allowClear maxlength={100} />
                </Form.Item>
                <Form.Item name={'Description'} label='Description'>
                    <Input.TextArea rows={5} allowClear maxlength={1500} />
                </Form.Item>
            </Form>

        </Modal >

    );
};


export default AddAuthorModal