function askQuestions () {

	var Name = prompt('What will be the most disruptive technology?');

	if (Name == 'Machine Learning') {
	console.log('Greetings')
	}	
	else if (Name == 'Internet of things') {
	console.log('Greetings')
	}
	else if (Name == 'Blockchain') {
	console.log('Greetings')
	}
	else if (Name == 'IoT') {
	console.log('Greetings')
	}
	else {
	console.log('Are you sure?');
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
