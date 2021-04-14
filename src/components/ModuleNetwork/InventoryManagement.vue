<template>
    <div id="inventoryContainer" >
    <img v-hammer:doubletap="inventoryClick" :src="require('@/assets/ModuleTree/inventoryMT.png')" id="imginvent">
   </div>
</template>


<script>
export default {
    name: 'InventoryManagement',
     data: () => ({
  }),
  methods: {
    inventoryClick(){this.$emit('inventoryClick')}
  },
  mounted(){
      
  }
}
</script>


<style>
#inventoryContainer{
  pointer-events: none;
  position: absolute;

}

#imginvent {
  pointer-events: all;
  cursor: pointer;
 z-index:2;

  padding-top: 0px;
  padding-left: 0px;
  object-fit: fill;
 position: absolute;
  top: -350px;
  left: 377px;
  width: 380px;
  height: 80px;
  transform: scale(1, 3);
}
@media screen and (max-width:1400px) {/* Mobile */
#imginvent {
  top: -285px;
  left: 261px;
  width: 240px;
  height: 160px;
  transform: scale(1, 1);
}
}
</style>