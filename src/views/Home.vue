<template>
<div>
<svgView :svgObj= svgObj />

</div>
    
</template>

<script>
// @ is an alias to /src
import svgView from '@/components/svgView.vue'
import svgTest from '!!raw-loader!@/svg_data/testSVG.svg'


export default {
  name: 'Home',
  
  data: () => ({
svgObj: svgTest
  }),
  components: {
    svgView
  },
mounted() {
  
}

}

</script>
 

