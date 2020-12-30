<template>
	<div>
		我是中
		{{texttwo}}
		<button @click="show">从js中获取父组件的值</button>
	</div>
</template>

<script>
    export default {
        name: "Body",
	    data() {
            return {
            
            }
	    },
	    methods: {
            show() {
                alert(this.texttwo)
            }
	    },
	    props:['texttwo']
    }
</script>

<style scoped>
    div {
	    height: 10rem;
	    background-color: greenyellow;
    }
</style>