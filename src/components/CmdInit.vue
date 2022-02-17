<template>
  <div class="command-line-prefix"></div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class CmdInit extends Vue {}
</script>

<style lang="scss" scoped>
.command-line-prefix {
  .prefix-machine-name {
    color: #16c60c;
  }
  .prefix-dir {
    color: #3b78ff;
  }
}
</style>