<template>
	<div class="sale-detail">
		<title title="销售状态" path="/sale"></title>
		<div class="detail-head">
			<div class="detail-logo">
				<img src="../../imgs/login.png">
				<div class="detail-logo-msg">
					<h3> {{ message }} <i>&#xe71c;</i></h3>
					<p> {{ phone }} </p>
				</div>
			</div>
			<ul class="single-msg">
				<li>
					<span class="single-msg-l"> 指派时间: </span>
					<span class="single-msg-r">{{ time }}</span>
				</li>
				<li>
					<span class="single-msg-l"> 描述: </span>
					<span class="single-msg-r" :style="{width: width}">{{ description | limitNum }}</span>
				</li>
			</ul>
			
		</div>
		<every-little little="销售状态:" :little-s="status" @click="selectStatus" color="rgba(247, 51, 97, 1)"></every-little>
		<every-little little="成交情况:" :little-s="titleStatus"></every-little>
		<div class="client-status">
			<time> {{ cTime }}</time>
			<p> {{ cStatus }}</p>
		</div>
		<button  class="add-client-record">+ 添加跟进记录</button>
	</div>
</template>

<script>
    import everyLittle from '../Common/EveryLittle';
    import title from '../Common/Title';
	export default {
		data() {
			return {
				message: 'Madison Campbell',
				phone: '1-(625)449-9723',
				time: '2016-07-13 16:41',
				description: 'Reveal the plugins folder, open Content Generator Sketch Plugin, then paste your text into the this file: Data > Text > my-text.js',
				cTime: '2016-07-14 17:25',
				cStatus: '客户还有疑虑，将进一步跟进',
				titleStatus: "未成交",
				status: "新指派",
				width: (window.innerWidth - 112) + 'px'
			}
		},

		components: {
			everyLittle,
			title
		},
		methods: {
		    selectStatus() {
		    	this.$route.router.go('/sale/saleStatus')
		    }	
		},
		route: {
			data ({to}) {
				console.log(to.query.id);
			}
		}	
	}
</script>

<style>
    /*head 模块样式=================================================================================*/
    
    /*头像部分样式----------------------------------------------------------------------------------*/
    .detail-head {
    	margin: 10px 0;
    	padding: 5px 15px;
    	background-color: #fff;
    }
	.detail-logo {
		box-sizing: border-box;
		height: 70px;
		padding: 8px 0;
	}
	.detail-logo  img {
		float: left;
		width: 60px;
		border-radius: 50%;
	}
	.detail-logo-msg {
	    float: left;
	    margin-left: 10px;
	}
	.detail-logo-msg h3 {
		margin-top: 4px;
		font-size: 18px;
		font-weight: bold;
	}
	.detail-logo-msg h3 i {
		font-family: 'iconfont';
		font-style: normal;
		color: rgba(74, 144, 226, 1);
	}
	.detail-logo-msg p {
		margin-top: 8px;
		font-size: 17px;
	    color:rgba(31, 183, 236, 1);
	}
	
	/*头部信息栏样式-------------------------------------------------------------------*/
	.single-msg {
		clear: both;
	}
	
	/*客户跟进记录======================================================================*/
	.client-status {
		background-color: #fff;
		margin-bottom: 10px;
		padding: 12px 15px;
	}
    .client-status time{
    	font-size: 16px;
    	color: rgba(151, 150, 156, 1);
    }
    .client-status p {
    	padding-top:4px;
    	font-size: 17px;
    }
    
    .add-client-record {
        width: 100%;
    	height: 44px;
    	line-height: 44px;
    	border: none;
    	background-color: #fff;
    	font-size: 17px;
        color: rgba(31, 183, 236, 1);
        outline: none;
    }
</style>