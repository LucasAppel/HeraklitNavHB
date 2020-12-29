<template>
    <svgView :svgObj= svgObj />
</template>

<script>
// @ is an alias to /src
import svgView from '@/components/svgView.vue'

export default {
  name: 'Home',
  data: () => ({
svgObj: require('@/svg_data/testSVG.svg')
  }),
  components: {
    svgView
  }
}
</script>
