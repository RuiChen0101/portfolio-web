<template>
  <p v-for="(line, index) of this.lines" :key="index">
    {{ line }}
  </p>
</template>

<script lang="ts">
import { prop, Vue } from "vue-class-component";

class PlanTextPrintProps {
  text = prop<string>({
    default: "",
  });
}

export default class PlanTextPrint extends Vue.with(PlanTextPrintProps) {
  private lines: string[] = [];

  created(): void {
    this.lines = this.text.split("\n");
  }
}
</script>