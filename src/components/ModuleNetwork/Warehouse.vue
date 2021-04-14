<template>
    <div @dblclick="warehouseClick" id="orderContainer" >
    <img :src="require('@/assets/ModuleTree/warehouseMT.png')" id="svg4134">
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
  top: -314px;
  left: 615px;
  width: 350px;
  height: 230px;
  transform: scale(1, 1.25);
}
@media screen and (max-width:1400px) {/* Mobile */
#svg4134 {
  top: -222px;
  left: 410px;
  width: 240px;
  height: 180px;
  transform: scale(1, 1);
}
}
</style>