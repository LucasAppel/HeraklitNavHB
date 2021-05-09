<template>
    <div id="customerContainer" >
    <img v-hammer:doubletap="customerClick" :src="require('@/assets/ModuleNetwork/System_Kunden_MN.png')" id="svg1370">
   </div>
</template>


<script>
export default {
    name: 'Customer',
     data: () => ({
  }),
    methods: {
    customerClick(){this.$emit('customerClick')}
  },

  mounted(){
      
  }
}
</script>


<style>
#customerContainer{
  pointer-events: none;
  position: absolute;
}

#svg1370 {
  pointer-events: all;
  cursor: pointer;
 z-index:25;
 background-color: white;
  padding-top: 0px;
  padding-left: 0px;
  object-fit: fill;
 position: absolute;
  top: -387px;
  left: -113px;
  width: 321px;
  height: 380px;
  
}
@media screen and (max-width:1400px) {/* Mobile */
#svg1370 {
  top: -270px;
  left: -120px;
  width: 238px;
  height: 261px;
}

}

</style>