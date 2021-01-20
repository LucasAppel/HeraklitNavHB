<template>
<div class="ModuleList">
    <h4>{{Arrow}} Module Network</h4>
    <div v-if=isActive class="sublist">
    <ul>
        <li><div>Customers</div></li>
        <li><div @dblclick="retailerClick">Retailer</div>
            <ul v-if="!retailerAbstr">
                <li><div>Order Management</div></li>
                <li><div>Inventory Management</div></li>
                <li><div>Warehouse</div></li>
            </ul>
            </li>
        <li><div>Supplier</div></li>
        <li><div>Freight Forwarders</div></li>
    </ul>
      </div>
</div>
</template>

<script>
export default {
    name: "ModuleNetworkNav",
    
    data: () => ({
        ArrowRight: "⮞",
        ArrowDown: "⮟",
  
    }),
    computed: {
        Arrow: function () { return this.ArrowDown },
        isActive() {return this.$store.getters.mnw.isActive},
        customerAbstr() {return this.$store.getters.mnw.customerAbstr},
        supplierAbstr() {return this.$store.getters.mnw.supplierAbstr},
        ffAbstr() {return this.$store.getters.mnw.ffAbstr},
        retailerAbstr() {return this.$store.getters.mnw.retailerAbstr},
        
    },
    methods: {
        retailerClick(){this.$store.dispatch('setMNW', ['retailerAbstr', !this.retailerAbstr])}
    },
    mounted() {
  },

}

</script>

<style>
 li div {
     cursor: pointer;
     user-select: none;
 }
</style>