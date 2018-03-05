// Set the 'production' environment configuration object
module.exports = {
	db: 'mongodb://charith:charitha@ds163836.mlab.com:63836/ukc2018rmsdb',//'mongodb://localhost/ukc2018registerdb',
	sessionSecret: 'productionSessionSecret',
	facebook: {
		clientID: '364284097340470',
		clientSecret: '2abf21f329f742c98f654600f3e63fcc',
		callbackURL: '/oauth/facebook/callback'
	},
	twitter: {
		clientID: 'Twitter Application ID',
		clientSecret: 'Twitter Application Secret',
		callbackURL: '/oauth/twitter/callback'
	},
	google: {
		clientID: '330977724363-6bdaek4q13tm80c5g5du061e5ru6o25o.apps.googleusercontent.com',
		clientSecret: 'YFLM6o1-6b4OhV0Dr2yF3Glc',
		callbackURL: '/oauth/google/callback'
	}
};