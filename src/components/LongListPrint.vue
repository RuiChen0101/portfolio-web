<template>
  <div id="ling-list-print">
    <span>{{ `total ${this.files.length}` }} </span>
    <div class="file" v-for="(file, index) of this.files" :key="index">
      <span v-if="file.type === EFileType.EXECUTABLE"
        >{{
          `-rwxr-xr-x 1 ruichen ruichen ${file.size.padStart(
            this.sizeLength,
            "\xa0"
          )} ${file.date} `
        }}
        <span class="executable">{{ file.name }}</span>
        <span>*</span>
      </span>
      <span v-if="file.type === EFileType.DIR">
        {{
          `drwxr-xr-x 1 ruichen ruichen ${file.size.padStart(
            this.sizeLength,
            "\xa0"
          )} ${file.date}`
        }}
        <span class="dir">{{ file.name }}</span>
        <span>/</span>
      </span>
      <span v-if="file.type === EFileType.LINK">
        {{
          `lrwxrwxrwx 1 ruichen ruichen ${file.size.padStart(
            this.sizeLength,
            "\xa0"
          )} ${file.date}`
        }}
        <span class="link">{{ file.name }}</span>
        <span>&nbsp;->&nbsp;</span>
        <a
          class="link-href"
          :href="file.value"
          target="_blank"
          rel="noopener noreferrer"
          >{{ file.value }}</a
        >
      </span>
      <span class="plain-file" v-if="file.type === EFileType.FILE">
        {{
          `-rw-r--r-- 1 ruichen ruichen ${file.size.padStart(
            this.sizeLength,
            "\xa0"
          )} ${file.date} ${file.name}`
        }}
      </span>
    </div>
  </div>
</template>./

<script lang="ts">
import { prop, Vue } from "vue-class-component";

import { IFile } from "@/utility/FileSystem";

import EFileType from "@/enum/EFileType";

class LongListPrintProps {
  dir = prop<IFile>({});
}

export default class LongListPrint extends Vue.with(LongListPrintProps) {
  private files: IFile[] = [];
  private sizeLength = 0;
  private EFileType = EFileType;

  created(): void {
    this.files = Object.values(this.dir?.subFiles ?? {});
    for (const file of this.files) {
      this.sizeLength =
        file.size.length > this.sizeLength ? file.size.length : this.sizeLength;
    }
  }
}
</script>

<style lang="scss" scoped>
#ling-list-print {
  .file {
    min-width: 150px;
    .executable {
      color: #16c60c;
    }

    .dir {
      color: #3b78ff;
    }

    .link {
      color: #61d6d6;
    }

    .link-href {
      width: 100%;
      color: #3b78ff;
      text-decoration: none;
      word-wrap: break-word;
      &:hover {
        color: #3b78ffbb;
        text-decoration: underline;
      }
    }
  }
}
</style>