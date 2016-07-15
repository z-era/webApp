<template>
	<div class="sale-opp">
		<div class="sale-header">
			<h3><i class="func">&#xe790;</i><span>销售机会<i>&#xe661;</i></span><i class="update">&#xe782;</i></h3>
		</div>
		<single></single>
	</div>
</template>

<style>
    .sale-header h3 {
    	font-family: "Simhei";
    	height: 40px;
    	line-height: 40px;
        background-color: #fff;
        padding: 0 10px 6px 10px;
        margin-bottom: 10px;
        border-bottom: 1 solid #999;
    	text-align: center;
    	font-size: 18px;
    }
	.sale-header h3 i{
		font-family: 'iconfont';
		font-style: normal;
		color: rgba(48, 188, 237, 1);
	}
	.sale-header span i{
		padding-left: 4px;
	}
	.sale-header h3 .func {
		font-size: 20px;
		float: left;
		padding-left: 15px;
	}
	.sale-header h3 .update {
		font-size: 20px;
		float: right;
		padding-right: 15px;
	}
</style>
<script>
    import Single from './Single.vue'
	export default {
		components: {
			single: Single
		}
	}
</script>