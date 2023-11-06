import React, { useEffect, useState } from 'react'
import { Button, Card, input, Space, } from 'antd'
import { LOCAL_DATA_NAME } from '../constant';
import { Stacks } from 'iconsax-react';

const HomeScreen = () => {
    const [Taskcontent, setTaskcontent] = useState('');
    const [tasks, settasks] = useState([]);

    useEffect((getstasks) => {
        getstasks();
    }, [])

    const getTasks = () => {
        const res = localStorage.getItem(LOCAL_DATA_NAME.tasks);
        res && setTasks(JSON.parse(res));
    }

    const Handleaddnewstack = () => {
        if (Taskcontent) {
            const data = {
                content: Taskcontent,
                createAT: Date.now(),
                updateAT: Date.now(),
                createBy: 'Me',

            };
            tasks.push(data);
            localStorage.setItem(LOCAL_DATA_NAME.tasks, JSON.stringify(Stacks));
            getTasks();

        }
        else {
            alert('Please add Task content!!!');
        }
    };
    return (
        <div>
            <div className="row">
                <div className="col offset-2" />

                <Space.Compact>
                    <input
                        value={Taskcontent}
                        onChange={val => setTaskcontent(val.target.value)}
                        onPressEnter={Handleaddnewstack}
                        maxLength={100}
                        showcount
                        allowClear
                        style={{ width: '100%' }}
                        size='120' placeholder='what do you want ??? ' />

                    <Button onClick={Handleaddnewstack} type='primary' size='large'>Summit!</Button>
                </Space.Compact>

            </div>
            <Card className='mt-2'></Card>
        </div >
    )
}

export default HomeScreen