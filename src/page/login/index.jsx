import { Button, Form, Input, NavBar } from 'antd-mobile'
import React from 'react'
import './index.scss'
import { EyeInvisibleOutline, EyeOutline } from 'antd-mobile-icons'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [authMode, setAuthMode] = React.useState(false)
    const [visible, setVisible] = React.useState(false)
    const navigate = useNavigate()
    const [loginForm] = Form.useForm()
    const login = () => {
        loginForm.validateFields().then((values) => {
            if (values.loginAccount === 'admin' && values.loginPassword === '123456') {
                navigate('/')
            }
        })
    }
    return (
        <>
            <div className='login' style={authMode ? { display: 'none' } : { display: 'block' }}>
                {/* 顶部导航区 */}
                <NavBar backArrow={false} className='navbar'>
                    账号登录
                </NavBar>
                {/* 表单区 */}
                <Form layout='horizontal' form={loginForm}>
                    <Form.Item label='账号' name='loginAccount'>
                        <Input placeholder='请输入账号'></Input>
                    </Form.Item>
                    <Form.Item label='密码' name='loginPassword'>
                        <div className='pwd'>
                            <Input placeholder='请输入密码' type={visible ? 'text' : 'password'} />
                            <div className='eye'>
                                {!visible ? (
                                    <EyeInvisibleOutline onClick={() => setVisible(true)} />
                                ) : (
                                    <EyeOutline onClick={() => setVisible(false)} />
                                )}
                            </div>
                        </div>
                    </Form.Item>
                </Form>

                {/* 登录按钮 */}
                <Button block color='primary' className='summitButton' size='large' onClick={() => login()}>登录</Button>
            </div>
        </>
    )

}

export default Login