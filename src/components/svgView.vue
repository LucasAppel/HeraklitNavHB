<template>
<div class ="dragscroll" id="svgContainer">
  <router-view />
  </div>
</template>

<script>




export default {
  
  name: 'svgView',
  

  props: {
   
    
  }
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
  padding-top: 2vh;
  padding-bottom: 2vh;
  height: 86vh;
  width: 85%;
  background-color: white;
  max-height:98%;
  overflow:scroll;
  border: 20px 20px black;
  cursor: grab;
  user-select: none;
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
 width: 100%;
 cursor: grab;
 transform-origin: 0% 0%;
 
 object-fit: contain;
 -webkit-user-select: none;
}

@media screen and (min-width:2000px) {
#svgContainer{
 
 position: fixed;

  height: 90vh;
  width: 90%;
  background-color: white;
  max-height:98%;
  overflow:scroll;
  border: 20px 20px black;
  cursor: grab;
  user-select: none;
 -webkit-user-select: none;
 -webkit-overflow-scrolling: touch;
 
}

}


</style>


