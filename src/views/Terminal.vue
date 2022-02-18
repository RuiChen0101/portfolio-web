<template>
  <div id="terminal">
    <CmdInit />
    <ComponentPresenter
      v-for="(props, index) in this.propsStack"
      :key="index"
      :props="props"
    />
    <CommandLineInput
      :dirPath="this.currentDir"
      :commandChars="this.keyboardHandler.getCommandChars()"
      :cursorPosition="this.keyboardHandler.getCursorPosition()"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import CmdInit from "@/components/CmdInit.vue";
import ComponentPresenter from "@/components/ComponentPresenter.vue";
import CommandLineInput from "@/components/CommandLine/CommandLineInput.vue";

import * as Injector from "@/utility/Injector";
import KeyboardHandler from "@/utility/KeyboardHandler";
import CommandExecutor from "@/utility/CommandExecutor";

@Options({
  components: {
    CmdInit,
    CommandLineInput,
    ComponentPresenter,
  },
})
export default class Terminal extends Vue {
  private propsStack: any[] = [
    {
      component: "CommandLine",
      props: { dirPath: "/portfolio", command: "ls" },
    },
  ];

  private currentDir = "/portfolio";
  private keyboardHandler: KeyboardHandler = new KeyboardHandler();

  created(): void {
    window.addEventListener("keydown", this.onKeyDown);
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

  private onKeyDown = (ev: KeyboardEvent): void => {
    if (ev.key === "Enter") {
      const command: string = this.keyboardHandler.getCommand();
      this.propsStack.push({
        component: "CommandLine",
        props: {
          dirPath: this.currentDir,
          command: command,
        },
      });
      this.keyboardHandler.clear();
      const result = Injector.get<CommandExecutor>("CommandExecutor").run(
        command,
        this.currentDir
      );
      if (result.pwd !== undefined) this.currentDir = result.pwd;
      if (result.component !== undefined) {
        this.propsStack.push({
          component: result.component,
          props: result.props,
        });
      }
      return;
    }
    this.keyboardHandler.dispatchEvent(ev);
  };
}
</script>

<style lang="scss" scoped>
#terminal {
  width: 100%;
  max-width: 1100px;
  padding: 0px 8px;
}
</style>
