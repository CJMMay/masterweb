import React from 'react';
import './search.css'
import { Input, InputNumber,Button } from 'antd';
class Search extends React.Component {
    render() {
        return (
            <div className='search-global'>
                <div className='search-head'>搜索条件</div>
                <div className='search-content'>
                    <Input placeholder="" className='search-input'/>
                    <div className='search-right'>
                        <span className='search-page'>每页显示</span>
                        <InputNumber min={1} max={10} defaultValue={5} onChange='' className='showNum'/>
                        <Button type="primary" icon="search" className='search-but'>搜索</Button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search;