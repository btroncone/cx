import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import * as MongoActionCreators from '../actions/MongoActionCreators';
import {isLoaded, mongoTest} from '../actions/MongoActionCreators';


class MongoTest extends Component {
	static propTypes = {
		messages: PropTypes.array,
		error: PropTypes.object,
		loading: PropTypes.bool
	}
	render(){
		const {loading, error, messages} = this.props;
		return(
			<div className="container">
				<div className="col-md-12">
					<h2>Testing Mongo API Integration</h2>
					<h3>{messages}</h3>
				</div>
			</div>

		)
	}
	static fetchData(store) {
    if (!isLoaded(store.getState())) {
      return store.dispatch(mongoTest());
    }
  }
}

function mapStateToProps(state) {
  return {
    messages: state.mongo.data,
    error: state.mongo.error,
    loading: state.mongo.loading
  };
}

export default connect(mapStateToProps)(MongoTest);