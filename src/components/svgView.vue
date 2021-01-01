<template>
<div class ="dragscroll" id="svgContainer" v-html="svgObj">
  <div v-html="svgObj" />
  </div>
</template>

<script>




export default {
  
  name: 'svgView',
  data () {
    
  
  },

  props: {
    svgObj: String,
    
  }, 
  
  mounted() {
    
    },
   


}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
object {
z-index: 0;
cursor: grab;
}



#svgContainer{
 
 position: fixed;
  left: 5px;
  align-items: center;
  width: 85%;
  background-color: white;
  max-height:98%;
  overflow:scroll;
  border: 20px 20px black;
  cursor: grab;
  user-select: none;

  margin-top: 5px;
  padding-bottom: 50px;
  margin-bottom: 4%;
 -webkit-user-select: none;
 -webkit-overflow-scrolling: touch;
 
}

#svgObjID {
-webkit-overflow-scrolling: touch;

  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
position: relative;
 height: 80vh;
 cursor: grab;
 transform-origin: 0% 0%;
 
 object-fit: contain;
 -webkit-user-select: none;
}

</style>


