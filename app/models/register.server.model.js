// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'RegisterSchema'
const RegisterSchema = new Schema({
	firstName:{
		type: String,
		required: 'First Name is required'
	},
	lastName: {
		type:String,
		required: 'Last Name is required'
	},
	affiliation: {
		type: String,
		// Trim the 'username' field
		required: 'affiliation is required',
		trim: true
	},
	position: {
		type: String	
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
	zip: {
		type: String
	},
	email: {
		type: String,
		required: 'email is required',
		// Validate the email format
		match: [/.+\@.+\..+/, "Please fill a valid email address"]
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

// Create the 'Register' model out of the 'RegisterSchema'
mongoose.model('Register', RegisterSchema);