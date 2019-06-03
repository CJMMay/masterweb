import { Icon, List, Button,Modal} from 'antd';
import React from 'react';
import './message.css'

const confirm = Modal.confirm;

function showDeleteConfirm() {
    confirm({
      title: '你想要删除此推送吗?',
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

class MessageItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listData: [],
        }
    }

    render() {
        for (let i = 0; i < 23; i++) {
            this.state.listData.push({
                href: '',
                title: '考研火热进行中',
                description:
                    '你选好学校了吗？？？？',
            });
        }
        const IconText = ({ type, text }) => (
            <span>
                <Icon type={type} style={{ marginRight: 8, color: '#1890ff', fontSize: 20 }} />
                {text}
            </span>
        );
        return (
            <div >
                <List
                    header='历史图文列表'
                    bordered='true'
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => { console.log(page); }, pageSize: 3,
                    }}
                    dataSource={this.state.listData}
                    renderItem={item => (
                        <List.Item className='messagelist'
                            key={item.title}
                            actions={[ 
                                <div className='messagetime'>2019年5月12日18:00</div>,
                                <IconText type="eye" text="156" />,
                                <IconText type="like-o" text="156" />,
                                <IconText type="star" text='2000' />,
                            ]}
                            extra={
                                <div className='extra'>
                                    <img width={200} height={100} alt="logo" src={require('./img/message.jpg')} />
                                    <div className='operation'>
                                        <Button type="primary" icon="copy" className='copy'>复制</Button>
                                        <Button type="danger" icon="delete" className='delete' onClick={showDeleteConfirm} >删除</Button>
                                    </div>

                                </div>

                            }
                        >
                            <List.Item.Meta
                                title={<a href={item.href}><h4>
                                    {item.title}
                                </h4></a>}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />

            </div>
        )
    }
}
export default MessageItem