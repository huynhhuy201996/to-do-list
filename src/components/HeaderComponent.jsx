import React from 'react'
import { useNavigate, useRouters } from 'react-router-dom'
import { Button } from 'antd'

function HeaderComponent() {

    const navigate = useNavigate()

    const handlelogout = () => {

        console.log(user);
    };

    const user = {

    }



    return (
        <div className='container-fluid bg-dark p-2'>
            <div className="container">
                <div className="row">
                    <div className="col text-right">
                        <Button
                            onClick={user.email ? handlelogout : () => navigate('login')}
                            type='text'
                            style={{ color: '#fafafa' }}>
                            {user.email ? 'logout' : 'login'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeaderComponent



