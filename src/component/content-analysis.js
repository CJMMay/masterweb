import React from 'react';
import Data from './data1.js'
import Search from './search.js'
import UserManage from './user-manage.js';
class ContAna extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [{
                title: '帖子数据',
                subtitle: '昨日发帖数量',
                list: [{
                    content: '新增帖子数',
                    number: '1000'
                }, {
                    content: '帖子点赞数',
                    number: '1000'
                }, {
                    content: '累计点赞数',
                    number: '1000'
                }, {
                    content: '累计评论数',
                    number: '1000'
                }]
            },
            {
                title: '打卡数据',
                subtitle: '昨日打卡数量',
                list: [{
                    content: '新增打卡数',
                    number: '1000'
                }, {
                    content: '打卡点赞数',
                    number: '1000'
                }, {
                    content: '累计打卡数',
                    number: '1000'
                }, {
                    content: '累计点赞数',
                    number: '1000'
                }],
            },
            {
                title: '任务数据',
                subtitle: '昨日任务数量',
                list: [{
                    content: '新增任务数',
                    number: '1000'
                }, {
                    content: '任务完成数',
                    number: '1000'
                },]
            },
            ]
        }
    }
render() {
    return (
        
        <div>
            {this.state.data.map((item, index) => {
                return (
                    <Data title={item.title} subtitle={item.subtitle} list={item.list} key={index} />
                )
            })}
            <Search />
            <UserManage />
        </div>
    )
}
}
export default ContAna;