
const Vue = require('vue');
const $ = require('jquery');

const v = new Vue({
	el: '#app',
	data: {
		message: 'Fetch data!',
		serverData: []
		
	},
	computed: {
		sum: function () {
			var sum = 0;
			for (var i = 0; i < this.$data.serverData.length; i++) {
				sum += this.$data.serverData[i].value;
			}
			return sum;
		}
	}, 
	methods: { 
		fetchData: function () {
			console.log('fetch data');
			//console.log(window);

			$.ajax({
				type: 'GET',
				url: window.root_url + 'FetchData/GetData',
				success: function (data) {
					console.log(data);

					this.$data.serverData = data;
				}.bind(this),
				error: function(error) {

				}.bind(this)
			})
		}
	}
});