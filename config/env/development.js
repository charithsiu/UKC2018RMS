// Set the 'development' environment configuration object
module.exports = {
	db: 'mongodb://localhost/ukc2018registerdb',
	sessionSecret: 'developmentSessionSecret',
	facebook: {
		clientID: '116485355692956',
		clientSecret: 'a4e512b315dad9948f9da92124222c89',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback',
		profileFields:  ['id', 'displayName', 'email', 'birthday', 'friends', 'first_name', 'last_name', 'middle_name', 'gender', 'link']
	},
	twitter: {
		clientID: 'Twitter Application ID',
		clientSecret: 'Twitter Application Secret',
		callbackURL: 'http://localhost:3000/oauth/twitter/callback'
	},
	google: {
		clientID: '330977724363-6bdaek4q13tm80c5g5du061e5ru6o25o.apps.googleusercontent.com',
		clientSecret: 'YFLM6o1-6b4OhV0Dr2yF3Glc',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	},
	email:{
		emailID:'isat.siuc@gmail.com',
		emailSecret:'GOISATSIUC'
	}

};