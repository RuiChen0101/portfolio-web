<template>
  <div class="command-line">
    <span class="machine-name">ruichen@Portfolio</span>
    <span>:</span>
    <span class="dir">{{ this.dirPath }}</span>
    <span>$</span>
    <span class="command">{{ this.command }}</span>
  </div>
</template>

<script lang="ts">
import { prop, Vue } from "vue-class-component";

class CommandLineProps {
  dirPath = prop({
    default: "~",
  });
  command = prop({
    default: "",
  });
}

export default class CommandLine extends Vue.with(CommandLineProps) {}
</script>

<style lang="scss" scoped>
.command-line {
  .machine-name {
    color: #16c60c;
  }
  .dir {
    color: #3b78ff;
  }
  .command {
    margin-left: 8px;
  }
}
</style>