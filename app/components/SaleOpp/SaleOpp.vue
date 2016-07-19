<template>
    <div class="sale-opp">
        <div class="sale-header">
        	<h3><i class="func">&#xe790;</i><span>销售机会<i>&#xe661;</i></span><i class="update">&#xe782;</i></h3>
        </div>
		<div class="single" @touchstart="intoDetail(opp.id)" v-for="opp in opps">
			<h3 class="single-h">{{ opp.title }} <span>{{ opp.titleStatus }}<i>&#xe6a3;</i></span></h3>
			<table class="single-msg">
				<tr>
					<th> 指派时间: </th>
					<td>{{ opp.time }}</td>
				</tr>
				<tr>
					<th> 销售状态: </th>
					<td :style="{color: statusColors[$index]}">{{ opp.status }} </td>
				</tr>
				<tr>
					<th> 描述: </th>
					<td>{{ opp.description | limitNum }}</td>
				</tr>
			</table>
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
				]
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
			},
			
			//判断有无超过显示字数     /填充数据的时候直接对数据进行处理不必进行两次数据遍历
			descriptions() {
				var ds = [];
				this.opps.forEach(function(opp) {
					var text = opp.description;
					var len = text.length;
	
				})
				
				return ds;
			}
		},
		methods: {
			intoDetail(id) {
				this.$router.go({
					path: this.$route.path + '/saleDetail',
					query: {id}
				})
			}
		}
	}
</script>

<style>
    /*首部样式===========================================================================================*/
    .sale-header h3 {
    	height: 40px;
    	line-height: 40px;
        background-color: #fff;
        padding-bottom: 6px;
        margin-bottom: 10px;
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
	
	/*内容样式=======================================================================*/
	.single {
		padding: 10px 12px;
		background-color: #fff;
		margin-bottom: 10px;
		font-size: 18px;
	}
	.single-h {
		height: 30px;
		line-height: 30px;
		color: rgba(3, 3, 3, 1);
		font-weight: bold;
	}
	.single-h span {
		float: right;
		font-size: 12px;
	}
	.single-h span i {
		font-family: 'iconfont';
		font-style: normal;
		padding-left: 10px;
		color: rgba(151, 150, 156, 1);
	}
	.single-msg {
		width: 100%;
	}
	.single-msg tr {
		line-height: 22px;
	}
	.single-msg tr th {
		width: 78px;
		color: rgba(151, 150, 156, 1);
		font-size: 16px;
		text-align: right;
		vertical-align: top;
		font-weight: normal;
	}
	.single-msg tr td {
		padding-left: 10px;
		color: rgba(3, 3, 3, 1);
	}
	.single-msg tr:nth-child(2) td{
		font-weight: bolder;
	}
	.single-msg tr:last-child {
		font-size: 14px;
		line-height: 16px;
	}
</style>