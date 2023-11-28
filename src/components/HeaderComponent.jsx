import React, { useContext } from 'react'
import { useNavigate, useRouters } from 'react-router-dom'
import { Avatar, Button, Space } from 'antd'
import UserContext from '../store/userContext';



function HeaderComponent() {

    const navigate = useNavigate()
    const userContext = useContext(UserContext);

    const handlelogout = () => {
        userContext.setUser({});
    };

    const user = userContext.user;


    return (
        <div className='container-fluid bg-dark p-2'>
            <div className="container">
                <div className="row">
                    <div className="col text-right">
                        <Space>
                            {user.email && <Avatar
                                style={{ textTransform: 'uppercase' }}>
                                {user.email.substring(0, 1)}</Avatar>}
                            <Button
                                onClick={user.email ? handlelogout : () => navigate('login')}
                                type='text'
                                style={{ color: '#fafafa' }}>
                                {user.email ? 'logout' : 'login'}
                            </Button>
                        </Space>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HeaderComponent;



