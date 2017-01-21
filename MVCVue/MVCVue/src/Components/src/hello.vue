<template>
	<div class="panel panel-success">
		<div class="panel-body">
			<div id="hello">
				Hello component {{msg}}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'hello',
	data () {
		return {
			msg: '!!!!!'
		}
	}
}
</script>

<style scoped>
	#hello {
		background-color: #050;
		color:#fff;
		margin-top: 20px;
		padding:30px;
	}

</style>