<template>
  <div id="supplierContainer">
    <img v-hammer:doubletap="supplierClick" :src="require('@/assets/ModuleNetwork/System_Lieferant_MN.png')" id="svg186"  class="padRight">
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
  document.getElementsByClassName("padRight").forEach(element => {
    element.style.paddingRight = "24vw";
  });
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
  left: 960px;
  width: 190px;
  height: 180px;

}
@media screen and (max-width:1400px) {/* Mobile */
#svg186 {
  top: 10px;
  left: 656px;
  width: 120px;
  height: 105px;

}

.padRight{
  padding-right: 24vw;
  transition: padding 0.6s;
}
}
</style>