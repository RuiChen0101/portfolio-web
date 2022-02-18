<template>
  <div id="command-line-input" class="d-flex">
    <span class="machine-name">ruichen@Portfolio</span>
    <span>:</span>
    <span class="dir">{{ this.dirPath }}</span>
    <span>$</span>
    <span class="command-margin" />
    <div
      :class="
        index === this.cursorPosition && this.showCursor
          ? 'cursor-highlight command-char'
          : 'command-char'
      "
      v-for="(ch, index) in this.commandChars"
      :key="index"
    >
      {{ ch }}
    </div>
    <span
      v-if="this.cursorPosition === this.commandChars.length && this.showCursor"
    >
      ▌
    </span>
  </div>
</template>

<script lang="ts">
import { prop, Vue } from "vue-class-component";

class CommandLineInputProps {
  dirPath = prop({
    default: "/",
  });
  commandChars = prop<string[]>({
    default: [],
  });
  cursorPosition = prop({
    default: 0,
  });
}

export default class CommandLineInput extends Vue.with(CommandLineInputProps) {
  private showCursor = false;

  mounted(): void {
    setInterval(this.onTick, 500);
  }

  private onTick = (): void => {
    this.showCursor = !this.showCursor;
  };
}
</script>

<style lang="scss" scoped>
#command-line-input {
  .machine-name {
    color: #16c60c;
  }
  .dir {
    color: #3b78ff;
  }
  .command-margin {
    margin-left: 8px;
  }
  .command-char {
    height: 32px;
  }
  .cursor-highlight {
    border-bottom: 2px solid #cccccc;
  }
}
</style>