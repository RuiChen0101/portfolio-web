<template>
  <div id="image-print">
    <p>
      {{ this.text }}
    </p>
    <img :src="this.url" alt="" @load="this.loadComplete" />
  </div>
</template>

<script lang="ts">
import { prop, Vue } from "vue-class-component";

class ImagePrintProps {
  text = prop<string>({
    default: "",
  });
  url = prop<string>({});
}

export default class ImagePrint extends Vue.with(ImagePrintProps) {
  private loadComplete(): void {
    window.scrollTo(
      0,
      document.body.scrollHeight || document.documentElement.scrollHeight
    );
  }
}
</script>

<style lang="scss" scoped>
#image-print {
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
}
</style>