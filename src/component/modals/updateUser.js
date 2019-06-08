import React from 'react';
import { Modal, Button,Input, Form,Row } from 'antd'
class UpdateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ModalText: '修改用户信息',
            visible: false,
            confirmLoading: false,
            data: {
                userName: 'xuweiy',
                passWord: '123456',
                telePhone: '15990020548',
                signature: '这个人很懒没有个性签名'
            }
        }

    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = () => {
        this.setState({
            ModalText: '正在保存用户信息',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };
    handleCancel = () => {
        console.log('取消');
        this.setState({
            visible: false,
        });
    };
    handleInformationChange = data => {
        this.setState({
            data: {
                data,
            },
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const data = this.state.data;
        let key=this.props.key
        console.log(key)
        return (
            <div>
                  <span onClick={this.showModal} className='fix'>修改信息</span>
                <Modal
                    title="修改用户信息"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Form.Item label="用户名：">
                                {getFieldDecorator('UserName', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(<Input />)}
                            </Form.Item>
                        </Row>
                        <Row gutter={16}>
                            <Form.Item label="密码：">
                                {getFieldDecorator('PassWord', {
                                    rules: [{ required: true, message: '请输入密码：' }],
                                })(<Input/>)}
                            </Form.Item>
                        </Row>
                        <Row gutter={16}>
                            <Form.Item label="联系方式：">
                                {getFieldDecorator('Telephone', {
                                    rules: [{ required: true, message: '请输入联系方式' }],
                                })(<Input />)}
                            </Form.Item>
                        </Row>
                        <Row gutter={16}>
                            <Form.Item label="个性签名">
                                {getFieldDecorator('description', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入文字内容',
                                        },
                                    ],
                                })(<Input.TextArea rows={10} />)}
                            </Form.Item>
                        </Row>
                    </Form>
                </Modal>
            </div>
        );
    }

}
export default Form.create()(UpdateUser);
