
import React, { useEffect, useState } from 'react'
import { Modal, Form, Input, Select, Space, Button, message } from 'antd'
import AddAuthorModal from './AddAuthorModal'
import AddCategoryModal from './AddCategoryModal'

const AddAudioModal = ({ isVisible, onClose }) => {

    const [form] = Form.useForm();

    const [isVisibleModalAddAuthor, setisVisibleModalAddAuthor] = useState(false);

    const [isVisibleAddNewCategory, setisVisibleAddNewCategory] = useState(false);

    const [authors, setAuthors] = useState([]);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        handleGetAuthors();
        handleGetCategories();
    }, [])

    const handleGetAuthors = () => {
        const resAuthors = localStorage.getItem('authors')
        if (resAuthors) {
            const data = JSON.parse(resAuthors)
            const items = []
            data.forEach(item => {
                items.push({
                    label: item.name,
                    value: item.name,
                })
            })
            setAuthors(items);
        };
    };

    const handleGetCategories = () => {
        const resCategores = localStorage.getItem('categories')
        if (resCategores) {
            const data = JSON.parse(resCategores)
            const items = []
            data.forEach(item => {
                items.push({
                    label: item.name,
                    value: item.name,
                })
            })
            setCategories(items);
        };
    };

    const handleAddNewAudio = async (values) => {
        const res = localStorage.getItem('audios');
        const data = res ? JSON.parse(res) : [];

        data.push(values);
        localStorage.setItem('audios', JSON.stringify(data));
        message.success('Add new audio succesfully!!!');
        handleCloseModal();
    };


    const handleCloseModal = () => {
        form.resetFields();
        onClose();
    }

    return (
        <>
            <Modal
                open={isVisible}
                onCancel={handleCloseModal}
                onOk={() => form.submit()}
                title={'Add new audio'}>
                <Form form={form} onFinish={handleAddNewAudio} layout='vertical'>
                    <Form.Item rules={[
                        {
                            required: true,
                            message: 'please enter title',
                        }
                    ]} name={'title'} label='title'>
                        <Input allowClear maxlength={100} />
                    </Form.Item>
                    <Form.Item name={'Description'} label='Description'>
                        <Input.TextArea rows={5} allowClear maxlength={1500} />
                    </Form.Item>
                    <Form.Item name={'author'} label='author'>
                        <Select
                            notFoundContent={<div className='p-2 text-center'>
                                <p> Data not found </p>
                                <Button onClick={() => setisVisibleModalAddAuthor(true)}>Add New </Button>

                            </div>}
                            showSearch
                            options={authors}
                        />
                    </Form.Item>
                    <Form.Item required name={'category'} label='Category'>
                        <Select
                            notFoundContent={<div className='p-2 text-center'>
                                <p> Data not found </p>
                                <Button onClick={() => setisVisibleAddNewCategory(true)}>Add New </Button>

                            </div>}
                            showSearch
                            options={categories}
                        />
                    </Form.Item>
                    <Form.Item rules={[
                        {
                            required: true,
                            message: 'Please enter a sound'
                        }
                    ]} name={'sound'} label='Sound'>
                        <Input placeholder='Sound' />
                    </Form.Item>
                </Form>
            </Modal >

            <AddAuthorModal
                isVisible={isVisibleModalAddAuthor}
                onClose={() => {
                    setisVisibleModalAddAuthor(false)
                    handleGetAuthors();
                }}
            />
            <AddCategoryModal is isVisible={isVisibleAddNewCategory} onClose={() => {
                setisVisibleAddNewCategory(false);
                handleGetCategories();
            }} />
        </>
    );
};


export default AddAudioModal; 