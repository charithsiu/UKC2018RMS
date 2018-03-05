// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'RegisterSchema'
const RegisterSchema = new Schema({
	firstName: String,
	lastName: String,
	email: {
		type: String,
		// Validate the email format
		match: [/.+\@.+\..+/, "Please fill a valid email address"]
	},
	phone: {
		type: String,
		// Trim the 'username' field
		trim: true
	},

	program: {
		type: String,
		// Validate 'provider' value existance
		required: 'Program is required'
    },
    term: {
		type: String,
		// Validate 'provider' value existance
		required: 'Term is required'
	},
	remark: {
		type: String
	},
	sentmail: {
		type: Boolean
	},
	sentsms: {
		type: Boolean
	},
	replyemail: {
		type: Boolean
	},
	otherremark: {
		type: Boolean
    },
    created: {
        type: Date,
        default: Date.now
    },
	providerId: String,
	providerData: {},
	created: {
		type: Date,
		// Create a default 'created' value
		default: Date.now
	}
});
// Set the 'fullname' virtual property
RegisterSchema.virtual('fullName').get(function() {
	return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
	const splitName = fullName.split(' ');
	this.firstName = splitName[0] || '';
	this.lastName = splitName[1] || '';
});

// Create the 'Article' model out of the 'ArticleSchema'
mongoose.model('Register', RegisterSchema);