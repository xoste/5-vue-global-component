<template>
  <div>
	  <Header textone="文本头部"></Header>
	  <Body v-bind:texttwo="text2"></Body>
	  <Footer :textthree="text3"></Footer>
  </div>
</template>

<script>
	export default {
	    data() {
	        return {
	            text2: '文本中部',
		        text3: '文本底部'
	        }
	    }
	}
</script>