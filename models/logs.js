const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const logSchema = new Schema(
	{
		message: {
			type: String,
			required: true,
		},
		attention: {
			type: Boolean,
			required: true,
		},
		tech: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model('Log', logSchema);
