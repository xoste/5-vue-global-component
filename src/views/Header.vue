<template>
	<div>
		我是头
		{{textone}}
		<button @click="show">从js中获取父组件的值</button>
	</div>
</template>

<script>
    export default {
        name: "Header",
	    data() {
            return {
            
            }
	    },
	    methods: {
          show() {
              alert(this.textone)
          }
	    },
	    // 接收父组件参数的值
	    props:['textone']
    }
</script>

<style scoped>
    div {
	    height: 10rem;
	    background-color: orangered;
    }
</style>