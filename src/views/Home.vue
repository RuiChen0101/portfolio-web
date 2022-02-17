<template>
  <div class="home">
    <ComponentPresenter
      v-for="(component, index) in this.componentStacks"
      :component="component"
      :key="index"
      :props="this.propsStack[index]"
    />
    <CommandLineInput
      :commandChars="this.keyboardHandler.getCommandChars()"
      :cursorPosition="this.keyboardHandler.getCursorPosition()"
    />
  </div>
</template>

<script lang="ts">
import { markRaw } from "@vue/reactivity";
import { Options, Vue } from "vue-class-component";

import CmdInit from "@/components/CmdInit.vue";
import CommandLine from "@/components/CommandLine/CommandLine.vue";
import ComponentPresenter from "@/components/ComponentPresenter.vue";
import CommandLineInput from "@/components/CommandLine/CommandLineInput.vue";

import KeyboardHandler from "@/utility/KeyboardHandler";

@Options({
  components: {
    CommandLineInput,
    ComponentPresenter,
  },
})
export default class Home extends Vue {
  private componentStacks: any[] = [markRaw(CmdInit), markRaw(CommandLine)];
  private propsStack: any[] = [{}, { dirPath: "~", command: "ls" }];

  private currentDir = "~";
  private keyboardHandler: KeyboardHandler = new KeyboardHandler();

  created(): void {
    window.addEventListener("keydown", this.onKeyDown);
  }

  destroyed(): void {
    window.removeEventListener("keydown", this.onKeyDown);
  }

  private onKeyDown = (ev: KeyboardEvent): void => {
    if (ev.key === "Enter") {
      this.propsStack.push({
        dirPath: this.currentDir,
        command: this.keyboardHandler.getCommand(),
      });
      this.componentStacks.push(markRaw(CommandLine));
      this.keyboardHandler.clear();
      return;
    }
    this.keyboardHandler.dispatchEvent(ev);
  };
}
</script>
