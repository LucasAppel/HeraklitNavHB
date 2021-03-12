<template>
<div class="ModuleList">
    <h4 @click="changeToActive">{{Arrow}} Proof Of Use</h4>
    <transition name="slide">
    <div v-if=isActive class="Sublist">
        <strong>Management</strong>
            <ul><li><div>Retailer</div></li></ul>
        <strong>Inventory Managerment</strong>
            <ul><li><div>Retailer</div></li></ul>
        <strong>Warehouse</strong>
            <ul><li><div>Retailer</div></li></ul>
        <strong>Supplier</strong><br><br>
        <strong>Customers</strong>
    
      </div>
    </transition>
</div>
</template>

<script>

export default {
    name: "ModuleNetworkNav",
    
    data: () => ({
        ArrowRight: "➡️",
        ArrowDown: "⬇️",
  
    }),
    computed: {
        Arrow: function () { if(this.isActive) {return this.ArrowDown} else return this.ArrowRight},
        isActive() {return this.$store.getters.activeModule=="proof"},
        retailerAbstr() {return this.$store.getters.mt.retailerAbstr},
        activeStr() {return this.$store.getters.mt.activeStr}
        
    },
    methods: {
      retailerClick(){this.$store.dispatch('setMT', ['retailerAbstr', false]); this.$store.dispatch('setMT', ['activeStr', "retailer"]);},

      menuClick(item=String){
            this.$store.dispatch('setMT', ['activeStr', item]);
            this.$emit('resetZoomer');
        },

        changeToActive(){
          if(!this.isActive) {
            this.$store.dispatch('setActiveModule', "proof");
            this.$emit('resetZoomer');
          }
          else {
              this.$store.dispatch('setActiveModule', 'none');
          }
        }
    },
    components: {

    },
    mounted() {

  },

}

</script>

<style>

</style>