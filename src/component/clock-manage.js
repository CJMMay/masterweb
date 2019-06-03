import React from 'react';
import { Table, Divider, Button,Icon,Modal } from 'antd';
import Search from './search.js';

import './clock-manage.css';

const confirm = Modal.confirm;

  
  function showDeleteConfirm() {
    confirm({
      title: '你想要删除此记录吗?',
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
  
  class ClockManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            columns: [
                
                {
                    title: '用户名',
                    dataIndex: 'username',
                    key: 'username',
                    sorter: (a, b) => a.username.length - b.username.length,
                    sortDirections: ['descend'],
                    render: text => <a href="javascript:;">{text}</a>,
                },
                {
                    title: '打卡内容',
                    dataIndex: 'clockcontent',
                    key: 'clockcontent',
                },
                 {
                    title: '打卡时间',
                    dataIndex: 'clock_time',
                    key: 'clock_time',
                    sorter: (a, b) => a.clock_time < b.clock_time ?1:-1,
                    render: text => <a href="javascript:;">{text}</a>,
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
                    username: 'cjm',
                    clockcontent:'百词斩',
                    clock_time: '2019-1-1',
                },
                {
                    key: '2',
                    username: 'cjm',
                    clockcontent:'百词斩',
                    clock_time: '2019-1-2',
                },
                {
                    key: '3',
                    username: 'cjm',
                    clockcontent:'百词斩',
                    clock_time: '2019-1-2',
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
                <div className='clockHead'>
                    <div>
                        打卡列表
                    </div>
                    
                </div>
                <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.data} />
            </div>
        )
    }
}

export default ClockManage;
