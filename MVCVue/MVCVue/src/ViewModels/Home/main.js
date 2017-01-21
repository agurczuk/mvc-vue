
const Vue = require('vue');
const $ = require('jquery');

const v = new Vue({
	el: '#app',
	data: {
		message: 'Hello vue.js world!' 
	},
	methods: {
		test: function () {
			console.log($('body'));
		}
	}
});