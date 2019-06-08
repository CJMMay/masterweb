import React from 'react';
import  { Table, Input, InputNumber, Popconfirm, Form,Divider } from  'antd';
const data = [];
for (let i = 0; i < 30; i++) {
    data.push({
        key: i.toString(),
        username: `chenjiamei ${i}`,
        email: '1029187145@qq.com',
        testYear: '2020',
        goalSchool: '杭州师范大学',
        register_time: '2019-1-1',
        personal: '这个人很懒，没有个性签名',
    });
}
const EditableContext = React.createContext();

class EditableCell extends React.Component {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return <InputNumber />;
        }
        return <Input />;
    };

    renderCell = ({ getFieldDecorator }) => {
        const {
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            children,
            ...restProps
        } = this.props;
        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item style={{ margin: 0 }}>
                        {getFieldDecorator(dataIndex, {
                            rules: [
                                {
                                    required: true,
                                    message: `Please Input ${title}!`,
                                },
                            ],
                            initialValue: record[dataIndex],
                        })(this.getInput())}
                    </Form.Item>
                ) : (
                        children
                    )}
            </td>
        );
    };

    render() {
        return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
    }
}

class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data, editingKey: '' };
        this.columns = [
            {
                title: '用户头像',
                dataIndex: 'userimg',
                key: 'userimg',
                render: () => <img src={require("./img/userimg.jpg")} alt="" className='userimg' />,
                editable: false,
                align:'center',
            },
            {
                title: '用户名',
                dataIndex: 'username',
                key: 'username',
                sorter: (a, b) => a.username.length - b.username.length,
                sortDirections: ['descend'],
                render: text => <a href="javascript:;">{text}</a>,
                width: '15%',
                align:'center',
                editable: true,
            },
            {
                title: '邮箱',
                dataIndex: 'email',
                key: 'email',
                width: '15%',
                align:'center',
                editable: true,
            },
            {
                title: '考试年份',
                dataIndex: 'testYear',
                key: 'testYear',
                editable: true,
                align:'center',
                width: '10%',
            },
            {
                title: '目标院校',
                dataIndex: 'goalSchool',
                key: 'goalSchool',
                align:'center',
                editable: true,
            },
            {
                title: '注册时间',
                dataIndex: 'register_time',
                key: 'register_time',
                align:'center',
                editable: false,
            },
            {
                title: '个性签名',
                dataIndex: 'personal',
                key: 'personal',
                align:'center',
                editable: true,
            },
            {
                title: '操作',
                dataIndex: 'operation',
                key:'operation',
                align:'center',
                render: (text, record) => {
                    const { editingKey } = this.state;
                    const editable = this.isEditing(record);
                    return editable ? (
                        <span>
                            <EditableContext.Consumer>
                                {form => (
                                    <a
                                        href="javascript:;"
                                        onClick={() => this.save(form, record.key)}
                                        style={{ marginRight: 8 }}
                                    >
                                        保存
                  </a>
                                )}
                            </EditableContext.Consumer>
                            <Popconfirm title="是否取消?" onConfirm={() => this.cancel(record.key)}>
                                <a>取消</a>
                            </Popconfirm>
                        </span>
                    ) : (
                            <div>
                                <a disabled={editingKey !== ''} onClick={() => this.edit(record.key)}>
                                    修改信息
            </a>
            <Divider />
                                <a disabled={editingKey !== ''} className='delete' onClick={() => this.delete(record.key)}>
                                    删除
           </a>
                            </div>

                        );
                },
            },
        ];
    }

    isEditing = record => record.key === this.state.editingKey;

    cancel = () => {
        this.setState({ editingKey: '' });
    };

    save(form, key) {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            const newData = [...this.state.data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                this.setState({ data: newData, editingKey: '' });
            } else {
                newData.push(row);
                this.setState({ data: newData, editingKey: '' });
            }
            console.log(newData);
        });
        
    }
    edit(key) {
        this.setState({ editingKey: key });
    }
    delete(key){
        const newData = [...this.state.data];
        const index = newData.findIndex(item => key === item.key);
        console.log('shanchu'+index)
        if (index > -1) {
            newData.splice(index, 1);
            console.log(newData)
        }
        this.setState({ data: newData, editingKey: '' });

    }

    render() {
        const components = {
            body: {
                cell: EditableCell,
            },
        };

        const columns = this.columns.map(col => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    inputType: 'text',
                    dataIndex: col.dataIndex,
                    title: col.title,
                    editing: this.isEditing(record),
                }),
            };
        });

        return (
            <EditableContext.Provider value={this.props.form}>
                <Table
                    components={components}
                    bordered
                    dataSource={this.state.data}
                    columns={columns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: this.cancel,
                    }}
                />
            </EditableContext.Provider>
        );
    }
}

export default  Form.create()(EditableTable)