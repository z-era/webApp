<template>
    <div class="sale-statuses">
        <title title="销售状态" path="/sale/saleDetail"></title>
		<ul class="sale-status">
			<li v-for="status in statuses" @click="select($index)">
				{{ status.msg }}<i v-show="status.flag">&#xe645;</i>
			</li>
		</ul>
	</div>
</template>

<script>
    import title from '../Common/Title'
	export default {
		data() {
			return {
				statuses: [
				{msg: '待处理', flag: true},
				{msg: '初次接洽', flag: false},
				{msg: '需求确定', flag: false},
				{msg: '方案报价', flag: false},
				{msg: '关闭', flag: false}
				]
			}
		},
		components: {
			title
		},
		methods: {
			select(index) {
				this.statuses.forEach(function(status, i) {
					if( i !== index) {
						status.flag = false;
					} else {
						status.flag = true;
					}
				})
			}
		}
	}
</script>
<style>
	.sale-status {
		margin-top: 10px;
		padding-left: 15px;
		font-size: 17px;
	    background-color: #fff;
	}
	.sale-status li {
		height: 45px;
		line-height: 45px;
		position:relative;
	}
	.sale-status li:after {
	    content: '';
	    position: absolute;
        left: 0;
        background-color: #ddd;
        width: 100%;
        height: 1px;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
	}
	.sale-status li i {
		color: rgba(31, 183, 236, 1);
		float: right;
		padding-right: 15px;
		font-weight: bold;
	}
	.sale-status li:last-child {
	    border: none;
	    box-shadow: none;
	}
</style>