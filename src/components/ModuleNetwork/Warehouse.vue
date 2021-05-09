<template>
    <div id="orderContainer" >
    <img v-hammer:doubletap="warehouseClick" :src="require('@/assets/ModuleNetwork/System_Lager_MN.png')" id="svg4134">
   </div>
</template>


<script>
export default {
    name: 'Warehouse',
     data: () => ({
  }),
      methods: {
        warehouseClick(){this.$emit('warehouseClick')}
  },

  mounted(){
      
  }
}
</script>


<style>
#orderContainer{
  pointer-events: none;
  position: absolute;

}

#svg4134 {
  pointer-events: all;
  cursor: pointer;
 z-index:2;
 background-color: white;
  padding-top: 0px;
  padding-left: 0px;
  object-fit: fill;
 position: absolute;
  top: -280px;
  left: 615px;
  width: 345px;
  height: 140px;
  transform: scale(1, 1.25);
}
@media screen and (max-width:1400px) {/* Mobile */
#svg4134 {
  top: -190px;
  left: 410px;
  width: 240px;
  height: 100px;

}
}
</style>