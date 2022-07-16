<template>
  <div id="resume-zh">
    <div class="intro row">
      <div class="col-12 col-lg-4">
        <div class="w-100 d-flex justify-content-center">
          <img class="headshot" src="@/assets/image/headshot.jpg" alt="" />
        </div>
      </div>
      <div class="col-12 col-lg-8">
        <p class="name">陳柏瑞</p>
        <p>一位全端軟體開發者</p>
        <p>---------------------------------</p>
        <p>
          現就讀於國立臺北科技大學
          資訊工程所。熱衷於學習與挑戰不同的程式技術，在軟體開發、軟體架構與軟體測試方面皆有研究。同時於工業研究院擔任軟體工程師一職，負責台灣第一座4D虛擬攝影棚-IpLab-軟體系統的設計與維護。
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
        <h2>學歷</h2>
        <p>------------</p>
        <p>·&nbsp;<span class="highlight-yellow">資訊工程 碩士</span></p>
        <p>&nbsp;&nbsp;├──國立臺北科技大學</p>
        <p>&nbsp;&nbsp;└──<span class="highlight-grey">2021~2023</span></p>
        <p>·&nbsp;<span class="highlight-yellow">資訊工程 學士</span></p>
        <p>&nbsp;&nbsp;├──國立臺北科技大學</p>
        <p>&nbsp;&nbsp;└──<span class="highlight-grey">2017~2021</span></p>
      </div>
      <div class="skills col-12 col-md-6">
        <h2>技能</h2>
        <p>------------</p>
        <p>·&nbsp;Language</p>
        <p>
          &nbsp;&nbsp;└──<span class="highlight-green">Typescript</span>,
          <span class="highlight-green">Java</span>,
          <span class="highlight-green">Dart</span>,
          <span class="highlight-green">C/C++</span>,<span
            class="highlight-green"
          >
            Python</span
          >, <span class="highlight-green">Golang</span>
        </p>
        <p>·&nbsp;Framework & Libraries</p>
        <p>
          &nbsp;&nbsp;├──<span class="highlight-green">Node.js</span>,
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
      <h2>工作經驗</h2>
      <p>---------------------------------</p>
      <div class="experience">
        <p>
          ·&nbsp;<span class="highlight-grey">2022/03 - NOW</span> |
          <span class="highlight-yellow">軟體工程師</span>·工業技術研究院
          資料與影像商務分析系統技術部
        </p>
        <p>&nbsp;&nbsp;├──4DNFT發行合約與系統開發</p>
        <p>&nbsp;&nbsp;├──協助台灣第一座4D虛擬攝影棚-IpLab內容產製</p>
        <p>&nbsp;&nbsp;└──數位內容收藏平台開發</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span class="highlight-green">#Cloud Functions</span>,
          <span class="highlight-green">#Golang</span>,
          <span class="highlight-green">#React.js</span>
        </p>
      </div>
      <div class="experience">
        <p>
          ·&nbsp;<span class="highlight-grey">2020/11 - 2022/08</span> |
          <span class="highlight-yellow">研發部 課長</span>·飛達智能股份有限公司
        </p>
        <p>
          &nbsp;&nbsp;├──協助公司產品APP-師虎來了重製版開發, 於2021年9月順利上架
        </p>
        <p>&nbsp;&nbsp;├──負責設計系統架構與資料庫、後端系統與App的開發維護</p>
        <p>&nbsp;&nbsp;├──規劃與協調各部門間的需求與同事的開發進度</p>
        <p>
          &nbsp;&nbsp;└──新系統上線後為公司帶來了54%的季營收增長與11%的訂單成交率成長
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
          <span class="highlight-yellow">實習生</span>·工業研究院
          產學研工程人才實務能力發展基地
        </p>
        <p>&nbsp;&nbsp;├──基於Google Edge TPU平台的即時影像辨識監視器開發</p>
        <p>
          &nbsp;&nbsp;├──用Mobile Net
          SSD進行影像辨識,當有異常發生時發送及時通知給使用者
        </p>
        <p>
          &nbsp;&nbsp;├──結合Line
          Bot,使用者可直接在Line上設定與操作攝影機，毋須下載額外的應用程式即能使用
        </p>
        <p>&nbsp;&nbsp;└──導入Robot Framework、Googletest的全面軟體測試</p>
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
          ·&nbsp;<span class="highlight-grey">2019/7 ~ 2019/12</span> |
          <span class="highlight-yellow">產學合作專案</span>·美溪電機線割機
          控制軟體作業系統移植
        </p>
        <p>&nbsp;&nbsp;├──在原有的作業環境下安裝俄文語系並將軟體翻譯成俄文</p>
        <p>
          &nbsp;&nbsp;└──將原先運行在Windows-CE上用.NET開發的軟體移植到Linux系統並改用Qt開發
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span class="highlight-green">#C++</span>,
          <span class="highlight-green">#Qt</span>
        </p>
      </div>
      <div class="experience">
        <p>
          ·&nbsp;<span class="highlight-grey">2018/1 - 2020/7</span> |
          <span class="highlight-yellow">轉播與IT組組長</span>·國立臺北科技大學
          電子競技社
        </p>
        <p>&nbsp;&nbsp;├──電競賽事實況轉播、技術探索與賽事資訊網站開發及維護</p>
        <p>
          &nbsp;&nbsp;└──舉辦五場的大型賽事，活動總計超過1500人參與、擁有100萬+的曝光與觸及，總計432位選手透過賽事系統完成報名與繳費
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span class="highlight-green">#Vue.js</span>
        </p>
      </div>
      <div class="experience">
        <p>
          ·&nbsp;<span class="highlight-grey">2017/8 - 2019/4</span> |
          <span class="highlight-yellow">課程設計/講師</span>·CodingAPE
          猿創力程式設計學校
        </p>
        <p>
          &nbsp;&nbsp;├──教授6-12歲的學童 Scratch, python等程式語言與邏輯概念
        </p>
        <p>
          &nbsp;&nbsp;├──Minecraft
          程式設計課程教材製作，課程實際在2018年的暑期營隊上線，授課學生超過百人並遍及6大城市
        </p>
        <p>&nbsp;&nbsp;└──超過 550 小時授課時數、200 位學生教學經驗</p>
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

export default class ResumeZh extends Vue {}
</script>

<style lang="scss" scoped>
#resume-zh {
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
  #resume-zh {
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
  #resume-zh {
    .education-and-skills {
      .skills {
        border-left: none;
        border-top: 1px solid #cccccc;
      }
    }
  }
}
</style>