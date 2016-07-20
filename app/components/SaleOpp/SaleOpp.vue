<template>
    <div class="sale-opp">
        <div class="sale-header">
        	<h3><i class="func">&#xe790;</i><span>销售机会<i>&#xe661;</i></span><i class="update" :class="{updating: update}" @touchstart="updatePage">&#xe782;</i></h3>
        </div>
		<div class="single" @touchstart="intoDetail(opp.id)" v-for="opp in opps">
			<h3 class="single-h">{{ opp.title }} <span>{{ opp.titleStatus }}<i>&#xe6a3;</i></span></h3>
			<ul class="single-msg">
				<li>
					<span class="single-msg-l"> 指派时间: </span>
					<span class="single-msg-r">{{ opp.time }}</span>
				</li>
				<li>
					<span class="single-msg-l"> 销售状态: </span>
					<span class="single-msg-r" :style="{color: statusColors[$index]}">{{ opp.status }} </span>
				</li>
				<li>
					<span class="single-msg-l"> 描述: </span>
					<span class="single-msg-r" :style="{width: width}">{{ opp.description | limitNum }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
    var statusColors = {
    	"新指派": "rgba(247, 51, 97, 1)",
    	"待处理": "rgba(245, 166, 35, 1)",
    	"初次接洽": "rgba(74, 144, 226, 1)",
    	"需求确定": "rgba(74, 144, 226, 1)",
    	"方案报价": "rgba(74, 144, 226, 1)",
    	"关闭": "rgba(151, 150, 156, 1)"
    };
    
	export default {
		data() {
			return {
				opps:[
				{
					id: '1',
					title: "Stephen Rice",
					titleStatus: "未成交",
					time: "2016-07-13  16:41",
					status: "新指派",
					description: "Mauris non tempor quam, et lacinia sapien. Mauris non sdsds"
				},
				{
					id: '2',
					title: "Stephen Rice",
					titleStatus: "未成交",
					time: "2016-07-13  16:41",
					status: "待处理",
					description: "M修改文本插值的定界符。 修改文本插值的定界符。修改文本插值的定"
				},
				{
					id: '3',
					title: "Stephen Rice",
					titleStatus: "未成交",
					time: "2016-07-13  16:41",
					status: "初次接洽",
					description: "Mauris non tempor quam, et lacinia sapien. "
				}
				],
				update: false,
				width: (window.innerWidth - 112) + 'px'
			}
		},
		computed: {
			
			//状态颜色确定           /填充的时候进行数据处理更改映射只需要保存一个颜色数组
			statusColors() {
				var colors = [];
				this.opps.forEach(function(opp) {
					colors.push(statusColors[opp.status]);
				})
				return colors;
			}
		},
		methods: {
			intoDetail(id) {
				this.$router.go({
					path: this.$route.path + '/saleDetail',
					query: {id}
				})
			},
			updatePage() {
				this.update = true;
				window.location.reload();
			}
		}
	}
</script>

<style>
    /*首部样式===========================================================================================*/
    .sale-header h3 {
    	height: 44px;
    	line-height: 44px;
        background-color: #fff;
        margin-bottom: 10px;
    	text-align: center;
    	font-size: 20px;
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
	
	/*内容样式=======================================================================*/
	.single {
		padding: 10px 15px;
		background-color: #fff;
		margin-bottom: 10px;
	}
	.single-h {
		height: 26px;
		line-height: 26px;
		color: rgba(3, 3, 3, 1);
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 6px;
	}
	.single-h span {
		float: right;
		font-size: 15px;
		font-weight: normal;
	}
	.single-h span i {
		padding-left: 8px;
		color: rgba(151, 150, 156, 1);
	}
    
    /*销售机会 =============================================================================*/
	.single-msg li {
		line-height: 24px;
	}
	.single-msg-l {
		display: inline-block;
		width: 72px;
		color: rgba(151, 150, 156, 1);
		font-size: 16px;
		vertical-align: top;
		text-align: right;
	}
	.single-msg-r {
	    font-size: 17px;
		display: inline-block;
	}
	
	/*刷新动画-----------------------------------------------------------------------------*/
	.updating {
		transform-origin: 25% 50%;
		-webkit-animation: updates 1s linear infinite forwards;
	}
	@-webkit-keyframes updates {
		0% {-webkit-transform: rotateZ(0);}
		100% {-webkit-transform: rotateZ(360deg);}
	}
	@keyframes updates {
		0% {transform: rotateZ(0);}
		100% {transform: rotateZ(360deg);}
	}
</style>