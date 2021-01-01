<template>
<div id="svgContainer" @mousedown.left="mouseDownHandler" @mouseup.left="mouseUpHandler">
  <object  @mousedown.left="mouseDownHandler" @mouseup.left="mouseUpHandler" :data=svgObj version="1.1" type="image/svg+xml" id="svgObjID">Error, svg not supported</object>
  </div>
</template>

<script>




export default {
  
  name: 'svgView',
  data: () => ({
  pos: { top: 0, left: 0, x: 0, y: 0 },
  ele: document.getElementById('svgContainer')
  }),

  props: {
    svgObj: String
  }, 
  
  methods: {

      mouseMoveHandler(e){
      this.ele = document.getElementById('svgContainer')
      const dx = e.clientX - this.pos.x;
      const dy = e.clientY - this.pos.y;

       // Scroll the element
    this.ele.scrollTop = this.pos.top - dy;
    this.ele.scrollLeft = this.pos.left - dx;
    },

  mouseUpHandler(){
    this.ele = document.getElementById('svgContainer')
    this.ele.style.cursor = 'grab';
    this.ele.style.removeProperty('user-select');
    document.removeEventListener('mousemove', this.mouseMoveHandler);
  },

    mouseDownHandler(e){
      console.log("MouseDown")
      this.ele = document.getElementById('svgContainer')
      this.pos = {
        // The current scroll 
        left: this.ele.scrollLeft,
        top: this.ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
    };
    e.preventDefault();
    

document.addEventListener('mousemove', this.mouseMoveHandler);
const mouseUpHandler = function() {
    this.ele = document.getElementById('svgContainer')
    this.ele.style.cursor = 'grab';
    this.ele.style.removeProperty('user-select');
    document.removeEventListener('mousemove', this.mouseMoveHandler);
    
};
document.addEventListener('mouseup', mouseUpHandler);
    }
    


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
 
}

</style>


