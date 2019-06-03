import React from 'react';
import { Table, Divider, Button,Icon,Modal } from 'antd';
import Search from './search.js';

import './essay-manage.css'
const confirm = Modal.confirm;

  
  function showDeleteConfirm() {
    confirm({
      title: '你想要删除此水帖吗?',
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
  

  
class EssayManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            columns: [
                {
                    title: '帖子名称',
                    dataIndex: 'essayname',
                    key: 'essayname',
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
                    title: '发帖时间',
                    dataIndex: 'write_time',
                    key: 'write_time',
                    sorter: (a, b) => a.write_Time < b.write_Time ?1:-1,
                    // sortDirections: ['descend'],
                    // render: text => <a href="javascript:;">{text}</a>,
                },
                {
                    title: '操作',
                    dataIndex: 'operation',
                    key: 'operation',
                    render: () => (
                        <span>
                            <span onClick={showDeleteConfirm} className='delete'>删除</span>
                        </span>)
                },
            ],
            data: [
                {
                    key: '1',
                    essayname:'数学满分图鉴',
                    username: 'cjm',
                    write_time: '2018-1-2',
                },
                {
                    key: '2',
                    essayname:'妈妈我要考北大',
                    username: 'zozo ',
                    write_time: '2019-1-1',
                },
                {
                    key: '3',
                    essayname:'英专学姐教你考英语',
                    username: 'weige',
                    write_time: '2019-1-13',
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
                <div className='essayHead'>
                    <div>
                        帖子列表
                    </div>
                    
                </div>
                <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.data} />
            </div>
        )
    }
}

export default EssayManage;