<template>
<div class="ModuleList">
    <h4>{{Arrow}} Module Network</h4>
    <div v-if=isActive class="Sublist">
    <ul>
        <li><div>Customers</div></li>
        <li><div @dblclick="retailerClick">Retailer</div>
            <ul v-if="!retailerAbstr">
                <li><div>Order Management <br><span class="switchtext">Abstract <br class="zoombr"><Switcher /> <br class="zoombr">Concrete</span></div></li>
                <li><div>Inventory Management <br><span class="switchtext">Abstract <br class="zoombr"><Switcher /> <br class="zoombr">Concrete</span></div></li>
                <li><div>Warehouse <br><span class="switchtext">Abstract <br class="zoombr"><Switcher /> <br class="zoombr">Concrete</span></div></li>
            </ul>
            </li>
        <li><div>Supplier<br><span class="switchtext">Abstract <br class="zoombr"><Switcher status="supplierAbstr" @checked="supplierClick" /> <br class="zoombr">Concrete</span></div></li>
        <li><div>Freight Forwarders<br><span class="switchtext">Abstract <br class="zoombr"><Switcher status="ffAbstr" @checked="ffClick" /> <br class="zoombr">Concrete</span></div></li>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        tewt
    </ul>
      </div>
</div>
</template>

<script>
import Switcher from './tools/Switcher.vue'
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
    methods: {//Methods get called when clicked on Switch
        retailerClick(){this.$store.dispatch('setMNW', ['retailerAbstr', !this.retailerAbstr]);},
        supplierClick(){this.$store.dispatch('setMNW', ['supplierAbstr', !this.supplierAbstr]);},
        ffClick(){this.$store.dispatch('setMNW', ['ffAbstr', !this.ffAbstr]);}
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

  }
  .ModuleList h4 { /* Style of Module title */
    color: rgb(0, 46, 88);
    margin-bottom: 5px;
    border-bottom: 0;
    margin-top: 0px;
    padding-left: 3px;
  }

.Sublist {
    /* Backgound for whole div of List */
    background-color: rgba(0, 86, 167, 0.26);
    border-radius: 6px;
}

li div::after {
    /* Background for List items */
    content:'';
    width: 88%;
    height: 100%;
    top:-1.5px;
    position: absolute;
    left: 13px;
    background-image: linear-gradient(to right, rgba(0, 162, 255, 0.212), rgba(0,0,0,0));
 z-index: -1;
 border-radius: 5px;
 pointer-events: none;
 }

 .switchtext {
   /* Size of text for Switch */
  
  font-size: 8pt;
  text-align: center;
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
     
     cursor: pointer;
     user-select: none;
     user-zoom: none;
 }
</style>