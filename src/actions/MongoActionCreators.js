import {
	LOAD_MONGO_TEST, 
	LOAD_MONGO_TEST_SUCCESS, 
	LOAD_MONGO_TEST_FAILURE
} from './actions';

export function isLoaded(globalState){
	return globalState.mongotest && globalState.mongotest.loaded;
}

export function mongoTest(){
	return{
		types: [LOAD_MONGO_TEST, LOAD_MONGO_TEST_SUCCESS, LOAD_MONGO_TEST_FAILURE],
		promise: (client) => client.get('/mongoTest')
	}
}