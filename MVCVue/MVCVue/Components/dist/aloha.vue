<template>
	<div class="panel panel-success">
		Welcome to alhoa component
		<customHello></customHello>
	</div>
</template>

<script>

var hello = require('./hello.vue');

export default {
	name: 'aloha',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	}
	,components: {
		customHello: hello
	}
	}
</script>


