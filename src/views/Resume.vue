<template>
  <div id="resume">
    <component :is="this.resumeLang[this.currentResumeLang]" />
    <div id="control-panel">
      <button @click="this.onChangeLanguage()">
        F2<span>Language&nbsp;&nbsp;</span>
      </button>
      <button @click="this.goBack()">ESC<span>Quit&nbsp;&nbsp;</span></button>
    </div>
  </div>
</template>

<script lang="ts">
import { markRaw } from "vue";
import { Vue } from "vue-class-component";
import { getAnalytics, logEvent } from "firebase/analytics";

import ResumeZh from "@/components/Resume/ResumeZh.vue";
import ResumeEn from "@/components/Resume/ResumeEn.vue";

export default class Resume extends Vue {
  private resumeLang: any[] = [markRaw(ResumeEn), markRaw(ResumeZh)];
  private currentResumeLang = 0;

  mounted(): void {
    const analytics = getAnalytics();
    logEvent(analytics, "screen_view", {
      firebase_screen: "resume",
      firebase_screen_class: "resume",
    });
    window.scrollTo(0, 0);
    window.addEventListener("keydown", this.onKeyDown);
  }

  unmounted(): void {
    window.removeEventListener("keydown", this.onKeyDown);
  }

  private onKeyDown(ev: KeyboardEvent): void {
    if (ev.key === "Escape") {
      this.goBack();
    } else if (ev.key === "F2") {
      this.onChangeLanguage();
    }
  }

  private goBack(): void {
    this.$router.go(-1);
  }

  private onChangeLanguage(): void {
    this.currentResumeLang = (this.currentResumeLang + 1) % 2;
  }
}
</script>

<style lang="scss" scoped>
#control-panel {
  width: 100%;
  position: fixed;
  bottom: 0px;
  background-color: #000000;
  button {
    background-color: transparent;
    border: none;
    padding: 0px;
    color: #cccccc;
    span {
      color: #000000;
      background-color: #3a96dd;
    }

    &:hover {
      text-decoration: underline;
      span {
        background-color: #3a96dddd;
      }
    }
  }
}
</style>