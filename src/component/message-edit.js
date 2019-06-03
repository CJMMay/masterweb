
import React from 'react';
import Search from './search.js'
import Message from './message.js'
import Edit from './edit-message.js'
import head from './head.js';
class MessageEdit extends React.Component {
    render(){
        return(
            <div>
               
                <Edit />
                <Search />
                <Message />
            </div>
        )
    }
}
export default MessageEdit;