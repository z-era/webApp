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
		height: 44px;
		line-height: 44px;
		background-color: #fff;
		text-align: center;
		font-size: 20px;
		position: relative;
	}
	#title i{
		position: absolute;
		left: 15px;
		top: 0%;
		color: rgba(31, 183, 236, 1);
		-webkit-transform:rotateZ(90deg);
		transform: rotateZ(90deg);
	    font-size: 20px;
	}
</style>