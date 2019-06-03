import React from 'react';
import './edit-message.css'
import { Upload, Drawer, Form, Button, Col, Row, Input, Icon,message,Modal } from 'antd'


class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }
    getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    beforeUpload = (file) => {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
    }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            this.getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        return (
            <div>
                <Button type="" icon="form" onClick={this.showDrawer}>群发消息</Button>
                <Drawer
                    title="推送消息编辑"
                    width={900}
                    
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                                <Form.Item label="信息主题：">
                                    {getFieldDecorator('MessageName', {
                                        rules: [{ required: true, message: '请输入信息主题' }],
                                    })(<Input placeholder="请输入信息主题" />)}
                                </Form.Item>
                           
                        </Row>
                        <Row gutter={16}>
                            <Form.Item label="封面首图：">
                                    <Upload
                                        name="picture"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        beforeUpload={this.beforeUpload}
                                        onChange={this.handleChange}
                                    >
                                        {imageUrl ? <img src={imageUrl} alt="avatar" className='messageimg'/> : uploadButton}
                                    </Upload>
                                </Form.Item>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item label="具体内容:">
                                    {getFieldDecorator('description', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入文字内容',
                                            },
                                        ],
                                    })(<Input.TextArea rows={10} placeholder="请输入文字内容" />)}
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                    <div className='edit-footer'>
                        <Button onClick={this.onClose} style={{ marginRight: 8 }}>Cancel</Button>
                        <Button onClick={this.onClose} type="primary">Submit</Button>
                    </div>
                </Drawer>
            </div>
        )
    }
}
export default Form.create()(Edit);