<template>
  <div id="gallery">
    <component :is="this.resumeLang[this.currentResumeLang]" />
    <div id="control-panel">
      <button>F2<span>Language&nbsp;&nbsp;</span></button>
      <button @click="this.goBack()">ESC<span>Quit&nbsp;&nbsp;</span></button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Gallery extends Vue {
  mounted(): void {
    window.addEventListener("keydown", this.onKeyDown);
  }

  unmounted(): void {
    window.removeEventListener("keydown", this.onKeyDown);
  }

  private onKeyDown(ev: KeyboardEvent): void {
    if (ev.key === "Escape") {
      this.goBack();
    }
  }

  private goBack(): void {
    this.$router.go(-1);
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