
const Vue = require('vue');
const $ = require('jquery');
window.jQuery = window.$ = $;

const bootstrap = require('bootstrap/dist/js/bootstrap.js');

const v = new Vue({
	el: '#app',
	data: {
		message: 'Gentelella!'
	},
	computed: {
	}, 
	methods: {

	}
}); 