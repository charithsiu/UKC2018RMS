// Load the 'index' controller
const index = require('../controllers/thankyou.server.controller');

// Define the routes module' method
module.exports = function(app) {
	// Mount the 'index' controller's 'render' method
	app.get('/thankyou', index.render);
};