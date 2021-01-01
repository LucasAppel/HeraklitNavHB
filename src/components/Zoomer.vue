<template>
<div>Zoom: 
  <input type="range" id="zoomer" zvalue="1" min="1" max="2" step="0.1" v-model="zvalue"
      @input="zoom(zvalue)"> 
    
</div>
</template>

<script>
import $ from 'jquery'

export default {
    Name: "Zoomer",
    directives: {
        $
    },
    data: () => ({
        zvalue: 1,
        oldz: 1
    }),
    methods: {


    zoom(z) {
 document.getElementById("svgObjID").style.transform="scale("+z+", "+z+")";
 document.getElementById("svgObjID").style.width=(z*100)+"%";
 
  this.scroll(document.getElementById("svgContainer"));
 }, 
 

    }
    
}
</script>

<style>


</style>