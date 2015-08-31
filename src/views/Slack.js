import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as SlackActionCreators from '../actions/SlackActionCreators';
import {isLoaded, retrieveMessages} from '../actions/SlackActionCreators';
import SlackBuildMessage from '../components/slack/SlackBuildMessage';

class Slack extends Component {
	static propTypes = {
		messages: PropTypes.array,
		error: PropTypes.bool,
		loading: PropTypes.bool
	}
	render(){
		const {loading, error, messages, dispatch} = this.props;
		return(
			<div className="container">
				<div className="col-md-12">
					<h2>Slack Build Feed (Testing API Integration)</h2>
					<button className="btn btn-success" onClick={() => dispatch(retrieveMessages())}>Refresh Feed</button>
					{loading && 
						<div><em>Loading Slack Feed...</em></div>
					}
					{!loading && 
						<ul>
							{messages.map((message, index) => {
								return <SlackBuildMessage key={index} message={message} />
							})}
						</ul>
					}	
				</div>
			</div>

		)
	}
	static fetchData(store) {
    if (!isLoaded(store.getState())) {
      return store.dispatch(retrieveMessages());
    }
  }
}

function mapStateToProps(state) {
  return {
    messages: state.slack.data.messages,
    error: state.slack.error,
    loading: state.slack.loading
  };
}

export default connect(mapStateToProps)(Slack);