<template>
  <div id="terminal" ref="terminal">
    <CmdInit />
    <ComponentPresenter
      v-for="(props, index) in this.commandStack"
      :key="index"
      :props="props"
    />
    <CommandLineInput
      :dirPath="this.currentDir"
      :commandChars="this.keyboardHandler.getCommandChars()"
      :cursorPosition="this.keyboardHandler.getCursorPosition()"
    />
    <RecommendCommand
      :recommends="this.recommendations"
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

import * as Injector from "@/utility/Injector";
import KeyboardHandler from "@/utility/KeyboardHandler";
import CommandExecutor from "@/utility/CommandExecutor";
import FileSystem, { IFile } from "@/utility/FileSystem";

@Options({
  components: {
    CmdInit,
    RecommendCommand,
    CommandLineInput,
    ComponentPresenter,
  },
})
export default class Terminal extends Vue {
  private commandStack: any[] = [
    {
      component: "CommandLine",
      props: { dirPath: "/portfolio", command: "ls" },
    },
  ];
  private recommendations: string[] = [];
  private currentDir = "/portfolio";

  private keyboardHandler: KeyboardHandler = new KeyboardHandler();
  private commandExecutor: CommandExecutor = new CommandExecutor();

  created(): void {
    window.addEventListener("keydown", this.onKeyDown);
  }

  mounted(): void {
    const dir: IFile = Injector.get<FileSystem>("FileSystem").getDir(
      this.currentDir,
      "./"
    );
    this.recommendations = dir.recommendation ?? [];
    const result = this.commandExecutor.run("ls", this.currentDir);
    this.commandStack.push({
      component: result.component,
      props: result.props,
    });
    (this.$refs.terminal as any).focus();
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
    this.commandStack.push({
      component: "CommandLine",
      props: {
        dirPath: this.currentDir,
        command: command,
      },
    });
    this.keyboardHandler.clear();
    const result = this.commandExecutor.run(command, this.currentDir);
    if (result.pwd !== undefined) this.currentDir = result.pwd;
    if (result.recommendation !== undefined) {
      this.recommendations = result.recommendation;
    }
    if (result.component !== undefined) {
      this.commandStack.push({
        component: result.component,
        props: result.props,
      });
    }
  }

  private onKeyDown(ev: KeyboardEvent): void {
    if (ev.key === "Enter") {
      const command: string = this.keyboardHandler.getCommand();
      this.commandStack.push({
        component: "CommandLine",
        props: {
          dirPath: this.currentDir,
          command: command,
        },
      });
      this.keyboardHandler.clear();
      const result = this.commandExecutor.run(command, this.currentDir);
      if (result.pwd !== undefined) this.currentDir = result.pwd;
      if (result.recommendation !== undefined) {
        this.recommendations = result.recommendation;
      }
      if (result.component !== undefined) {
        this.commandStack.push({
          component: result.component,
          props: result.props,
        });
      }
      return;
    }
    this.keyboardHandler.dispatchEvent(ev);
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

