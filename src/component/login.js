import React from 'react'
import 'antd/dist/antd.css'
import { Redirect } from "react-router-dom";
import './login.css'
import axios from 'axios'
import Msg from './msg.js'

import { Form, Icon, Input, Button, Checkbox } from 'antd';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: null,
            show: false,
            isLogin: 0,
        }
    }
    componentDidMount(){
        if(localStorage.getItem('user-token')){
             axios.defaults.headers.common.authorization = localStorage.getItem('user-token');
             this.setState({isLogin:1});
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let usr = values.userName, pwd = values.password, data = { params: { usr: usr, pwd: pwd } }
                axios.get('http://47.102.128.167:9000/login', data).then((r) => {
                    if (r.data.result === 1&&values.remember===true) {
                        axios.defaults.headers.common.authorization = r.data.token;
                        localStorage.setItem('user-token', r.data.token)
                        localStorage.setItem('user',usr)
                        localStorage.setItem('pwd',pwd)
                    }
                    this.setState({ msg: r.data.message, show: true, isLogin: r.data.result});
                });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        let isLogin = this.state.isLogin, msg = this.state.msg, show = this.state.show;
        if (isLogin === 1)
            return <Redirect push to='/home' />;
        return (
            <div>
                <Msg msg={msg} show={show} />
                <div className='login'>
                    <div className='login-g'>
                        <div className='login-m'>
                            <h1>Login Now!</h1>
                        </div>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: 'Please input your username!'}]
                                })
                                    (<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" className='usr-Input' />)}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!'}],
                                })
                                    (<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" className='pwd-Input' />)}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: false,
                                })
                                    (<div className='login-O'>
                                        <Checkbox>Remember me</Checkbox>
                                        <a className="login-form-forgot" href="">Forgot password</a>
                                    </div>)}
                                <Button type="primary" htmlType="submit" className="login-form-button" block>Log in</Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className='note'>
                        <p>用户名：aa；密码：bb</p>
                    </div>
                </div>
            </div>
        );

    }
}

export default Form.create()(Login);
