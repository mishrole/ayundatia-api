'use strict';

const render = (root) => {
	root.empty();
	root.append(showUser());
}

const state = {
	user: null
}

$( _ => {
	$.getJSON('https://randomuser.me/api/', (data) =>{
		state.user = data.results;
		const root = $('.root');
		render(root);
	});
})