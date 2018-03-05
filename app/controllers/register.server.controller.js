// Load the module dependencies
const Register = require('mongoose').model('Register');
var nodemailer = require('nodemailer');

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
exports.signup = function(req, res) {
	const register = new Register(req.body);
	//console.log('Registering..'+register.firstName);
	sendmail(register.firstName,register.email,register.program);
	sendsms(register.firstName,register.phone,register.program);
	register.sentmail=true;
	register.sentsms=true;
	register.replyemail=false;
	//console.log(register);
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

function sendmail(username,email,program){
	var prog,advisor='Kijoung Na';
	if(program=='EST Online Program'||program=='EST Off-campus Program'){
		advisor= 'Jill Mueller';

	}
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
		  user: 'isat.siuc@gmail.com',
		  pass: 'GOISATSIUC'
		}
	  });
	  
	  var mailOptions = {
		from: 'isat.siuc@gmail.com',
		to: email,
		subject: program+' Questions',
		html: '<h4>Hello '+username+'</h4><p>Thank you for your interest in the '+program+
		' offered through Southern Illinois University Carbondale. <br>The academic advisor, '+advisor+
		', will contact you shortly with more information.</p><p> <br>Have a good day.'+
		'<p><a href="http://www.isat.siu.edu">ISAT</a><br>'+ 
		'<a href="http://www.ist.siu.edu">IST Program</a><br>'+ 
		'<a href="http://www.est.siu.edu">EST Program</a><br>'+
		'<a href="http://www.trm.siu.edu">TRM Program</a><br>'+
		'<a href="https://www.facebook.com/ISAT-Southern-Illinois-University-126932176994/"> ISAT Facebook</a> <br>'+
		'<a href="https://www.instagram.com/isat_siu/">ISAT instagram</a>'+
		'<br><a href="https://www.youtube.com/channel/UCiVOGv3KjmSA6R-vyLLaikg">ISAT Youtube</a>'+
		'<br><a href="https://twitter.com/ISAT_SIU">ISAT Twitter</a>'+
		'<br><a href="https://www.linkedin.com/groups/4746405/profile">ISAT Linkedin</a></p>'
	  };
	  
	  transporter.sendMail(mailOptions, function(error, info){
		if (error) {
		  console.log(error);
		} else {
		  console.log('Email sent: ' + info.response);
		}
	  }); 
}
function sendsms(username,phone,program){
	var url,prog;
	//console.log(program);
	if(program.includes("TRM")){
		url="http://www.trm.siu.edu";
		prog="TRM program";
	}else if(program.includes("EST")){
		url="http://www.est.siu.edu";
		prog="EST program";
	}else{
		url="http://www.ist.siu.edu";
		prog="IST program";
	}
	const accountSid = 'AC7d573a3925d5638962935fe65d6b6048'; 
	const authToken = '2c4722cdbaeebcf4b488bc86f9ec6be2'; 
	 const mess = "Hello "+username+",\nThanks for your interest in the "+prog+" at SIU.\nWe will contact you shortly with more information.\n"+url
	//require the Twilio module and create a REST client 
	const client = require('twilio')(accountSid, authToken); 
	 
	client.messages.create({ 
		to: "+1"+phone, 
		from: "+12175744132", 
		body:mess , 
	})
	.then((message)=> console.log(message.sid));
}

