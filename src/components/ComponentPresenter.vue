<template>
  <component :is="this.component" v-bind="this.props.props" />
</template>

<script lang="ts">
import { markRaw } from "vue";
import { prop, Vue } from "vue-class-component";

import CommandLine from "./CommandLine/CommandLine.vue";
import PlanTextPrint from "./PlanTextPrint.vue";

class ComponentPresenterProps {
  props = prop<any>({
    default: {},
  });
}

export default class ComponentPresenter extends Vue.with(
  ComponentPresenterProps
) {
  get component(): any {
    switch (this.props.component) {
      case "CommandLine":
        return markRaw(CommandLine);
      case "PlanTextPrint":
        return markRaw(PlanTextPrint);
      default:
        return undefined;
    }
  }
}
</script>