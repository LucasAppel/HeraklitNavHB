<template>
    <svgView :svgObj= svgObj />
</template>

<script>
// @ is an alias to /src
import svgView from '@/components/svgView.vue'

export default {
  name: 'About',
  data: () => ({

svgObj: require('@/svg_data/About.svg')

  }),
  components: {
    svgView
  }
}
</script>