function askQuestions () {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;
	console.log('User is named ' + fullName);

	var age = prompt ('How old are you?');
	age = parseInt (age);

	if (age >=18) {
	console.log('User is an adult')
	} else if (age >= 13) {
		console.log('User is a teenager');
	} else {
		console.log('User is a child');
}


	if (firstName == 'General' && lastName != 'Assembly') {
	console.log('Greetings')
	}

	var faveColours = prompt ('What is your favourite colour?');
	faveColour = faveColour.toLowerCase().trim();

	if (faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'blue' ||
		faveColour == 'yellow') {

		$('h1').css ('color' , faveColour);
	}
}

//when the page has loaded
$(function() {

	//when the user clicks the image, interrogate them 
	$('img').on('click', askQuestions);	

	//when the user clicks an h3
	$('h3').on('click',function() {		
		
		//toggle the next element
		$(this).next().slideToggle(5000);

	});
});