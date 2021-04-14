<template>
    <div id="customerContainer" >
    <img @dblclick="customerClick" :src="require('@/assets/ModuleTree/customerMT.png')" id="svg1370">
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
 z-index:5;
 background-color: white;
  padding-top: 0px;
  padding-left: 0px;
  object-fit: fill;
 position: absolute;
  top: -310px;
  left: -20px;
  width: 228px;
  height: 220px;
  transform: scale(1, 1.9);
}
@media screen and (max-width:1400px) {/* Mobile */
#svg1370 {
  top: -275px;
  left: 0px;
  width: 137px;
  height: 280px;
  transform: scale(1, 1);
}

}

</style>