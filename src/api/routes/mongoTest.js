import Test from '../models/Test';

export default function mongoTest(){
	return new Promise((resolve, reject) => {
		Test.find(function (err, doc) {
			if(err){
				reject('There was an error connecting to Mongo!');
			}
        	resolve(doc);
    	})
	})
}