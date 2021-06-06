<template>
<div id="zoomerDiv">
    Zoom: <br>
  <input type="range" id="zoomer" min="1.0" max="5.0" step="0.1" v-model="zvalue" @input="zoom(zvalue)" disabled="true"><br>
    {{Math.round(zvalue * 100)}}%
</div>
</template>

<script>


export default {
    Name: "Zoomer",
    data: () => ({
        zvalue: 1.0,
        startScale:1.0,
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



initScroll(){
    var container = document.getElementById(this.$store.getters.activeModule);
    var scrollTopMax = this.getScrollTopMax(container);
    var scrollLeftMax = this.getScrollLeftMax(container);
    container.scrollTop = scrollTopMax/2;
    container.scrollLeft = scrollLeftMax/2;
},


//Zoom & Scroll
    zoom(z) {
        //get HTML Elements
        var zObjs =  document.getElementsByClassName("zoomObj");
        var container = document.getElementById(this.$store.getters.activeModule);
        //Set offset
        var offsetx;
        var offsety;
        var scrollTopMax = this.getScrollTopMax(container);
        var scrollLeftMax = this.getScrollLeftMax(container);
        offsetx = (scrollTopMax != 0 && scrollTopMax != -1 ) ? (container.scrollTop / (scrollTopMax/2)) : 1;
        offsety = (scrollLeftMax != 0 && scrollLeftMax != -1) ? (container.scrollLeft / (scrollLeftMax/2)) : 1;
        
    //Zoom single Objects
    if(zObjs.length != 0){
    zObjs.forEach(zObj => {
         zObj.style.transform="scale("+z+", "+z+")";  
        });
    }

    //Set scrollposition
    scrollTopMax = this.getScrollTopMax(container);
    scrollLeftMax = this.getScrollLeftMax(container);
    container.scrollTop = (z > 1) ? Math.min(scrollTopMax/2 * offsetx, scrollTopMax) : scrollTopMax/2;
    container.scrollLeft = (z > 1) ? Math.min(scrollLeftMax/2 * offsety, scrollLeftMax) : scrollLeftMax/2;
 },

 reZoom() { //If any HTML-Objects are updated, this method is called to determine scale
//get HTML Elements
    var zObjs =  document.getElementsByClassName("zoomObj");
 //Zoom single Objects
 if (zObjs.length != 0){
    zObjs.forEach(zObj => {
         zObj.style.transform="scale("+this.zvalue+", "+this.zvalue+")";
     
    });
    }  
 },

 resetZoomer(){ //reset Zoom-Slider and value
    var zoomer = document.getElementById('zoomer');
    if (zoomer!= null) zoomer.value = 1.0;
    this.zvalue = 1.0;
    this.reZoom();
 }


    },

mounted() {
    var $vm = this;

    //Disable Pinch-to-zoom, activate for svgContainer
    document.getElementById('content').ontouchstart = function (event) {
        if(event.touches.length == 2){
            $vm.startDist = Math.round(Math.hypot(// Get the distance on move
                        Math.abs(event.touches[0].pageX - event.touches[1].pageX),
                        Math.abs(event.touches[0].pageY - event.touches[1].pageY)));
            //$vm.startCoord = {x: (event.touches[0].pageX + event.touches[1].pageX)/2, y: (event.touches[0].pageY + event.touches[1].pageY)/2}       
            $vm.startScale = $vm.zvalue;
        }
     }
    document.getElementById('content').ontouchmove = function (event) {
        if(event.touches.length == 2){  //two finger on screen
            event.preventDefault();
            if (!document.getElementById('zoomer').disabled){ //Just zoom if enabled
                var distNow = Math.round(Math.hypot(// Get the distance on move
                        Math.abs(event.touches[0].pageX - event.touches[1].pageX),
                        Math.abs(event.touches[0].pageY - event.touches[1].pageY)));
                        
                var eventscale = (distNow - $vm.startDist) / $vm.startDist; //calc difference of actual distance and previous distance, set to event.scale
                //var coord = {x: (event.touches[0].pageX + event.touches[1].pageX)/2, y: (event.touches[0].pageY + event.touches[1].pageY)/2}   

                $vm.eventscale = eventscale;
                // Set zvalue to startscale + eventscale
                $vm.zvalue = Math.min(5.0, Math.max(1.0, (parseFloat($vm.startScale) + parseFloat(eventscale)*2.5)));
        
                $vm.zoom($vm.zvalue);
            }

        }
        }
    
    //Add Scroll-to-Zoom functionality
    document.getElementById('content').onwheel = function (event) {
        event.preventDefault();
        if (!document.getElementById('zoomer').disabled){
            var zoomFac = 0.4;
            if (event.deltaY < 0) $vm.zvalue = Math.min(parseFloat($vm.zvalue) + zoomFac, 5.0);
            if (event.deltaY > 0) $vm.zvalue = Math.max(parseFloat($vm.zvalue) - zoomFac, 1.0);
            $vm.zoom($vm.zvalue);
        }
    }
    
 }
     
}
</script>

<style>
#zoomer {
    width: 100px;
    margin-bottom: -4px;
    
}
#zoomerDiv {
 
    top:0px;
    padding-top: 19px;
    padding-bottom: 8px;
    z-index:20;
}

@media screen and (max-width:1400px) {
    #zoomer {
    width: 80px;
    }
}

</style>