import React from 'react';
import { Modal, Button, Form, Input, Row} from 'antd';
class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            visible: false,
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const { visible, loading } = this.state;
        return (
            <div>
                <Button type="primary" icon="plus-circle" className='adduser' onClick={this.showModal}>添加</Button>
                <Modal
                    visible={visible}
                    title="添加用户"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            返回
                </Button>,
                        <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                            确定
                </Button>,
                    ]}
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Form.Item label="用户名：">
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(<Input placeholder="请输入用户名" />)}
                            </Form.Item>
                        </Row>
                        <Row gutter={16}>
                            <Form.Item label="密码：">
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码：' }],
                                })(<Input placeholder="123456" />)}
                            </Form.Item>
                        </Row>
                        <Row gutter={16}>
                            <Form.Item label="邮箱：">
                                {getFieldDecorator('email', {
                                    rules: [{ required: true, message: '请输入邮箱：' }],
                                })(<Input placeholder="" />)}
                            </Form.Item>
                        </Row>
                        <Row gutter={16}>
                            <Form.Item label="考试年份：">
                                {getFieldDecorator('testYear', {
                                    rules: [{ required: true, message: '请输入考试年份：' }],
                                })(<Input placeholder="" />)}
                            </Form.Item>
                        </Row>
                        <Row gutter={16}>
                            <Form.Item label="目标院校：">
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入目标院校：' }],
                                })(<Input placeholder="" />)}
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
                                })(<Input.TextArea rows={10} placeholder="请输入文字内容" />)}
                            </Form.Item>
                        </Row>
                    </Form>
                </Modal>
            </div>
        );
    }

}
export default Form.create()(AddUser);