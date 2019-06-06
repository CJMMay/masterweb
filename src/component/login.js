import React, { Component } from 'react';
import {Layout, Menu,Select,Form, Icon, Input, Button,Checkbox} from 'antd';

import 'antd/dist/antd.css';
import "./login.css";


const { Option }= Select;



class Login extends  Component {
  
  constructor(props) {
      super(props);
      this.state = { logo: {
        name: "123"
      }}
        }
        render() {
          return (
            <div className='login-g'>
            <div className='login-body'>
              <div className="login-logo">
                  <img src="" alt="" className='logo-pic'/>
              </div>
              <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item className="login-form-row">
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />
              </Form.Item >
              <Form.Item className="login-form-row">
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />
              </Form.Item>
              <Form.Item>
                <Checkbox>Remember me</Checkbox>
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
    
      
      
      
      
      
    
   
export default Login;