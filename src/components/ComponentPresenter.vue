<template>
  <component :is="this.component" v-bind="this.props.props" />
</template>

<script lang="ts">
import { markRaw } from "vue";
import { prop, Vue } from "vue-class-component";

import ListPrint from "./ListPrint.vue";
import LongListPrint from "./LongListPrint.vue";
import PlainTextPrint from "./PlainTextPrint.vue";
import NavigationPrint from "./NavigationPrint.vue";
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
      case "PlainTextPrint":
        return markRaw(PlainTextPrint);
      case "ListPrint":
        return markRaw(ListPrint);
      case "LongListPrint":
        return markRaw(LongListPrint);
      case "NavigationPrint":
        return markRaw(NavigationPrint);
      default:
        return undefined;
    }
  }
}
</script>