import React from 'react'
import 'antd/dist/antd.css'
import { Alert } from 'antd';

class Msg extends React.Component {
//   state = {
//     visible: false,
//   }
  render() {
      let msg=this.props.msg,show=this.props.show;
    return (
      <div>
        { 
          show? (
            <Alert
              message={msg}
              type="error"
            />
          ) :null
         
        }
      </div>
    );
  }
}
export default Msg;