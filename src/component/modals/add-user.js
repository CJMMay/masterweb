import React from 'react';
import { Modal, Button, Form, Input, Row, Upload, Col } from 'antd';

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

    componentDidMount() {
        this.props.onRef(this);
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const { visible, loading } = this.state;
        return (
            <div>
                <Modal
                    visible={visible}
                    title="添加"
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
                                {getFieldDecorator('UserName', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(<Input placeholder="请输入用户名" />)}
                            </Form.Item>
                        </Row>
                        <Row gutter={16}>
                            <Form.Item label="密码：">
                                {getFieldDecorator('PassWord', {
                                    rules: [{ required: true, message: '请输入密码：' }],
                                })(<Input placeholder="123456" />)}
                            </Form.Item>
                        </Row>
                        <Row gutter={16}>
                            <Form.Item label="联系方式：">
                                {getFieldDecorator('Telephone', {
                                    rules: [{ required: true, message: '请输入联系方式' }],
                                })(<Input placeholder="请输入联系方式" />)}
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