
import { Button, Card, Checkbox, Input } from 'antd';
import { Lock, Sms } from 'iconsax-react';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import UserContext from '../store/userContext';



const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const userContext = useContext(UserContext);

    const handleLogin = () => {
        if (email && password) {
            userContext.setUser({
                email,
                password,
            })

            navigate('/');
        } else {
            alert('Type email and password!!!');
        }
    };

    return (
        <div>
            <div className='container mt-4'>
                <div className='col-6 offset-3'>
                    <Card>
                        <div className='text-center mb-4'>
                            <h1 style={{
                                fontWeight: 'bold',
                                color: '#676767',
                            }}>LOGIN</h1>
                        </div>

                        <Input
                            placeholder='Email'
                            type='email-address'
                            allowClear
                            required
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            prefix={<Sms size={20} color='#676767' />}
                            size='large'
                        />
                        <Input.Password
                            className='mt-3'
                            placeholder='Password'
                            required
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            prefix={<Lock size={20} color='#676767' />}
                            size='large'
                        />
                        <div className="row p-3 " style={{ padding: 0, justifyContent: 'space-between' }}>
                            <Checkbox>remember</Checkbox>
                            <Link to='/forgot-password'>Forgot Password</Link>
                        </div>

                        <Button
                            onClick={handleLogin}
                            style={{
                                width: '100%', marginTop: 10,
                                fontWeight: 'bold'
                            }}
                            type='primary'
                            size='large'>Login
                        </Button>


                    </Card>
                </div>
            </div>
        </div >
    );
};

export default LoginScreen;