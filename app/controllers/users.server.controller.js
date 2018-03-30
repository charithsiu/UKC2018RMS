// Load the module dependencies
const User = require('mongoose').model('User');
const passport = require('passport');
const sql=require('mssql');
const md5 = require('md5');

const dbconfig={
	server:"198.71.225.113",
	database:"kseadb_member",
	user:"mdb_admin",
	password:"mm@A5rsp$08",
	port:1433,
	pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

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
				message = 'Username already exists';
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

// Create a new controller method that signin users
exports.signin = function(req, res, next) {
	//sql.close();
	const user2 = new User(req.body);
	user2.provider = 'local'; //trampsta
	const uname=user2.username;
	const upass=user2.password;
	const pool=new sql.ConnectionPool(dbconfig).connect().then(pool => {
		return pool.request().query("SELECT * from tbl_members where mdb_admin.Tbl_Members.loginId='"+uname+"'")
		}).then(result => {
			const dbobjt = result.recordsets[0][0];
			//console.log(dbobjt);
			if(dbobjt != null){
			
			const username= dbobjt.loginId;
			const pass = dbobjt.loginPw;
			
			const md5hash= md5(upass);
			if(md5hash==pass){
				user2.firstName = dbobjt.firstName;
				user2.lastName = dbobjt.lastName;
				user2.email = dbobjt.email;
				user2.username=dbobjt.loginId;
				
					// Try saving the User
				user2.save((err) => {
					if (err) {
						req.login(user2, function (err) {
							if (err) {
								res.status(400).send(err);
							} else {
								res.json(user2);
							}
						});
						/*console.log("Already exist");
						return res.status(400).send({
							message: getErrorMessage(err)
						});*/
					} else {
						// Remove sensitive data before login
						user2.password = undefined;
						user2.salt = undefined;

						// Login the user
						req.login(user2, function (err) {
							if (err) {
								res.status(400).send(err);
							} else {
								res.json(user2);
							}
						});
					}
				});
				console.log("Invalide Username or Password");
			}else{
				console.log("err.code");
				return res.status(400).send({
					message: "Invalide Username or Password"
				});
			}
			

			}
		  //let rows = result.recordset
		  //res.setHeader('Access-Control-Allow-Origin', '*')
		  //res.status(200).json(rows);
		  sql.close();
		}).catch(err => {
		  res.status(500).send({ message: "${err}"})
		  sql.close();
		});
		sql.close();
	  
	/*sql.close();
	console.log("Singin funciton....");
	const value="tramsta";
	const conn= new sql.connect(dbconfig);
	const reqest = new sql.Request(conn);

	sql.connect(dbconfig).then(() => {
		return sql.query`SELECT * from tbl_members`
	}).then(result => {
		console.log(result);
		sql.close();
	}).catch(err => {
		console.log(err);
		sql.close();
	}) 
	sql.on('error', err => {
		console.log(err);
		sql.close();
	})
	sql.close();*/

	/*conn.connect(function (err){
		if(err){
			console.log(err);
			return;
		}
		reqest.query("SELECT * from tbl_members",function(err,recordset){
			if(err){
				console.log(err);
				return;
			}else{
				console.log(recordset);
			}
			conn.close();
		});
	});*/
	
    /*passport.authenticate('local', (err, user, info) => {
        if (err || !user) {
            res.status(400).send(info);
        } else {
            // Remove sensitive data before login
            user.password = undefined;
            user.salt = undefined;

            // Use the Passport 'login' method to login
            req.login(user, (err) => {
                if (err) {
                    res.status(400).send(err);
                } else {
                    res.json(user);
                }
            });
        }
    })(req, res, next);*/
};

// Create a new controller method that creates new 'regular' users
exports.signup = function(req, res) {
	const user2 = new User(req.body);
	user2.provider = 'local';
	
	// Try saving the User
	user2.save((err) => {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			// Remove sensitive data before login
			user2.password = undefined;
			user2.salt = undefined;
			
			// Login the user
			req.login(user2, function(err) {
				if (err) {
					res.status(400).send(err);
				} else {
					res.json(user2);
				}
			});
		}
	});
}

// Create a new controller method that creates new 'OAuth' users
exports.saveOAuthUserProfile = function(req, profile, done) {
	// Try finding a user document that was registered using the current OAuth provider
	User.findOne({
		provider: profile.provider,
		providerId: profile.providerId
	}, (err, user) => {
		// If an error occurs continue to the next middleware
		if (err) {
			return done(err);
		} else {
			// If a user could not be found, create a new user, otherwise, continue to the next middleware
			if (!user) {
				// Set a possible base username
				const possibleUsername = profile.username || ((profile.email) ? profile.email.split('@')[0] : '');

				// Find a unique available username
				User.findUniqueUsername(possibleUsername, null, (availableUsername) => {
					// Set the available user name 
					profile.username = availableUsername;
					
					// Create the user
					user = new User(profile);

					// Try saving the new user document
					user.save(function(err) {
						// Continue to the next middleware
						return done(err, user);
					});
				});
			} else {
				// Continue to the next middleware
				return done(err, user);
			}
		}
	});
};

// Create a new controller method for signing out
exports.signout = function(req, res) {
	// Use the Passport 'logout' method to logout
	req.logout();

	// Redirect the user back to the main application page
	res.redirect('/');
};

// Create a new controller middleware that is used to authorize authenticated operations 
exports.requiresLogin = function(req, res, next) {
	// If a user is not authenticated send the appropriate error message
	if (!req.isAuthenticated()) {
		return res.status(401).send({
			message: 'User is not logged in'
		});
	}

	// Call the next middleware
	next();
};