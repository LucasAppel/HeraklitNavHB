<template>
<div class="ModuleList">
    <h4 @click="changeToActive">{{Arrow}} Module Network</h4>
    <transition name="slide">
    <div v-show=isActive class="Sublist">
    <ul>
        <li><div>Customers <br><Switcher status="customerAbstrMNW" @checked="customerClick" /></div></li>
        <li><div>Retailer <br><Switcher status="retailerAbstrMNW" @checked="retailerClick" /></div>
         <transition name="slide">
            <ul v-show="!retailerAbstr">
                <li><div>Order Management <br><Switcher status="orderAbstrMNW" @checked="orderClick" /></div></li>
                <li><div>Inventory Management <br><Switcher status="inventoryAbstrMNW" @checked="inventoryClick" /></div></li>
                <li><div>Warehouse <br><Switcher status="warehouseAbstrMNW" @checked="warehouseClick" /></div></li>
            </ul>
         </transition>
            </li>
        <li><div>Supplier<br><Switcher status="supplierAbstrMNW" @checked="supplierClick" /></div></li>
        <li><div>Freight Forwarders<br><Switcher status="ffAbstrMNW" @checked="ffClick" /></div></li>
        
    </ul>
      </div>
    </transition>
</div>
</template>

<script>
import Switcher from '@/components/tools/Switcher.vue'
export default {
    name: "ModuleNetworkNav",
    
    data: () => ({
        ArrowRight: "►",
        ArrowDown: "▼",
  
    }),
    computed: {
        Arrow: function () { if(this.isActive) {return this.ArrowDown} else return this.ArrowRight},
        isActive() {return this.$store.getters.activeModule=='network'},

    retailerAbstr() {return this.$store.getters.mnw.retailerAbstr},
    customerAbstr() {return this.$store.getters.mnw.customerAbstr},
    supplierAbstr() {return this.$store.getters.mnw.supplierAbstr},
    ffAbstr() {return this.$store.getters.mnw.ffAbstr},
    orderAbstr() {return this.$store.getters.mnw.orderAbstr},
    inventoryAbstr() {return this.$store.getters.mnw.inventoryAbstr},
    warehouseAbstr() {return this.$store.getters.mnw.warehouseAbstr}
        
    },
    methods: {//Methods get called when clicked on Switch
        retailerClick(){this.$store.dispatch('setMNW', ['retailerAbstr', !this.retailerAbstr]);
         if (this.$store.getters.mnw.retailerAbstr == true) {
          this.$store.dispatch('setMNW', ['orderAbstr', true]);
          this.$store.dispatch('setMNW', ['inventoryAbstr', true]);
          this.$store.dispatch('setMNW', ['warehouseAbstr', true]);}},
        customerClick(){this.$store.dispatch('setMNW', ['customerAbstr', !this.customerAbstr]);},
        orderClick(){this.$store.dispatch('setMNW', ['orderAbstr', !this.orderAbstr]);},
        inventoryClick(){this.$store.dispatch('setMNW', ['inventoryAbstr', !this.inventoryAbstr]);},
        warehouseClick(){this.$store.dispatch('setMNW', ['warehouseAbstr', !this.warehouseAbstr]);},
        supplierClick(){this.$store.dispatch('setMNW', ['supplierAbstr', !this.supplierAbstr]);},
        ffClick(){this.$store.dispatch('setMNW', ['ffAbstr', !this.ffAbstr]);},

        changeToActive(){
          if(!this.isActive){ 
         
            this.$store.dispatch('setActiveModule', 'network'); //Activate Module
            /*this.$store.getters.mnw.list.forEach(element => { //Reset SubMenu
              this.$store.dispatch('setMNW', [element, true])
              });*/
                 this.$emit('resetZoomer');
              }
              else {
                 this.$store.dispatch('setActiveModule', 'none');
              }
            }
    },
    components: {
        Switcher
       

    },
    mounted() {
  },

}

</script>

<style>


 .ModuleList {
text-align: left;
padding-left: 0.8vw;
padding-right: 0.8vw;
overflow-x:hidden;

  }
  .ModuleList h4 { /* Style of Module title */
    color: rgb(0, 46, 88);
    font-size: 12.5pt;
    margin-bottom: 5px;
    border-bottom: 0;
    margin-top: 0px;
    padding-left: 3px;
    cursor: pointer;
    -webkit-touch-callout: none;
    user-select: none;
   -webkit-user-select: none;
      -khtml-user-drag: none;
      -moz-user-drag: none;
       -o-user-drag: none;
      -webkit-user-drag: none;
  }


.Sublist {
    /* Backgound for whole div of List */
    background-image: linear-gradient(to bottom left, rgba(82, 137, 209, 0.096), rgba(180, 226, 253, 0.137)30%, rgba(82, 137, 209, 0.075));
    border-radius: 6px;
    transition: 1s;
    padding-top:5px;
}

li div::after {
    /* Background for List items */
    content:'';
    width: 86%;
    height: 100%;
    top:-1.5px;
    position: absolute;
    left: 13px;
    background:  linear-gradient(to bottom right, rgba(82, 137, 209, 0.13), rgba(180, 226, 253, 0.137)30%, rgba(82, 137, 209, 0.109));
 z-index: -1;
 border-radius: 5px;
 pointer-events: none;
 }





/* Tree elemts below */

ul {
 
  padding: 0;
  margin: 0;
  padding-top: 6px;
  padding-bottom: 8px;
  position: relative;
}
li {
  list-style-type: none;
  border-left: 2px solid #000;
  margin-left: 8px;
  padding-bottom: 8px;
  
}
li div {
   
  background-origin: content-box;
  padding-left: 1em;
  position: relative;
}



li div::before {
  content:'';
  position: absolute;
  top: 0;
  left: -2px;
  bottom: 50%;
  width: 0.75em;
  border: 2px solid #000;
  border-top: 0 none transparent;
  border-right: 0 none transparent;
}
ul > li:last-child {
  border-left: 2px solid transparent;
}



 li div {
     
     
     user-select: none;
     user-zoom: none;
 }


.slide-enter-active {
   -moz-transition-duration: 0.2s;
   -webkit-transition-duration: 0.2s;
   -o-transition-duration: 0.2s;
   transition-duration: 0.2s;

}

.slide-leave-active {
   -moz-transition-duration: 0.2s;
   -webkit-transition-duration: 0.2s;
   -o-transition-duration: 0.2s;
   transition-duration: 0.2s;
  
}

.slide-enter-to, .slide-leave {
   max-height: 500px;
   overflow: hidden;
}

.slide-enter, .slide-leave-to {
   overflow: hidden;
   max-height: 0;
}


</style>