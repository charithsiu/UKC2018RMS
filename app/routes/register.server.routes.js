// Load the 'index' controller
const register = require('../../app/controllers/register.server.controller');

// Define the routes module' method
module.exports = function(app) {

	// Set up the 'register' routes 
    app.route('/api/register').post(register.save4step1);
    //app.route('/api/register/thankyou').get(register.list);

    app.route('/api/register/:registerId').get(register.read);
  

    app.param('registerId', register.registerByID);
};