import React from 'react';
import './head.css';
import {Breadcrumb} from 'antd';
class Head extends React.Component {
    render() {
        return (
            <div className='content-head'>
                <Breadcrumb className='head-name'>
                    <Breadcrumb.Item>统计</Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <a href="/">用户分析</a>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}
export default Head;