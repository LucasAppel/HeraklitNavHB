<template>
<div>Zoom: 
  <input type="range" id="zoomer" zvalue="1" min="1" max="1.5" step="0.1" v-model="zvalue"
      @input="zoom(zvalue)"> 
    
</div>
</template>

<script>
export default {
    Name: "Zoomer",
    data: () => ({
        zvalue: 1
    }),
    methods: {

    zoom(z) {
 document.getElementById("svgObjID").style.transform="scale("+z+", "+z+")";
 document.getElementById("svgObjID").style.width=(z*100)+"%";}


    }
}
</script>

<style>


</style>