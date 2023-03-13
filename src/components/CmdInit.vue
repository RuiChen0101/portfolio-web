<template>
  <div id="cmd-init" class="container-fluid">
    <p>Welcome to Portfolio OS, ruichen 2022 all right reserved</p>
    <div class="intro">
      <br />
      <p class="cowsay">
        &nbsp;---------------------------<br />
        &lt;HI! 我是陳柏瑞, CHEN BO RUEI&gt;<br />
        &nbsp;---------------------------<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\ ^__^ <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(oo)\_______ <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(__)\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)\/\
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||----w&nbsp;|<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||
      </p>
      <br />
      <p>
        I am a Full-Stack Developer that has 5+ years of experience in software
        development, design patterns, and software testing. Currently working at
        Industrial Technology Research Institute as Software Engineer, Designing
        and developing software systems for the first 4D virtual studio in
        Taiwan, IpLab.
      </p>
      <br />
      <p>
        For more information, you can use the link down below, or use "./resume"
        to access my resume
      </p>
      <p>
        * Github:
        <a href="https://github.com/RuiChen0101" target="_blank">
          https://github.com/RuiChen0101
        </a>
      </p>
      <p>
        * Linkedin:
        <a href="https://www.linkedin.com/in/rui0101/" target="_blank">
          https://www.linkedin.com/in/rui0101/
        </a>
      </p>
      <br />
      <p class="comment-out">
        // you can also use mouse to navigate through out the page
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class CmdInit extends Vue { }
</script>

<style lang="scss" scoped>
#cmd-init {
  .intro {
    .cowsay {
      line-height: 24px;
    }
    .comment-out {
      color: #6b9955;
    }

    a {
      color: #61d6d6;
      &:hover {
        color: #61d6d6bb;
      }
    }
  }
}
</style>