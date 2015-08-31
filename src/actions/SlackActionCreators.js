import {
	LOAD_BUILD_SLACK, 
	LOAD_BUILD_SLACK_SUCCESS, 
	LOAD_BUILD_SLACK_FAILURE
} from './actions';
import {SLACK_API_TOKEN} from '../keys';

export function isLoaded(globalState){
	return globalState.slack && globalState.slack.loaded;
}

export function retrieveMessages(){
	return{
		types: [LOAD_BUILD_SLACK, LOAD_BUILD_SLACK_SUCCESS, LOAD_BUILD_SLACK_FAILURE],
		promise: (client) => client.get('https://slack.com/api/channels.history',{
			thirdParty: true,
			params: {
				token: SLACK_API_TOKEN,
				channel: 'C09G6FATD'
			}
		})
	}
}