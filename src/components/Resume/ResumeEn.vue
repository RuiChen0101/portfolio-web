<template>
  <div id="resume-en">
    <div class="intro row">
      <div class="col-12 col-lg-4">
        <div class="w-100 d-flex justify-content-center">
          <img class="headshot" src="@/assets/image/headshot.jpg" alt="" />
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <p class="name">CHEN BO RUEI</p>
        <p>A Full-Stack Developer</p>
        <p>---------------------------------</p>
        <p>
          I have 5+ years of experience in software development, design
          patterns, and software testing. Currently working at Industrial
          Technology Research Institute as Software Engineer, Designing and
          developing software systems for Taiwan's first 4D virtual studio,
          IpLab.
        </p>
        <div class="link d-flex flex-wrap">
          <a href="mailto:ruichen0101@gmail.com" target="_blank" rel="noopener"
            ><font-awesome-icon
              style="margin-bottom: -2px; margin-right: 4px"
              :icon="['far', 'envelope']"
            />ruichen0101@gmail.com</a
          >
          <a href="tel:+886-9-7555-5319" target="_blank" rel="noopener"
            ><font-awesome-icon
              style="margin-bottom: -2px; margin-right: 6px"
              :icon="['fas', 'phone']"
              size="sm"
            />+886 9-7555-5319</a
          >
          <a
            href="https://github.com/RuiChen0101"
            target="_blank"
            rel="noopener"
            >Github</a
          >
          <a
            href="https://www.linkedin.com/in/rui0101/"
            target="_blank"
            rel="noopener"
            >Linkin</a
          >
        </div>
      </div>
    </div>
    <div class="education-and-skills row">
      <div class="education col-12 col-md-6">
        <h2>Educations</h2>
        <p>------------</p>
        <p>
          ·&nbsp;<span class="highlight-yellow">Master of Computer Science</span
          >&nbsp;<span class="highlight-grey">2021~2023</span>
        </p>
        <p>&nbsp;&nbsp;├──National Taipei University of Technology</p>
        <p>
          &nbsp;&nbsp;└──Master thesis:<a
            href="https://ndltd.ncl.edu.tw/index.html?o=dnclcdr&s=id=%22111TIT00392002%22.&searchmode=basic"
            target="_blank"
            rel="noopener"
            >UnifyQL - A Data Query Framework for Microservice Systems</a
          >
        </p>
        <p>
          ·&nbsp;<span class="highlight-yellow"
            >Bachelor of Computer Science</span
          >&nbsp;<span class="highlight-grey">2017~2021</span>
        </p>
        <p>&nbsp;&nbsp;└──National Taipei University of Technology</p>
      </div>
      <div class="skills col-12 col-md-6">
        <h2>Skills</h2>
        <p>------------</p>
        <p>·&nbsp;Language</p>
        <p>
          &nbsp;&nbsp;└──<span class="highlight-green">Typescript</span>,
          <span class="highlight-green">Golang</span>,
          <span class="highlight-green">Dart</span>,
          <span class="highlight-green">C/C++</span>,<span
            class="highlight-green"
          >
            Python</span
          >, <span class="highlight-green">Java</span>
        </p>
        <p>·&nbsp;Framework & Libraries</p>
        <p>
          &nbsp;&nbsp;├──<span class="highlight-green">Node.js</span>,
          <span class="highlight-green">React.js</span>,
          <span class="highlight-green">Spring Boot</span>,
          <span class="highlight-green">Vue.js</span>,
          <span class="highlight-green">Flutter</span>,
        </p>
        <p>
          &nbsp;&nbsp;└──<span class="highlight-green">GoogleTest</span>,
          <span class="highlight-green">Mocha</span>,
          <span class="highlight-green">Robot Framework</span>,
          <span class="highlight-green">Qt</span>
        </p>
        <p>·&nbsp;Others</p>
        <p>
          &nbsp;&nbsp;└──<span class="highlight-green">Git</span>,
          <span class="highlight-green">Docker</span>,
          <span class="highlight-green">CI/CD</span>,
          <span class="highlight-green">GCP</span>
        </p>
      </div>
    </div>
    <div class="work-and-experience">
      <h2>Work & Experience</h2>
      <p>---------------------------------</p>
      <div class="experience">
        <p>
          ·&nbsp;<span class="highlight-grey">2022/03 - NOW</span> | Industrial
          Technology Research Institute, Interoperable Metaverse Video Analytics
          Innovation Technologies Dept.
          <span class="highlight-yellow">Software Engineer</span>
        </p>
        <p>
          &nbsp;&nbsp;├──Developing smart contract for the world first 4DNFT.
        </p>
        <p>
          &nbsp;&nbsp;├──Operating ViCon and 4DView for the first 4D virtual
          studio in Taiwan, IpLab.
        </p>
        <p>
          &nbsp;&nbsp;└──Designing and developing digital collection platform.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span class="highlight-green">#Golang</span>,
          <span class="highlight-green">#React.js</span>
        </p>
      </div>
      <div class="experience">
        <p>
          ·&nbsp;<span class="highlight-grey">2020/10 - 2022/08</span> | Federal
          IntelliGence Co., Ltd.,
          <span class="highlight-yellow">Supervisor of R&D Department</span>
        </p>
        <p>
          &nbsp;&nbsp;├──Remastering the product of the company, TigerMaster,
          and hit the market successfully at September 2021. The new system has
          100x performance improvement compare to old one, it reduce the
          response time from ~10s to ~100ms.
        </p>
        <p>
          &nbsp;&nbsp;├──Developing and maintaining database, backend service
          and app.
        </p>
        <p>
          &nbsp;&nbsp;├──Coordinating the requirement from other department and
          make it in to the schedule.
        </p>
        <p>
          &nbsp;&nbsp;└──The remastered system bring 54% quarterly revenue
          growth and 11% more effective order to the company.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span class="highlight-green">#Cloud Functions</span>,
          <span class="highlight-green">#Flutter</span>,
          <span class="highlight-green">#Spring Boot</span>,
          <span class="highlight-green">#Vue.js</span>
        </p>
      </div>
      <div class="experience">
        <p>
          ·&nbsp;<span class="highlight-grey">2020/1 - 2020/9</span> |
          Industrial Technology Research Institute,
          <span class="highlight-yellow">iDBET Intern</span>
        </p>
        <p>
          &nbsp;&nbsp;├──Developing smart camera with object detection
          capability base on Google Edge TPU.
        </p>
        <p>
          &nbsp;&nbsp;├──Using Mobile Net SSD to detect any abnormal situation
          and send notification to user.
        </p>
        <p>
          &nbsp;&nbsp;├──By integrating with Line bot, users can manage their
          device without install any app.
        </p>
        <p>
          &nbsp;&nbsp;└──Testing the system with Robot Framework and Googletest.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span class="highlight-green">#C++</span>,
          <span class="highlight-green">#Node.js</span>,
          <span class="highlight-green">#Edge TPU</span>,
          <span class="highlight-green">#LINE BOT</span>
        </p>
      </div>
      <div class="experience">
        <p>
          ·&nbsp;<span class="highlight-grey">2019/7 ~ 2019/12</span> | MAX SEE
          INDUSTRY CO., LTD.,
          <span class="highlight-yellow">Industry-academia Collaboration</span>
        </p>
        <p>&nbsp;&nbsp;├──Add Russian support to existing system.</p>
        <p>
          &nbsp;&nbsp;└──Migrate system from Window-CE to Linux with Qt
          framework.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span class="highlight-green">#C++</span>,
          <span class="highlight-green">#Qt</span>
        </p>
      </div>
      <div class="experience">
        <p>
          ·&nbsp;<span class="highlight-grey">2018/1 - 2020/7</span> | National
          Taipei University of Technology e-Sports Club,
          <span class="highlight-yellow"
            >Director of Broadcast and IT Department</span
          >
        </p>
        <p>
          &nbsp;&nbsp;├──Directing live broadcast and developing website for
          e-Sports event.
        </p>
        <p>
          &nbsp;&nbsp;└──For the 5 municipal level e-Sports tournament, there
          are over 1500 participants, 1 million viewers and 432 players finish
          their enrollment via our website.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span class="highlight-green">#Vue.js</span>
        </p>
      </div>
      <div class="experience">
        <p>
          ·&nbsp;<span class="highlight-grey">2017/8 - 2019/4</span> | CodingAPE
          School,
          <span class="highlight-yellow">Course Design/Teacher</span>
        </p>
        <p>
          &nbsp;&nbsp;├──Teaching u12 children programing and logical thinking
          with Scratch and python.
        </p>
        <p>
          &nbsp;&nbsp;├──Design course contents for Minecraft Programing Summer
          Camp. More than 100 children took this course over 6 major city at
          Summer 2018.
        </p>
        <p>
          &nbsp;&nbsp;└──Has teaching experience over 550 hour and 200 student.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span class="highlight-green">#Python</span>
        </p>
      </div>
    </div>
    <div class="size-box"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class ResumeEn extends Vue { }
