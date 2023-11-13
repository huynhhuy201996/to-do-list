
import React, { useEffect, useState } from 'react'
import { constants } from '../constants'
import { Card, message, List, Spin } from 'antd';


const HomeScreen = () => {

    const [isLoading, setisLoading] = useState('False');
    const [Posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts();
    }, []);

    const getAllPosts = async () => {

        const api = '/posts';

        setisLoading(true)
        try {
            await fetch(constants.BASE_URL + api)
                .then((result) => result.json())
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
        <div>
            <div className="container">
                <div className="col-8 offset-2" >
                    <Card>
                        {
                            isLoading ? <Spin /> : Posts.length > 0 ?
                                <List dataSource={Posts} renderItem={item} /> :
                                <p>Posts not Found </p>
                        }
                        <List />
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default HomeScreen