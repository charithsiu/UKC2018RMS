// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'RegisterSchema'
const RegisterSchema = new Schema({
	firstName:{
		type: String,
		required: 'First Name is required'},
	lastName: {
		type:String,
		required: 'Last Name is required'},
	email: {
		type: String,
		required: 'email is required',
		// Validate the email format
		match: [/.+\@.+\..+/, "Please fill a valid email address"]
	},
	affiliation: {
		type: String,
		// Trim the 'username' field
		required: 'Program is required',
		trim: true
	},

	position: {
		type: String
		// Validate 'provider' value existance
		
    },
    address: {
		type: String,
		// Validate 'provider' value existance
		required: 'address is required'
	},
	city: {
		type: String,
		required: 'City is required'
	},
	state: {
		type: String,
		required: 'State is required'
	},
	confirmemail: {
		type: Boolean
	},
	submitconfirm: {
		type: Boolean,
		default:false,
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