import {
	LOAD_BUILD_SLACK, 
	LOAD_BUILD_SLACK_SUCCESS, 
	LOAD_BUILD_SLACK_FAILURE
} from '../actions/actions';

const initialState = {
	loading: false,
	loaded: false
};

export default function slack(state = initialState, action = {}){
	switch(action.type){
		case LOAD_BUILD_SLACK:
			return{
				...state,
				loading: true,
				loaded: false,
      			error: false
			};
		case LOAD_BUILD_SLACK_SUCCESS:
			return{
				...state,
				loaded: true,
				loading: false,
				data: action.result
			};
		case LOAD_BUILD_SLACK_FAILURE:
			return{
				...state,
				loaded: false,
				loading: false,
				error: action.error
			}
		default:
			return state;
	}
}


