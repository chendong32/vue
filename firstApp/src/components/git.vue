<template>
  <div class="git media-style-git">

    <div v-for='(item, index) in contentList'>
      <div class="left-panel">
        <div class="left-content clear-float">
          <h4 class="b-title">
            <i class="icon iconfont icon-github"></i>
            {{item.full_name}}
          </h4>
          <div>
            <ul class="all-tag clear-float media-style-tag-parent">
              <li><i class="icon iconfont icon-browse"></i> {{item.watchers}}</li>
              <li><i class="icon iconfont icon-collection"></i> {{item.stargazers_count}}</li>
              <li><i class="icon iconfont icon-share"></i> {{item.default_branch}}</li>
              <li><i class="icon iconfont icon-fenlei"></i> {{item.language}}</li>
            </ul>
          </div>
          <div class="git-content-style">
            <p>
              {{item.description}}
            </p>
          </div>
          <div class="tag-tail clear-float">
            <div class="tag-left-style media-style-tag">Latest commit <strong>{{item.pushed_at.substr(0,11)}}</strong></div>
            <a :href="'https://codeload.github.com/'+item.full_name+'/zip/'+item.default_branch" class="tag-tail-a">Download ZIP</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'git',
    data() {
      return {
        contentList: []
      }
    },
    mounted() {
      this.contentList = [{
        "full_name": "chendong32/vue",
        "watchers": 0,
        "stargazers_count": 0,
        "default_branch": "master",
        "language": "JavaScript",
        "pushed_at": "2018-09-14T12:38:34Z",
		"description": "vue 整合Auth权限管理、支付宝、微信支付、阿里oss、友盟推送、融云即时通讯、云通讯短信、Email、Excel……"
      },
        {
          "full_name": "chendong32/activiti",
          "watchers": 0,
          "stargazers_count": 0,
          "default_branch": "master",
          "language": "JavaScript",
          "pushed_at": "2018-09-14T12:38:34Z",
		  "description": "activiti 整合Auth权限管理、支付宝、微信支付、阿里oss、友盟推送、融云即时通讯、云通讯短信、Email、Excel……"
        },
        {
          "full_name": "chendong32/php",
          "watchers": 0,
          "stargazers_count": 0,
          "default_branch": "master",
          "language": "JavaScript",
          "pushed_at": "2018-09-14T12:38:34Z",
		  "description": "thinkphp 整合Auth权限管理、支付宝、微信支付、阿里oss、友盟推送、融云即时通讯、云通讯短信、Email、Excel……"
        }]
    }
  }
</script>

<style scoped>
  .git {
    width: 65%;
    float: left;
  }

  .left-content {
    padding: 20px;
  }

  .left-panel {
    overflow: hidden;
    background: #FFF;
    box-shadow: 0 1px 2px 0 #E2E2E2;
    margin-bottom: 20px;
  }

  .all-tag li {
    float: left;
    margin-right: 2em;
  }

  .tag-tail-a {
    background-color: #008CBA;
    display: block;
    padding: 0 10px;
    height: 20px;
    line-height: 20px;
    border-radius: 10px;
    float: right;
    color: #ffffff;
  }

  .tag-left-style {
    float: left;
    height: 20px;
    line-height: 20px;
  }

  .tag-tail a:hover {
    background-color: #dcdcdc;
    color: #008CBA;
    transition: background-color 0.2s ease-in-out, color 0.3s ease-in-out;
    cursor: pointer;
  }

  .tag-tail a:hover {
    background-color: #dcdcdc;
    color: #008CBA;
    transition: background-color 0.2s ease-in-out, color 0.3s ease-in-out;
    cursor: pointer;
  }

  @media (max-width: 1500px) and (min-width: 0px) {
    .media-style-pad {
      padding: 0 3em;
    }

    .down-container {
      padding: 6em 3em 0;
    }
  }

  @media (max-width: 1200px) and (min-width: 0px) {
    .media-style-none {
      display: none !important;
    }

    .media-style-category, .media-style-chat, .media-style-git, .media-style-home {
      width: 100%;
    }
  }

  @media (max-width: 820px) and (min-width: 0px) {
    .media-style-nav-parent {
      position: absolute;
    }

    .media-style-nav-parent li:nth-child(5), .media-style-nav-parent li:last-child {
      display: none;
    }
  }

  @media (max-width: 600px) and (min-width: 0px) {
    .media-style-pad {
      padding: 0 1em;
    }

    .down-container {
      padding: 6em 1em 0;
    }

    .media-style-nav-parent li:nth-child(5), .media-style-nav-parent li:last-child, .media-style-tag-parent li:nth-child(4) {
      display: none;
    }
  }

  @media (max-width: 400px) and (min-width: 0px) {
    .media-style-tag-parent li:nth-child(4), .media-style-page-start, .media-style-page-end {
      display: none;
    }

    .media-style-tag {
      width: 55%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
</style>
