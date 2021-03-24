<template>
<div id="zoomerDiv">
    <span>
    Zoom: <br>
  <input type="range" id="zoomer" zvalue="1" min="1" max="5" step="0.1" v-model="zvalue"
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
        eventscale: 0
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

getEventCoordinates(e){
    var x = null;
    var y = null;
  if(/*e.type == 'touchstart' || */ e.type == 'touchmove' /* || e.type == 'touchend' || e.type == 'touchcancel' */){
        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
    } else if (e.type == 'wheel' || e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
        x = e.clientX;
        y = e.clientY;
    }
    console.log("Touch/Mouse Coord (x/y): " + x.toString() + "/" + y.toString());
    return (x, y);
},


//Zoom & Scroll
    zoom(z, mobile = false, pinchCenter = undefined) {
        //get HTML Elements
        var svgObjs =  document.getElementsByClassName("zoomObj");
        var container = document.getElementById(this.$store.getters.activeModule);
        //Set offset
        var offsetx;
        var offsety;
       
    
        offsetx = (this.getScrollTopMax(container) != 0 && this.getScrollTopMax(container) != -1 ) ? (container.scrollTop / (this.getScrollTopMax(container)/2)) : 1;
        offsety = (this.getScrollLeftMax(container) != 0 && this.getScrollLeftMax(container) != -1) ? (container.scrollLeft / (this.getScrollLeftMax(container)/2)) : 1;
      
        
    //Zoom single Objects
    
    if(svgObjs.length != 0){
    svgObjs.forEach(svgObj => {
         svgObj.style.transform="scale("+z+", "+z+")";
          
    });
    }
     

//Set scrollposition

if (!mobile){
 container.scrollTop = (z > 1) ? this.getScrollTopMax(container)/2 * offsetx : this.getScrollTopMax(container)/2;
 container.scrollLeft = (z > 1) ? this.getScrollLeftMax(container)/2 * offsety : this.getScrollLeftMax(container)/2;
 console.log(container.id + " " + container.scrollLeft); 
 console.log(pinchCenter);
 } else {
    container.scrollTop = (z > 1) ? this.getScrollTopMax(container)/2 * offsetx : this.getScrollTopMax(container)/2;
    container.scrollLeft = (z > 1) ? this.getScrollLeftMax(container)/2 * offsety : this.getScrollLeftMax(container)/2;
 }
 

 },

 reZoom() { //If any HTML-Objects are updated, this method is called to determine scale
//get HTML Elements
    var svgObjs =  document.getElementsByClassName("zoomObj");
 //Zoom single Objects
 if (svgObjs.length != 0){
    svgObjs.forEach(svgObj => {
         svgObj.style.transform="scale("+this.zvalue+", "+this.zvalue+")";
     
    });
    }  
 },

 resetZoomer(){ //reset Zoom-Slider
    var zoomer = document.getElementById('zoomer');
    if (zoomer!= null) zoomer.value = 1;
    this.zvalue = 1;
    this.reZoom();
 }


    },
     mounted() {
    var $vm = this;

    document.addEventListener('wheel', function (event){$vm.getEventCoordinates(event)})

     //Set initial position of Scroll
     var container = document.getElementById('svgContainer');
     if(container != null){
     container.scrollLeft = this.getScrollLeftMax(container)/2;
     container.scrollTop = this.getScrollTopMax(container)/2;
     }


    //Disable Pinch-to-zoom, activate for svgContainer
    document.getElementById('content').ontouchstart = function (event) {
        if(event.touches.length == 2){
            $vm.startDist = Math.round(Math.hypot(// Get the distance on move
                        Math.abs(event.touches[0].pageX - event.touches[1].pageX),
                        Math.abs(event.touches[0].pageY - event.touches[1].pageY)));
            $vm.startScale = $vm.zvalue;
            $vm.startCoord = {x: (event.touches[0].pageX + event.touches[1].pageX)/2, y: (event.touches[0].pageY + event.touches[1].pageY)/2}
        }
     }
    document.getElementById('content').ontouchmove = function (event) {
        if(event.touches.length == 2){  //more then one finger on screen
            event.preventDefault();
              
            var distNow = Math.round(Math.hypot(// Get the distance on move
                    Math.abs(event.touches[0].pageX - event.touches[1].pageX),
                    Math.abs(event.touches[0].pageY - event.touches[1].pageY)));
                    
            var eventscale = (distNow - $vm.startDist) / $vm.startDist * 2; //calc difference of actual distance and previous distance, set to event.scale
            // var coord = {x: (event.touches[0].pageX + event.touches[1].pageX)/2, y: (event.touches[0].pageY + event.touches[1].pageY)/2}
           
            
            $vm.zvalue = Math.min(5, Math.max(1, Math.round(($vm.startScale + eventscale*1.5)*100)/100));

            $vm.zoom($vm.zvalue);

/*
      var container = document.getElementById($vm.$store.getters.activeModule);
      container.scrollTop = container.scrollTop - (coord.y - $vm.startCoord.y);
      container.scrollLeft = container.scrollLeft - (coord.x - $vm.startCoord.x);
    $vm.startCoord = coord; */

        }
        }
    
    //Add Scroll-to-Zoom functionality
    document.getElementById('content').onwheel = function (event) {
        if (event.deltaY < 0) if ($vm.zvalue < 5) $vm.zvalue += 0.4; else $vm.zvalue = 5;
        if (event.deltaY > 0) if ($vm.zvalue > 1) $vm.zvalue -= 0.4; else $vm.zvalue = 1;
        event.preventDefault();
        $vm.zoom($vm.zvalue);
        $vm.reZoom();
    }
    
 }
     
}
</script>

<style>
#zoomer {
    width: 100px;
    margin-bottom: -4px;
    
}

.zoombr {
    display: none;
}

span {
white-space: nowrap;

}

@media screen and (max-width:1400px) {
#zoomer {
    width: 80px;
}

.zoombr {
    display: initial;
}

span {
white-space: break-spaces;

}
}

#zoomerDiv {
 
    top:0px;
    padding-top: 19px;
    padding-bottom: 8px;
    z-index:20;
    
}

</style>