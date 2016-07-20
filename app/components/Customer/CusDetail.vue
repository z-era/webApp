<template>
	<div class="customers">
		<title title="客户详情" path=""></title>
		<div class="cus-logo">
			<img src="../../imgs/login.png">
		</div>
		<div class="customers-content">
			<every-little little="姓名:" :little-s="name"></every-little>
			<every-little little="性别:" :little-s="sex"></every-little>
			<every-little little="分类:" :little-s="classify"></every-little>
			<ul class="some-tags">
				<li><span>消费力:</span><span>高消费</span></li>
				<li><span>行为特征:</span><span>问询</span></li>
				<li><span>咨询状态:</span><span>待验证</span></li>
				<li><span>关注点:</span><span>旅游</span></li>
			</ul>
		</div>
		<every-little little="手机:" :little-s="phone" @touchstart="individual"></every-little>
		<ul class="some-tags sale-situation">
			<li><span>销售记录</span><span>2016-07-14  17:25</span></li>
			<li><span>成交情况:</span><span>已成交</span></li>
			<li><span>订单金额:</span><span>$179.47</span></li>
			<li><span>已付定金:</span><span>$55.74</span></li>
			<li><span>备注:</span><span>已付定金，尾款在交付后收齐</span></li>
		</ul>
	</div>
</template>

<script>
    import title from '../Common/Title';
	import everyLittle from '../Common/EveryLittle'
	export default {
		data() {
		    return {
		    	name: 'Christine Hoffman',
		    	sex: '女',
		    	classify: '潜在客户',
		    	phone: '4-(074)594-9001'
		    }	
		},
		components: {
			everyLittle,
			title
		},
		methods: {
			individual(){
				this.$route.router.go('/customer/individual')
			}
		}
	}
</script>

<style>
    .customers {
    	font-size: 16px;
    }
    .cus-logo {
    	margin: 8px 0;
    	text-align: center;
    }
	.cus-logo img {
		width: 84px;
		border-radius: 50%;
	}
	.customers-content {
		padding-left: 15px;
		background-color: #fff;
	}
	.customers .every-little {
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #ddd;
	}
	.customers-content .every-little  {
		margin-bottom: 0;
	}
	.customers .every-little span:first-child{
		display: inline-block;
		width: 60px;
		text-align: right;
		padding-right: 10px;
	}
	.customers .every-little span:first-child{
		padding-left: 15px;
	}
	.customers-content .every-little span:first-child{
		padding-left: 0;
	}
	
	.some-tags {
		background-color: #fff;
		margin-bottom: 10px;
		padding: 8px 0;
		font-size: 17px;
	}
	.some-tags li {
		height: 30px;
		line-height: 30px;
	}
	.some-tags li span:first-child {
		display: inline-block;
		width: 74px;
		text-align: right;
		color: rgba(151, 150, 156, 1);
		padding-right: 10px;
		font-size: 16px;
	}
	.sale-situation {
		padding-left: 15px;
	}
	
</style>