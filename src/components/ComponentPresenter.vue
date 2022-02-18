<template>
  <component :is="this.component" v-bind="this.props.props" />
</template>

<script lang="ts">
import { markRaw } from "vue";
import { prop, Vue } from "vue-class-component";

import ListPrint from "./ListPrint.vue";
import PlanTextPrint from "./PlanTextPrint.vue";
import LongListPrint from "./LongListPrint.vue";
import CommandLine from "./CommandLine/CommandLine.vue";

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
      case "ListPrint":
        return markRaw(ListPrint);
      case "LongListPrint":
        return markRaw(LongListPrint);
      default:
        return undefined;
    }
  }
}
</script>