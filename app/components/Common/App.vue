<template>
	<div class="wraping">
	    <router-view 
	      class="view"
	      transition
	      transition-mode="out-in">
	    </router-view>
	</div>
</template>

<script type="text/javascript">
    import store from '../../Vuex/store'
    export default {
    	store
    }
</script>
  
<style>
</style>