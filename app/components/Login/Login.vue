<template>
	<div class="login">
		<img class="login-logo" src="../../imgs/login.png">
		<div class="user-login">
		    <p id="hint-input" v-show="error">账号或密码错误</p>
		    <label class="count-num">账号<input type="text" v-model="counter"><i @click.stop="emptying">&#xe658;</i></label>
		    <label class="password">密码<input type="password" v-model="password"></label>
			<button @click.prevent="submit({'emailOrMobile': counter, 'passwd': password}, this.$router)">登录</button>
		</div>
	</div>
</template>

<script>
    import {loginIn, againInput} from '../../Vuex/actions/act-login';
	export default {
		name: 'Login',
		data() {
			return {
				counter: "",
				password: "",
			}
		},
		methods: {
			emptying: function() {
				this.counter = "";
			}
		},
		vuex: {
			getters: {
			    error: state => state.modLogin.error
			},
			actions: {
				submit: loginIn,
			}
		}
	}
</script>

<style>
    .login {
    	text-align: center;
    }
	.login-logo {
		width: 30%;
		margin-top: 80px;
		margin-bottom: 40px;
		padding: 3px;
		border:1 solid #999;
		border-radius: 50%;
		box-shadow: 1px 1px 10px #999;
	}
	.user-login p {
		color: #f9767f;
		font-weight: 600;
		padding-bottom: 8px;
	}
	.count-num, .password {
		display: inline-block;
		width: 100%;
		height: 50px;
		line-height: 50px;
		background-color: #fff;
	    color: #9e9ca5;
	    font-size: 20px;
	}
	.count-num input, .password input {
		width: 76%;
		border: 0;
		padding:3px 10px;
		outline: none;
	}
	.count-num {
		position: relative;
		border-bottom: 1px solid #e4e8e8;
	}
	.count-num i {
		position: absolute;
		top: 0px;
		right: 20px;
		color: #e4e8e8;
		font-family: 'iconfont';
		font-style: normal;
		font-size: 24px;
	}
	
	.user-login button {
		width: 60%;
		margin-top: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background-color: #27253a;
		border: 0;
		color: #fff;
		font-size: 20px;
		outline: none;
	}
</style>