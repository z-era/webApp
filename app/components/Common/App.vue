<template>
	<div class="wraping">
	    <router-view 
	      class="view"
	      transition
	      transition-mode="out-in">
	    </router-view>
		<ul class="footer">
			<li v-link="{path: '', activeClass: 'footer-active'}"><i>&#xe802;</i><br />客户</li>
			<li v-link="{path: '', activeClass: 'footer-active'}"><i>&#xe800;</i><br />销售机会</li>
			<li v-link="{path: '', activeClass: 'footer-active'}"><i>&#xe801;</i><br />设置</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
    import store from '../../Vuex/store'
    export default {
    	store
    }
</script>
  
<style>
	.footer {
		height: 120px;
		background-color: #fff;
		font-size: 16px;
		color: #fff;
	}
	.footer li {
		float: left;
		text-align: center;
	}
	.footer li i{
		font-style: normal;
		font-size: 28px;
	}
	.footer-active {
		color: #000;
	}
	
</style>