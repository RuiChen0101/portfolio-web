<template>
  <div id="image-print">
    <p>
      {{ this.text }}
    </p>
    <img :src="this.url" alt="" />
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

export default class ImagePrint extends Vue.with(ImagePrintProps) {}
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