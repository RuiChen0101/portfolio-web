<template>
  <component :is="this.component" v-bind="this.props" />
</template>

<script lang="ts">
import { prop, Vue } from "vue-class-component";

class ComponentPresenterProps {
  component = prop<any>({});
  props = prop<any>({
    default: {},
  });
}

export default class ComponentPresenter extends Vue.with(
  ComponentPresenterProps
) {}
</script>