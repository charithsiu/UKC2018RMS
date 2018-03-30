// Load the module dependencies
const Register = require('mongoose').model('Register');


// Create a new error handling controller method
const getErrorMessage = function(err) {
	// Define the error message variable
	let message = '';

	// If an internal MongoDB error occurs get the error message
	if (err.code) {
		switch (err.code) {
			// If a unique index error occurs set the message error
			case 11000:
			case 11001:
				message = 'Student already exists';
				break;
			// If a general error occurs set the message error
			default:
				message = 'Something went wrong';
		}
	} else {
		// Grab the first error message from a list of possible errors
		for (const errName in err.errors) {
			if (err.errors[errName].message) message = err.errors[errName].message;
		}
	}

	// Return the message error
	return message;
};


// Create a new controller method that creates new 'regular' users
exports.save4step1 = function(req, res) {
	console.log("I am in Save function");
	
	const register = new Register(req.body);
	register.save((err) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			//res.redirect('/');
			res.status(200).json(register);
		}
	});
}

exports.sinup = function(req, res) {
	console.log("I am in Singup function");
	res.json(req.register);
}

exports.read = function(req, res) {
	console.log("I am in read function");
	res.json(req.register);
	
};


exports.create = function(req, res) {
    // Create a new article object
    const register = new Register(req.body);

    // Try saving the article
    register.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the article 
            res.json(register);
        }
    });
};

exports.list = function(req, res) {
    // Use the model 'find' method to get a list of articles
   res.redirect('/app/register/thankyou');
};

exports.registerByID = function(req, res, next, id) {
	// Use the model 'findById' method to find a single register 
	console.log("I am in find function");
    Register.findById(id).populate().exec((err, register) => {
        if (err) return next(err);
        if (!register) return next(new Error('Failed to load register ' + id));

        // If an article is found use the 'request' object to pass it to the next middleware
        req.register = register;

        // Call the next middleware
        next();
    });
};

