<template>
  <div id="list-print" class="d-flex flex-wrap">
    <div class="file" v-for="(file, index) of this.files" :key="index">
      <span class="executable" v-if="file.type === EFileType.EXECUTABLE"
        >{{ file.name }}
      </span>
      <span class="dir" v-if="file.type === EFileType.DIR">
        {{ file.name }}
      </span>
      <a
        class="link"
        v-if="file.type === EFileType.LINK"
        :href="file.value"
        target="_blank"
        rel="noopener noreferrer"
        >{{ file.name }}</a
      >
      <span
        class="plain-file"
        v-if="file.type === EFileType.FILE || file.type === EFileType.IMAGE"
      >
        {{ file.name }}
      </span>
    </div>
  </div>
</template>./

<script lang="ts">
import { prop, Vue } from "vue-class-component";

import { IFile } from "@/utility/FileSystem";

import EFileType from "@/enum/EFileType";

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
    margin-right: 24px;
    .executable {
      color: #16c60c;
    }

    .dir {
      color: #3b78ff;
    }

    .link {
      color: #61d6d6;
      text-decoration: none;
      &:hover {
        color: #61d6d6bb;
        text-decoration: underline;
      }
    }
  }
}
</style>