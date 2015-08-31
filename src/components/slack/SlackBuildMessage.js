import React, {Component, PropTypes} from 'react';


class SlackBuildMessage extends Component{
	static propTypes = {
		message: PropTypes.object
	}
	render(){
		const {message} = this.props;
		return ( <li>{message.text}</li> )
	}
}

export default SlackBuildMessage;