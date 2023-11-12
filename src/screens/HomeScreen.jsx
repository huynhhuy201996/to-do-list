import { message } from 'antd';
import React, { useEffect, useState } from 'react'


const HomeScreen = () => {

    const [isLoading, setisLoading] = useState('False');
    const [Posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts();
    }, []);

    const getAllPosts = async () => {

        const API = '/Posts';

        setisLoading(true)
        try {
            await fetch(API).then((result) => result.json())
                .then(res => {
                    setPosts(res)
                    setisLoading(false);

                })

        } catch (error) {
            message.error(error);
            setisLoading(false)
        }
    };

    console.log(Posts);

    return (
        <div></div>
    )
}

export default HomeScreen