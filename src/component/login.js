import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { Layout, Menu, Select, Form, Icon, Input, Button, Checkbox } from 'antd';
import Msg from './msg.js'
import 'antd/dist/antd.css';
import "./login.css";
import axios from 'axios'
const { Option } = Select;
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: { name: "123" },
      show: false,
      isLogin: 0,
      msg: null
    }
  }
  componentDidMount() {
    if (localStorage.getItem('user-token')) {
      axios.defaults.headers.common.authorization = localStorage.getItem('user-token');
      this.setState({ isLogin: 1 });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        if (!err) {
            let usr = values.userName, pwd = values.password, data = {  "userName": usr, "password": pwd  }
            console.log(data)
            axios.post('http://47.106.122.35:9900/login', data).then((r) => {
              console.log(r.data);
                if (r.data.code === 1&&values.remember===true) {
                    axios.defaults.headers.common.authorization = r.data.token;
                }
      
                this.setState({ msg: r.data.message, show: true, isLogin: r.data.code});
            });
        }
    });
}
  render() {
    const { getFieldDecorator } = this.props.form;
    let isLogin = this.state.isLogin, msg = this.state.msg, show = this.state.show;
    if (isLogin === 1)
      return <Redirect push to='/Home' />;
    return (
      <div className='login-g'>
        <Msg msg={msg} show={show} />
        <div className='login-body'>
          <div className="login-logo">
            <img src="" alt="" className='logo-pic' />
          </div>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item className="login-form-row">
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }]
              })
                (<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />)}
            </Form.Item >
            <Form.Item className="login-form-row">
              {
                getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })
                  (
                    <Input
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      placeholder="Password"
                    />
                  )
              }

            </Form.Item>
            <Form.Item>
              {
                getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: false,
                })(<Checkbox>Remember me</Checkbox>)
              }
              <a className="login-form-forgot" href="">
                Forgot password
                </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
                </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default Form.create()(Login);