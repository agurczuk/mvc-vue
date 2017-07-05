
const Vue = require('vue');
const $ = require('jquery');

const account = require('../../Components/src/account.vue');


const v = new Vue({
	el: '#app',
	data: {
		message: 'Hello vue.js world!'  
	},
	methods: {
		test: function () {
			console.log($('body'));
		},
		argh: function () {
			console.log('argh');
		}
	},
	components: {
		account: account
	}
	
});