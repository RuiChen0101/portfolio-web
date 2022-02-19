<template>
  <p id="loading">
    {{ this.animation[this.index] }}
  </p>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class LoadingPrint extends Vue {
  private animation = ["/", "-", "\\", "|"];
  private index = 0;

  mounted(): void {
    setInterval(this.onTick, 100);
  }

  private onTick(): void {
    this.index = (this.index + 1) % 4;
  }
}
</script>

<style lang="scss" scoped>
#loading {
  color: #548aa0;
}
</style>