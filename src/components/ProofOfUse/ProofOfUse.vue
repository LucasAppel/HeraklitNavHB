<template>
<div class ="dragscroll svgContainer" id="proof">

<div class="zoomObj">
       <img :src="require('@/assets/engl. Teil_I_II-2-1,engl. Teil_I_II-2-2,engl. Teil_I_II-2-3/proof.svg')" class="MTIMG">
  </div>
</div>
</template>

<script>



export default {
  
  name: 'proof',
  components: {

    
  },
  methods: { 
     
  },
  computed: {
    activeStr() {return this.$store.getters.mt.activeStr}
   
  },
  data: function () {
    return {
        
    }
  },
  mounted() {
  },

  updated(){
   
          //on update reposition all svg
          this.$emit("reZoom");
        }
}






</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.MTIMG {
  max-width: 100%;
  height: 100%;
}


</style>


<style scoped>
.zoomObj {
 min-width:60%;
 max-width: 60%;
 height: 90%;
  margin: 2% auto 0 auto;
  left:0;
  z-index: 0;
  transform-origin: 0% 0%;
  position: relative;
  cursor: grab;

  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
   object-fit: cover;
   user-select: none;
  -webkit-user-select: none;
}

@media screen and (max-width:1400px) {/* Mobile */
.zoomObj {
 
  margin: 5% auto 0 auto;
  min-width: 700px;
  max-width: 700px;
  height: 80%;
}
}
</style>