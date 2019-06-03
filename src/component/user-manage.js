import React from 'react';
import { Table, Divider, Button,Modal } from 'antd'
import './user-manage.css';
import Search from './search.js';
import AddUser from './modals/add-user.js';

const confirm = Modal.confirm;
function showUpdateConfirm() {
    confirm({
      title: '你想要修改信息吗?',
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  
  function showDeleteConfirm() {
    confirm({
      title: '你想要删除此用户吗?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  
  function showExportConfirm() {
    confirm({
      title: '你想要导出这些用户吗?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      okButtonProps: {
        disabled: true,
      },
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  
class UserManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            columns: [
                {
                    title: '用户头像',
                    dataIndex: 'userimg',
                    key: 'userimg',
                    render: () => <img src={require("./img/userimg.jpg")} alt="" className='userimg' />
                },
                {
                    title: '用户名',
                    dataIndex: 'username',
                    key: 'username',
                    sorter: (a, b) => a.username.length - b.username.length,
                    sortDirections: ['descend'],
                    render: text => <a href="javascript:;">{text}</a>,
                },
                {
                    title: '手机号',
                    dataIndex: 'telephone',
                    key: 'telephone',
                },
                {
                    title: '帖子条数',
                    dataIndex: 'post_num',
                    key: 'post_num',
                    defaultSortOrder: 'descend',
                    sorter: (a, b) => a.post_num - b.post_num,
                }, {
                    title: '注册时间',
                    dataIndex: 'register_time',
                    key: 'register_time',
                },
                {
                    title: '个性签名',
                    dataIndex: 'personal',
                    key: 'personal',
                },
                {
                    title: '操作',
                    dataIndex: 'operation',
                    key: 'operation',
                    render: () => (
                        <span>
                            <span onClick={showUpdateConfirm} className='fix'>修改信息</span>
                            <Divider type="vertical" />
                            <span onClick={showDeleteConfirm} className='delete'>删除</span>
                        </span>)
                },
            ],
            data: [
                {
                    key: '1',
                    // userimg:"./img/userimg.jpg",
                    username: 'chenjiaemi',
                    telephone: '15990020548',
                    post_num: 30,
                    register_time: '2019-1-1',
                    personal: '这个人很懒，没有个性签名',
                },
                {
                    key: '2',
                    // userimg:"./img/userimg.jpg",
                    username: 'xuweiy',
                    telephone: '15990020548',
                    post_num: 0,
                    register_time: '2019-1-1',
                    personal: '这个人很懒，没有个性签名',
                },
                {
                    key: '3',
                    // userimg:"./img/userimg.jpg",
                    username: 'zhangzhuohui',
                    telephone: '15990020548',
                    post_num: 15,
                    register_time: '2019-1-1',
                    personal: '这个人很懒，没有个性签名',
                },],
        }
    }
    testRef=(ref)=>{
        this.child = ref;
    }
    showChildModal = ()=>{
        this.child.showModal();
    }
    render() {
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        return (
            <div>
                <Search />
                <div className='userHead'>
                    <div>
                        用户列表
                    </div>
                    <AddUser onRef={this.testRef}/>
                    
                    <div className='userBtns'>
                        <Button type="primary" icon="download" size={30} >导出</Button>
                        <Button type="primary" icon="plus-circle" className='adduser' onClick={this.showChildModal}>添加</Button>
                        <Button type="danger" size={30}> 重置</Button>

                    </div>
                </div>
                <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.data} />
            </div>
        )
    }
}
export default UserManage;