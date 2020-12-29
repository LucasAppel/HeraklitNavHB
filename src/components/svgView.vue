<template>
<div id="svgContainer">
  <object :data=svgObj version="1.1" type="image/svg+xml" id="svgObjID">Error, svg not supported</object>
  </div>
</template>

<script>
export default {
  name: 'svgView',
  props: {
    svgObj: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#svgContainer{
  
  align-items: top;
  width: auto;
  background-color: white;
  height:97%;
  overflow:scroll;
  border: Inset 4px #AEAEAE;
  margin-top: 5px;
  padding-bottom: 32px;

}

#svgObjID {

 transform-origin: 0% 0%;
 height: 100%;
 width:100%;
 object-fit: contain;
 
}

</style>
