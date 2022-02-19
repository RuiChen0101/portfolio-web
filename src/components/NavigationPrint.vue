<template>
  <span></span>
</template>

<script lang="ts">
import { prop, Vue } from "vue-class-component";

class NavigationPrintProps {
  to = prop<string>({
    default: "",
  });
}

export default class NavigationPrint extends Vue.with(NavigationPrintProps) {
  mounted(): void {
    this.$router.push(this.to);
  }
}
</script>