<template>
   <div>
       这是input界面
   </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    components: {}
  })
  export default class extends Vue {
    router_name: string = '';
  }
</script>

<style scoped>

</style>
