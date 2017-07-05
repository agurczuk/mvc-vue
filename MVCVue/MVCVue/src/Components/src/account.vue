<template>

	<li>
		<span v-show="loggedIn">{{username}} (logout)</span>
		<span v-show="!loggedIn && !showLoginForm"><a v-on:click="loginForm()">Log In</a></span>
		<span class="form form-inline" v-show="showLoginForm">
			<div class="col-md-3 col-sm-3 col-xs-12 form-group">
				<input type="text" class="form-control" id="inputSuccess2" placeholder="username">
			</div>
			<div class="col-md-3 col-sm-3 col-xs-12 form-group">
				<input type="text" class="form-control" id="inputSuccess2" placeholder="username">
			</div>
			<button>-></button>
		</span>
	</li>
</template>

<script>

	const $ = require('jquery');

	//console.log(module);

	module.exports =
	 {
	 	name: 'account',
	 	data: function () {
	 		return {
	 			loggedIn: false,
	 			username: "",
	 			showLoginForm: false,
	 			password: ""
	 		}
	 	},
	 	methods: {
	 		checkLoginStatus: function () {
	 			console.log('check login');

	 		},
	 		init: function () {
	 			this.checkLoginStatus();
	 		},
	 		loginForm: function () {

	 			this.$data.showLoginForm = true;
	 		}
	 	},
	 	mounted: function () {
	 		this.init();
	 	}
	 }

</script>

<style scoped>
	span {
		padding-top: 15px;
		display: block;
	}

</style>