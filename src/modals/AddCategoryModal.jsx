
import React from 'react'
import { Modal, Form, Input } from 'antd'

const AddCategoryModal = ({ isVisible, onClose }) => {

    const [form] = Form.useForm();

    const handleAddNewCategory = (values) => {
        if (values.name) {
            const res = localStorage.getItem('categories');
            const categories = res ? JSON.parse(res) : [];

            const index = categories.findIndex(element => element.name === values.name);
            if (index !== -1) {
                alert('Author is existing')
            } else {
                categories.push(values)
                localStorage.setItem('categories', JSON.stringify(categories));
                handleCloseModal();
            }
        };
    }

    const handleCloseModal = () => {
        form.resetFields();
        onClose();
    }

    return (
        <Modal
            open={isVisible}
            onCancel={handleCloseModal}
            onOk={() => form.submit()} title={'Add new Author'}>
            <Form form={form} onFinish={handleAddNewCategory} layout='vertical'>
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


export default AddCategoryModal;