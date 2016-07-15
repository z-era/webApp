<template>
	<div class="single"  v-for="opp in opps">
		<h3 class="single-h">{{ opp.title }} <span>{{ opp.titleStatus }}<i>&#xe6a3;</i></span></h3>
		<table class="single-msg">
			<tr>
				<th> 指派时间: </th>
				<td>{{ opp.message1 }}</td>
			</tr>
			<tr>
				<th> 销售状态: </th>
				<td :style="{color: statusColors[$index]}">{{ opp.message2 }} </td>
			</tr>
			<tr>
				<th> 描述: </th>
				<td>{{ opp.message3 }}</td>
			</tr>
		</table>
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
					title: "Stephen Rice",
					titleStatus: "未成交",
					message1: "2016-07-13  16:41",
					message2: "新指派",
					message3: "Mauris non tempor quam, et lacinia sapien. "
				},
				{
					title: "Stephen Rice",
					titleStatus: "未成交",
					message1: "2016-07-13  16:41",
					message2: "待处理",
					message3: "Mauris non tempor quam, et lacinia sapien. "
				},
				{
					title: "Stephen Rice",
					titleStatus: "未成交",
					message1: "2016-07-13  16:41",
					message2: "初次接洽",
					message3: "Mauris non tempor quam, et lacinia sapien. "
				}
				]
			}
		},
		computed: {
			statusColors() {
				var colors = [];
				this.opps.forEach(function(opp) {
					colors.push(statusColors[opp.message2]);
				})
				return colors;
			}
		}
	}
</script>

<style>
	.single {
		padding: 10px 12px;
		border-bottom:1 solid #999;
		border-top: 1 solid #999;
		background-color: #fff;
		margin-bottom: 10px;
	}
	.single-h {
		height: 30px;
		line-height: 30px;
		font-size: 18px;
		font-weight: bold;
	}
	.single-h span {
		float: right;
		font-size: 13px;
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
		width: 68px;
		color: rgba(151, 150, 156, 1);
		font-size: 16px;
		text-align: right;
		vertical-align: top;
		font-weight: normal;
	}
	.single-msg tr td {
		color: #000;
		font-size: 14px;
		padding-left: 10px;
	}
	.single-msg tr:first-child td{
		font-size: 15px;
	}
	.single-msg tr:nth-child(2) td{
		font-family: 'SimHei';
		font-size: 18px;
		font-weight: 600;
	}
</style>