</script>

<style lang="scss" scoped>
#resume-en {
  width: 100%;
  max-width: 1600px;
  padding: 24px 12px;

  .highlight-yellow {
    color: #d7bb5e;
  }

  .highlight-green {
    color: #16c60c;
  }

  .highlight-grey {
    color: #ccccccbb;
  }

  .intro {
    border-bottom: 1px solid #cccccc;
    padding: 12px 0px 24px 0px;
    .headshot {
      width: 75%;
      height: auto;
      border-radius: 50%;
    }
    .name {
      font-size: 40px;
    }
    .link {
      a {
        margin-top: 12px;
        margin-right: 12px;
        padding: 4px 12px;
        color: #cccccc;
        border: 1px solid #cccccc;
        text-decoration: none;
        border-radius: 50px;

        &:hover {
          color: #000000;
          background-color: #cccccc;
        }
      }
    }
  }

  .education-and-skills {
    border-bottom: 1px solid #cccccc;
    .education {
      padding: 12px;
    }
    .skills {
      padding: 12px;
      border-left: 1px solid #cccccc;
    }
  }

  .work-and-experience {
    padding: 12px 0px;
    .experience {
      margin-bottom: 16px;
    }
  }

  .size-box {
    height: 32px;
  }
}

@media (max-width: 992px) {
  #resume-en {
    .intro {
      .headshot {
        width: 50%;
      }
      .link {
        a {
          margin-top: 12px;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  #resume-en {
    .education-and-skills {
      .skills {
        border-left: none;
        border-top: 1px solid #cccccc;
      }
    }
  }
}
</style>