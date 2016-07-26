<template>
    <div class="sale-opp">
        <div class="sale-header">
        	<h3><i class="func">&#xe790;</i><span>销售机会<i @touchstart="selectingMsg">&#xe661;</i></span><i class="update" :class="{updating: update}" @touchstart="updatePage">&#xe782;</i></h3>
        	<div class="selectingStatuses" v-if="select">
        		<ul class="selectingStatus">
        			<li>所有</li>
        			<li>未读</li>
        			<li>待处理</li>
        			<li>处理中</li>
        			<li>关闭</li>
        			<li>未成交</li>
        			<li>已成交</li>
        		</ul>
        	</div>
        </div>
		<div class="single" @touchstart="intoDetail(opp.id)" v-for="opp in opps">
			<h3 class="single-h">{{ opp.title }} <span v-p-status="pStatus">{{ opp.titleStatus }}<i>&#xe6a3;</i></span></h3>
			<ul class="single-msg">
				<li>
					<span class="single-msg-l"> 指派时间: </span>
					<span class="single-msg-r">{{ opp.time }}</span>
				</li>
				<li>
					<span class="single-msg-l"> 销售状态: </span>
					<span class="single-msg-r" v-s-status="sStatus">{{ opp.status }} </span>
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
				pStatus: 0,            //已成交，未成交状态     暂用
				sStatus: 0,            //销售状态               暂用
				select: false          //是否显示状态筛选栏
			}
		},
		computed: {
			width() {
				return (window.innerWidth - 112) + 'px';
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
			},
			selectingMsg() {
                this.select = this.select ? false: true;
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

	/*状态选择样式 -------------------------------------------------------------------*/
	.selectingStatuses {
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 44px;
		background-color: rgba(0,0,0, 0.3);
	}
	.selectingStatus {
		width: 44%;
		margin: 0 auto;
		font-size: 17px;
		background-color: rgb(248, 248, 248);
	}
	.selectingStatus li {
		height: 40px;
		line-height: 40px;
		text-align: center;
	}
	.selectingStatus li:nth-child(2), .selectingStatus li:nth-child(5) {
		border-bottom: 1px solid #ddd;
	}

	.activeStatus {
		color: rgba(48, 188, 237, 1);
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
		color: rgba(155, 155, 155, 1);
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