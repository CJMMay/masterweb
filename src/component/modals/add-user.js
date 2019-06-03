import React from 'react';
import { Modal, Button } from 'antd';

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

    componentDidMount(){
        this.props.onRef(this);
    }
    render() {
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
                Return
                </Button>,
                <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                Submit
                </Button>,
            ]}
            >
            {this.props.children}
            
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            </Modal>
        </div>
        );
    }
    
}
export default AddUser;