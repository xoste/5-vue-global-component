<template>
	<div>
		我是底
		{{textthree}}
		<button @click="show">从js中获取父组件的值</button>
	</div>
</template>

<script>
    export default {
        name: "Footer",
	    data() {
            return {
            
            }
	    },
	    methods: {
            show() {
                alert(this.textthree)
            }
	    },
	    props:['textthree']
    }
</script>

<style scoped>
    div {
	    height: 10rem;
	    background-color: lightskyblue;
    }
</style>