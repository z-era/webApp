<template>
	<div class="every-little">
		<span class="little-t">{{ little }} </span><span class="little-s" :style="{color: color}">{{ littleS }}</span><i>&#xe6a3;</i>
	</div>
</template>

<script>
    export default {
    	props: ['little', 'littleS', 'color']
    }
</script>
<style>
	.every-little {
		height: 44px;
		line-height: 44px;
	    background-color: #fff;
	    margin-bottom: 10px;
	    padding-left: 15px;
	}
	.every-little .little-t {
	    font-size: 16px;
		color: rgba(151, 150, 156, 1);
	}
	.every-little .little-s {
	    font-size: 17px;
	}
	.every-little i {
		float: right;
		padding-right: 15px;
		font-family: 'iconfont';
		font-style: normal;
		color: rgba(151, 150, 156, 1);
	}
</style>