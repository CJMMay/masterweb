
import React from 'react';
import { Table, Divider, Button,Icon } from 'antd'
import Search from './search.js'
import './user-manage.css'
class FileManage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            columns: [
                {
                    title: '文件名称',
                    dataIndex: 'filename',
                    key: 'filename',
                    sorter: (a, b) => a.filename.length - b.filename.length,
                    sortDirections: ['descend'],
                    render: text => <span>
                        <Icon type="file-pdf" className='pdf'/><a href="javascript:;">{text}</a>,
                    </span>
                    
                },
                {
                    title: '上传人',
                    dataIndex: 'upload',
                    key: 'upload',
                },
                {
                    title: '上传时间',
                    dataIndex: 'upload_time',
                    key: 'upload_time',
                },
                {
                    title: '文件类别',
                    dataIndex: 'category',
                    key: 'category',
                },
                {
                    title: '下载次数',
                    dataIndex: 'download',
                    key: 'download',
                },
                {
                    title: '操作',
                    dataIndex: 'operation',
                    key: 'operation',
                    render: () => (
                        <span>
                            <a href="javascript:;" >下载</a>
                            <Divider type="vertical" />
                            <a href="javascript:;" className='delete'>删除</a>
                        </span>)
                },
            ],
            data: [
                {
                    key: '1',
                    filename: '历年数学真题',
                    upload: 'cjm',
                    upload_time: '2019-1-1',
                    category: '数学',
                    download: 20,
                },
                {
                    key: '2',
                    filename: '历年数学真题',
                    upload: 'cjm',
                    upload_time: '2019-1-1',
                    category: '数学',
                    download: 20,
                },
                {
                    key: '3',
                    filename: '历年数学真题',
                    upload: 'cjm',
                    upload_time: '2019-1-1',
                    category: '数学',
                    download: 20,
                },],
        
        }
    }
    render(){
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        return(
            <div>
                <Search />
                <div className='userHead'>
                    <div>
                        文件列表
                    </div>
                    <div className='userBtns'>
                        <Button type="primary" icon="download" size={30}>导出</Button>
                        <Button type="primary" icon="plus-circle" className='adduser'>上传</Button>
                        <Button type="danger" size={30}> 清空</Button>
                    </div>
                </div>
                <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.data} />
            </div>
        )
    }
}
export default FileManage;