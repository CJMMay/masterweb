import React from 'react';
import EditableTable from './table.js'
import { Table, Divider, Button,Modal } from 'antd'
import './user-manage.css';
import Search from './search.js';
import AddUser from './modals/add-user.js';
import UpdateUser from './modals/updateUser.js'
const confirm = Modal.confirm;
  
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
                    title: '邮箱',
                    dataIndex: 'email',
                    key: 'email',
                },
                {
                    title: '考试年份',
                    dataIndex: 'testYear',
                    key: 'testYear',
                },
                {
                    title: '目标院校',
                    dataIndex: 'goalSchool',
                    key: 'goalSchool',
                },
                {
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
                    render: (record) => (
                        <span>
                            <UpdateUser />
                            <span onClick={showDeleteConfirm} className='delete'>删除</span>
                        </span>)
                },
            ],
            data: [
                {
                    key: '1',
                    // userimg:"./img/userimg.jpg",
                    username: 'chenjiaemi',
                    email: '1029187145@qq.com',
                    testYear:'2020',
                    goalSchool:'杭州师范大学',
                    register_time: '2019-1-1',
                    personal: '这个人很懒，没有个性签名',
                },
                {
                    key: '2',
                    // userimg:"./img/userimg.jpg",
                    username: 'chenjiaemi',
                    email: '1029187145@qq.com',
                    testYear:'2020',
                    goalSchool:'杭州师范大学',
                   
                    register_time: '2019-1-1',
                    personal: '这个人很懒，没有个性签名',
                },
                {
                    key: '3',
                    // userimg:"./img/userimg.jpg",
                    username: 'chenjiaemi',
                    email: '1029187145@qq.com',
                    testYear:'2020',
                    goalSchool:'杭州师范大学',
                    register_time: '2019-1-1',
                    personal: '这个人很懒，没有个性签名',
                },],
        }
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
                    <div className='userBtns'>
                        <Button type="primary" icon="download">导出</Button>
                        {/* <Button type="primary" icon="plus-circle" className='adduser' onClick={this.showChildModal}>添加</Button> */}
                        <AddUser />
                        <Button type="danger" > 重置</Button>

                    </div>
                </div>
                {/* <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.data} /> */}
                <EditableTable />
            </div>
        )
    }
}
export default UserManage;