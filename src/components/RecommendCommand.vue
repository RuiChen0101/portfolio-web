<template>
  <div id="recommend-command" class="d-flex flex-wrap">
    <button
      class="command"
      v-for="(command, index) of this.recommends"
      :key="index"
      @click="this.onClick(command)"
    >
      {{ ">" + command }}
    </button>
  </div>
</template>

<script lang="ts">
import { prop, Vue } from "vue-class-component";

class RecommendCommandProps {
  recommends = prop<string[]>({
    default: [],
  });
}

export default class RecommendCommand extends Vue.with(RecommendCommandProps) {
  private onClick(command: string): void {
    this.$emit("onClick", command);
  }
}
</script>

<style lang="scss" scoped>
#recommend-command {
  .command {
    background-color: transparent;
    color: #cccccc;
    text-decoration: none;
    border: none;
    margin-right: 20px;
    &:hover {
      color: #ccccccbb;
      text-decoration: underline;
    }
  }
}
</style>