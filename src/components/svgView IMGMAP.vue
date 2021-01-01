<template>
<div class="dragscroll" id="svgContainer" >
  <img :src=svgObj version="1.1" type="image/svg+xml" id="svgObjID" :usemap=map>
 
  </div>
</template>

<script>




export default {
  
  name: 'svgView',
  data: function () {
    return {map: '#' + this.svgObj}
  
  },

  props: {
    svgObj: String,
    
  }, 
  
  methods: {



    }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#svgContainer{
  
  align-items: center;
  width: auto;
  background-color: white;
  height:98%;
  overflow:scroll;
  border: 20px 20px black;
  cursor: grab;
  user-select: none;
  -webkit-user-drag: none;
  margin-top: 5px;
  padding-bottom: 50px;
  margin-bottom: 4%;
 -webkit-user-select: none;
}

#svgObjID {

  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;

 
 cursor: grab;
 transform-origin: 0% 0%;
 height: 100%;
 width:100%;
 object-fit: contain;
 -webkit-user-select: none;
}

</style>


