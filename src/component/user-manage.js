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
                        <AddUser />
                        <Button type="danger" > 重置</Button>

                    </div>
                </div>
                <EditableTable />
            </div>
        )
    }
}
export default UserManage;