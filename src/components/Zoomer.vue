<template>
<div>
    <span>
    Zoom: <br>
  <input type="range" id="zoomer" zvalue="1" min="1" max="3" step="0.1" v-model="zvalue"
      @input="zoom(zvalue)">  <br>
      {{Math.round(zvalue * 100)}}%
    </span>
    
</div>
</template>

<script>


export default {
    Name: "Zoomer",
    directives: {
     
    },
    data: () => ({
        zvalue: 1,
       
    }),


    
    methods: {
        //local methods
getScrollTopMax(ele) {
  var ref;
  return (ref = ele.scrollTopMax) != null
      ? ref
      : (ele.scrollHeight - ele.clientHeight);
},

getScrollLeftMax(ele) {
  var ref;
  return (ref = ele.scrollLeftMax) != null
      ? ref
      : (ele.scrollWidth - ele.clientWidth);
},
//Zoom & Scroll
    zoom(z) {
        //get HTML Elements
        var svgObjs =  document.getElementsByClassName("zoomObj");
       
        var container = document.getElementById('svgContainer');
        //Set offset
        var offsetx;
        var offsety;
        offsetx = (this.getScrollTopMax(container) != 0 && this.getScrollTopMax(container) != -1 ) ? (container.scrollTop / (this.getScrollTopMax(container)/2)) : 1;
        offsety = (this.getScrollLeftMax(container) != 0 && this.getScrollLeftMax(container) != -1) ? (container.scrollLeft / (this.getScrollLeftMax(container)/2)) : 1;
     //Zoom single Objects
    svgObjs.forEach(svgObj => {
         svgObj.style.transform="scale("+z+", "+z+")";
       
    });

     

//Set scroll
 container.scrollTop = (z > 1) ? this.getScrollTopMax(container)/2 * offsetx : this.getScrollTopMax(container)/2;
 container.scrollLeft = (z > 1) ? this.getScrollLeftMax(container)/2 * offsety : this.getScrollLeftMax(container)/2;

 },

 reZoom() { //If any HTML-Objects are updated, this method is called to determine scale
//get HTML Elements
    var svgObjs =  document.getElementsByClassName("zoomObj");
 //Zoom single Objects
    svgObjs.forEach(svgObj => {
         svgObj.style.transform="scale("+this.zvalue+", "+this.zvalue+")";
     
    });
 }


    },
     mounted() { //Set initial position of Scroll
     var container = document.getElementById('svgContainer');
     container.scrollLeft = this.getScrollLeftMax(container)/2;
     container.scrollTop = this.getScrollTopMax(container)/2;
     
 }
    
}
</script>

<style>
#zoomer {
    width: 100px;
}

br {
    display: none;
}

span {
white-space: nowrap;

}

@media screen and (max-width:1400px) {
#zoomer {
    width: 80px;
}

br {
    display: initial;
}

span {
white-space: break-spaces;

}
}


</style>