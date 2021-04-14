<template>
  <div id="supplierContainer">
    <img v-hammer:doubletap="supplierClick" :src="require('@/assets/ModuleTree/supplierMT.png')" id="svg186"  class="padRight">
  </div>
</template>


<script>

export default {
    name: 'Supplier',
     data: () => ({
  }),
    methods: {
      supplierClick(){this.$emit('supplierClick')}
  },
   mounted(){
 
  }
}
</script>

<style>
#supplierContainer{
  pointer-events: none;
  position: absolute;
  height: 0;
  width: 0;
  top:0;
}

#svg186 {
  pointer-events: all;
  cursor: pointer;
 z-index:5;
 background-color: white;
  padding-top: 0px;
  padding-left: 0px;
  object-fit: fill;
 position: relative;
  top: 0px;
  left: 885px;
  width: 190px;
  height: 180px;

}
@media screen and (max-width:1400px) {/* Mobile */
#svg186 {
  top: -2px;
  left: 656px;
  width: 120px;
  height: 130px;
  transform: scale(1, 1);
}

.padRight{
  padding-right: 25vw;
  transition: padding 0.6s;
}
}
</style>