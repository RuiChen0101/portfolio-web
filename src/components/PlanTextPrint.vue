<template>
  <span>
    {{ this.text }}
  </span>
</template>

<script lang="ts">
import { prop, Vue } from "vue-class-component";

class PlanTextPrintProps {
  text = prop<string>({});
}

export default class PlanTextPrint extends Vue.with(PlanTextPrintProps) {}
</script>