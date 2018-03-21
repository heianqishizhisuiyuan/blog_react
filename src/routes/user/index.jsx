

import React from 'react';
import {TreeSelect} from 'antd'

class User extends React.Component {
	constructor(props){
		super()
		this.state={
			arry: ['第一个数','第二个数']
		}
		this.onChange=this.onChange.bind(this)
		this.getHml = this.getHml.bind(this)
	}


	onChange(value) {

	console.log(typeof (this.state.arry))
		let arrry = this.state.arry.slice();
		arrry.push('你好')
		this.setState({
			arry:arrry
		})
		console.log(this.state.arry)
	}

		getHml() {
			let content = this.state.arry.map(function(index,valu){
				return<div>{index}+{valu}</div>
			})
			return content
		}


	render(){
		console.log(this.state.arry[0])

		let content=this.getHml()

  return (
    <div >
    <ul>
    	<li onDoubleClick={this.onChange}>第一个</li>
    </ul>

    <div style={{marginTop:'20px'}}>
    	{content}
    </div>
    </div>
  );
  }
}



export default User
