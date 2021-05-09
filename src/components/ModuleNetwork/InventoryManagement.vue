<template>
    <div id="inventoryContainer" >
    <img v-hammer:doubletap="inventoryClick" :src="require('@/assets/ModuleNetwork/System_Bestandsverwaltung_MN.png')" id="imginvent">
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
  top: -400px;
  left: 491px;
  width: 270px;
  height: 165px;
}
@media screen and (max-width:1400px) {/* Mobile */
#imginvent {
  top: -270px;
  left: 327px;
  width: 183px;
  height: 112px;

}
}
</style>