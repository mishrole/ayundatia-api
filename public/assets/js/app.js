'use strict';

function showUser(){

	const userData = state.user[0];
	const container = $('<div class="container"></div>');
	const user = $('<div class="user-container"></div>');
	const name = $('<h3 class="capitalize name bold text-center">'+ userData.name.first + ' ' + userData.name.last + '</h3>');
	const gender = $('<p class="capitalize gender">' + 'Gender: ' + userData.gender + '</p>');
	const city = $('<p class="capitalize city">'+ 'City: ' + userData.location.city +'</p>');
	const street = $('<p class="capitalize street">'+ 'Street: ' + userData.location.street +'</p>');
	const email = $('<p class="capitalize email">'+ 'Email: ' + userData.email +'</p>');
	const cell = $('<p class="capitalize cell">'+ 'Cell: ' + userData.cell +'</p>');

	user.append(name);
	user.append(gender);
	user.append(city);
	user.append(street);
	user.append(email);
	user.append(cell);
	container.append(user);

	return container;
}