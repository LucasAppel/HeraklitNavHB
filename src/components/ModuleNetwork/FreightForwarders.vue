<template>
   <div id="ffContainer">
     <img v-hammer:doubletap="ffClick" :src="require('@/assets/ModuleNetwork/System_Speditionen_MN.png')" id="svg713"  class="padRight">
   </div>
</template>


<script>

export default {
    name: 'FreightForwarders',

     data: () => ({
  }),
  methods: {
    ffClick(){this.$emit('ffClick')}
  }


}
</script>

<style>
#ffContainer{
   pointer-events: none;
  position: absolute;

}
#svg713 {
 pointer-events: all;
 cursor: pointer;
 z-index:1;
 background-color: white;
  padding-top: 0px;
  padding-left: 0px;
  object-fit: fill;
 position: absolute;
  top: -203px;
  left: 964px;
  width: 190px;
  height: 215px;

}
@media screen and (max-width:1400px) {/* Mobile */
#svg713 {
  top: -140px;
  left: 648px;
  width: 140px;
  height: 145px;
  transform: scale(1, 1);
}
}
</style>