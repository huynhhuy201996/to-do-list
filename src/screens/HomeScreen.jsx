import React, { useState } from 'react'
import { Button, Card, input, Space, } from 'antd'

const HomeScreen = () => {
    const [, set] = useState();

    const Handleaddnewstack = () => { };
    return (
        <div>
            <div className="row">
                <div className="col offset-2" />

                <Space.Compact>
                    <input
                        maxLength={100}
                        showcount
                        allowClear
                        style={{ width: '100%' }}
                        size='120' placeholder='what do you want ??? ' />

                    <Button type='primary' size='large'>Summit!</Button>
                </Space.Compact>

            </div>
            <Card className='mt-2'></Card>
        </div >
    )
}

export default HomeScreen