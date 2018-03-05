// Load the 'index' controller
const register = require('../../app/controllers/register.server.controller');
const articles = require('../../app/controllers/articles.server.controller');

// Define the routes module' method
module.exports = function(app) {

	// Set up the 'register' routes 
    app.route('/api/register').post(register.signup);
    //app.route('/api/register/thankyou').get(register.list);
};