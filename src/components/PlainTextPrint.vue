<template>
  <p v-for="(line, index) of this.lines" :key="index">
    {{ line }}
  </p>
</template>

<script lang="ts">
import { prop, Vue } from "vue-class-component";

class PlainTextPrintProps {
  text = prop<string>({
    default: "",
  });
}

export default class PlainTextPrint extends Vue.with(PlainTextPrintProps) {
  private lines: string[] = [];

  created(): void {
    this.lines = this.text.split("\n");
  }
}
</script>