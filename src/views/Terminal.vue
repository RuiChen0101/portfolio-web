<template>
  <div id="terminal" ref="terminal">
    <CmdInit />
    <ComponentPresenter
      v-for="(props, index) in this.commandExecutor.commandStack"
      :key="index"
      :props="props"
    />
    <CommandLineInput
      :dirPath="this.commandExecutor.currentDir"
      :commandChars="this.keyboardHandler.getCommandChars()"
      :cursorPosition="this.keyboardHandler.getCursorPosition()"
    />
    <RecommendCommand
      :recommends="this.commandExecutor.recommendations"
      @onClick="this.onRecommendClick"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import CmdInit from "@/components/CmdInit.vue";
import RecommendCommand from "@/components/RecommendCommand.vue";
import ComponentPresenter from "@/components/ComponentPresenter.vue";
import CommandLineInput from "@/components/CommandLine/CommandLineInput.vue";

import KeyboardHandler from "@/utility/KeyboardHandler";
import CommandExecutor from "@/utility/CommandExecutor";

@Options({
  components: {
    CmdInit,
    RecommendCommand,
    CommandLineInput,
    ComponentPresenter,
  },
})
export default class Terminal extends Vue {
  private keyboardHandler: KeyboardHandler = new KeyboardHandler();
  private commandExecutor: CommandExecutor = new CommandExecutor();

  created(): void {
    window.addEventListener("keydown", this.onKeyDown);
  }

  mounted(): void {
    this.keyboardHandler.insertHistory("ls");
    this.commandExecutor.initRecommendations();
    this.commandExecutor.run("ls");
  }

  updated(): void {
    window.scrollTo(
      0,
      document.body.scrollHeight || document.documentElement.scrollHeight
    );
  }

  destroyed(): void {
    window.removeEventListener("keydown", this.onKeyDown);
  }

  private onRecommendClick(command: string): void {
    this.keyboardHandler.clear();
    this.keyboardHandler.insertHistory(command);
    this.commandExecutor.run(command);
  }

  private onKeyDown(ev: KeyboardEvent): void {
    this.keyboardHandler.dispatchEvent(ev);
    if (this.keyboardHandler.hasCommand()) {
      const command: string = this.keyboardHandler.getCommand();
      this.keyboardHandler.clear();
      this.commandExecutor.run(command);
    }
  }
}
</script>

<style lang="scss" scoped>
#terminal {
  width: 100%;
  max-width: 1400px;
  padding: 8px 8px;
}
</style>

