<template>
	<h2 id="title"><i @click="reback(path)">&#xe661;</i>{{ title }}</h2>
</template>

<script>
	export default {
		props: ['title', 'path'],
		methods: {
			reback(path) {
				this.$route.router.go(path)
			}
		}
	}
</script>
 
<style>
	#title {
		box-sizing: border-box;
		padding: 8px 0 10px 15px;
		background-color: #fff;
		text-align: center;
		font-size: 22px;
	}
	#title i{
		color: rgba(31, 183, 236, 1);
		-webkit-transform:rotateZ(90deg);
		transform: rotateZ(90deg);
	    float: left;
	    font-size: 20px;
	}
</style>