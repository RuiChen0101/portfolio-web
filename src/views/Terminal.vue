<template>
  <div id="terminal" ref="terminal">
    <CmdInit />
    <ComponentPresenter
      v-for="(props, index) in this.commandExecutor.commandStack"
      :key="index"
      :props="props"
    />
    <CommandLineInput
      v-if="!this.isExecuting"
      :dirPath="this.commandExecutor.currentDir"
      :commandChars="this.keyboardHandler.getCommandChars()"
      :cursorPosition="this.keyboardHandler.getCursorPosition()"
    />
    <LoadingPrint v-else />
    <RecommendCommand
      v-if="!this.isExecuting"
      :recommends="this.commandExecutor.recommendations"
      @onClick="this.onRecommendClick"
    />
    <div class="dummyInput">
      <div><span>Command: </span> <input ref="dummyInput" type="text" /></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { getAnalytics, logEvent } from "firebase/analytics";

import CmdInit from "@/components/CmdInit.vue";
import LoadingPrint from "@/components/LoadingPrint.vue";
import RecommendCommand from "@/components/RecommendCommand.vue";
import ComponentPresenter from "@/components/ComponentPresenter.vue";
import CommandLineInput from "@/components/CommandLine/CommandLineInput.vue";

import KeyboardHandler from "@/utility/KeyboardHandler";
import CommandExecutor from "@/utility/CommandExecutor";

@Options({
  components: {
    CmdInit,
    LoadingPrint,
    RecommendCommand,
    CommandLineInput,
    ComponentPresenter,
  },
})
export default class Terminal extends Vue {
  private keyboardHandler: KeyboardHandler = new KeyboardHandler();
  private commandExecutor: CommandExecutor = new CommandExecutor();
  private isExecuting = false;

  mounted(): void {
    const analytics = getAnalytics();
    logEvent(analytics, "screen_view", {
      firebase_screen: "terminal_portfolio",
      firebase_screen_class: "terminal",
    });
    window.addEventListener("keydown", this.onKeyDown);
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

  unmounted(): void {
    window.removeEventListener("keydown", this.onKeyDown);
  }

  private async onRecommendClick(command: string): Promise<void> {
    this.keyboardHandler.clear();
    (this.$refs.dummyInput as any).value = "";
    this.keyboardHandler.insertHistory(command);
    this.isExecuting = true;
    await this.commandExecutor.run(command);
    this.isExecuting = false;
  }

  private async onKeyDown(ev: KeyboardEvent): Promise<void> {
    this.keyboardHandler.dispatchEvent(this.commandExecutor.currentDir, ev);
    if (this.keyboardHandler.hasCommand()) {
      const command: string = this.keyboardHandler.getCommand();
      this.keyboardHandler.clear();
      (this.$refs.dummyInput as any).value = "";
      this.isExecuting = true;
      await this.commandExecutor.run(command);
      this.isExecuting = false;
    }
  }
}
</script>

<style lang="scss" scoped>
#terminal {
  width: 100%;
  max-width: 1400px;
  padding: 8px 8px;

  .dummyInput {
    background-color: #000000;
    position: fixed;
    width: 100%;
    bottom: 0;
    padding-bottom: 8px;
    display: none;
    input {
      background-color: transparent;
      border: none;
      outline: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      color: #cccccc;
      &:focus,
      &:focus-visible {
        border: none;
        outline: none;
        -webkit-box-shadow: none;
        box-shadow: none;
      }
    }
  }
}

@media (hover: none) and (pointer: coarse) {
  #terminal {
    padding-bottom: 60px;
    .dummyInput {
      display: block;
    }
  }
}
</style>

