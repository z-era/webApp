<template>
	<div class="individual">
		<title title="联系客户" path="/customer"></title>
		<div class="relative">
			<every-little little="手机"></every-little>
			<every-little little="微博"></every-little>
			<every-little little="微信"></every-little>
			<every-little little="QQ"></every-little>
			<every-little little="邮箱"></every-little>
			<every-little little="电话"></every-little>
			<every-little little="地区"></every-little>
			<every-little little="生日"></every-little>
			<every-little little="编号"></every-little>
			<every-little little="描述"></every-little>
		</div>
	</div>
</template>

<script>
    import title from '../Common/Title';
	import everyLittle from '../Common/EveryLittle';
	export default {
		components: {
			title,
			everyLittle
		}
	}
</script>

<style>
	.relative {
		margin-top: 10px;
	}
</style>