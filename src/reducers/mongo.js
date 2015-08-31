import {
	LOAD_MONGO_TEST, 
	LOAD_MONGO_TEST_SUCCESS, 
	LOAD_MONGO_TEST_FAILURE
} from '../actions/actions';

const initialState = {
	loading: false,
	loaded: false
};

export default function mongo(state = initialState, action = {}){
	switch(action.type){
		case LOAD_MONGO_TEST:
			return{
				...state,
				loading: true,
				loaded: false,
      			error: false
			};
		case LOAD_MONGO_TEST_SUCCESS:
			return{
				...state,
				loaded: true,
				loading: false,
				data: action.result
			};
		case LOAD_MONGO_TEST_FAILURE:
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


