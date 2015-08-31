import mongoose from 'mongoose';

const testSchema = {
	test: String
};

const Test = mongoose.model('Test', testSchema, 'test');
export default Test;
