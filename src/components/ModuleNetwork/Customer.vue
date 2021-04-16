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
  top: -440px;
  left: -113px;
  width: 321px;
  height: 480px;
  
}
@media screen and (max-width:1400px) {/* Mobile */
#svg1370 {
  top: -290px;
  left: -70px;
  width: 208px;
  height: 340px;
}

}

</style>