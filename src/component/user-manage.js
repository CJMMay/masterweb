import React from 'react';
import { Table,Divider} from 'antd'
class UserManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: '用户名',
                    dataIndex: 'username',
                    key: 'username',
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
                            <a href="javascript:;">修改信息</a>
                            <Divider type="vertical" />
                            <a href="javascript:;">删除</a>
                        </span>)
                },

            ],
            data: [
                {
                    key: '1',
                    username: 'chenjiaemi',
                    telephone: '15990020548',
                    post_num: 30,
                    register_time: '2019-1-1',
                    personal: '这个人很懒，没有个性签名',
                },
                {
                    key: '2',
                   
                    username: 'chenjiaemi',
                    telephone: '15990020548',
                    post_num: 30,
                    register_time: '2019-1-1',
                    personal: '这个人很懒，没有个性签名',
                },
                {
                    key: '3',
                    username: 'chenjiaemi',
                    telephone: '15990020548',
                    post_num: 30,
                    register_time: '2019-1-1',
                    personal: '这个人很懒，没有个性签名',
                },]
        }
    }
    render() {
        return (
            <div>
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>
        )
    }
}
export default UserManage;