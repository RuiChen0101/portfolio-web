<template>
  <div id="list-print" class="d-flex">
    <div class="file" v-for="(file, index) of this.files" :key="index">
      <router-link
        class="executable"
        v-if="file.type === EFileType.EXECUTABLE"
        :to="file.value"
        >{{ file.name }}
      </router-link>
      <button class="dir" v-if="file.type === EFileType.DIR">
        {{ file.name }}
      </button>
    </div>
  </div>
</template>./

<script lang="ts">
import { prop, Vue } from "vue-class-component";

import { EFileType, IFile } from "@/utility/DirConfig";

class ListPrintProps {
  dir = prop<IFile>({});
}

export default class ListPrint extends Vue.with(ListPrintProps) {
  private files: IFile[] = [];
  private EFileType = EFileType;

  created(): void {
    this.files = Object.values(this.dir?.subFiles ?? {});
  }
}
</script>

<style lang="scss" scoped>
#list-print {
  .file {
    min-width: 150px;
    .executable {
      color: #16c60c;
      text-decoration: none;
      &:hover {
        color: #16c60cbb;
        text-decoration: underline;
      }
    }

    .dir {
      color: #3b78ff;
      text-decoration: none;
      font-size: inherit;
      padding: 0px;
      border: none;
      background-color: transparent;
      &:hover {
        color: #3b78ffbb;
        text-decoration: underline;
      }
    }
  }
}
</style>