<template>
  <div>
    <!-- ハンバーガーメニューのアイコン -->
    <div id="hamburger" @click="toggleMenu" :class="{ active: menuActive }">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!-- ナビゲーションメニュー -->
    <nav v-if="menuActive">
      <!-- <router-link to="/message">Message</router-link>
      <router-link to="/companyoverview">Overview</router-link>
      <router-link to="/productintroduction">Product</router-link>
      <router-link to="/accesspoint">Access</router-link>
      <router-link to="/companyquery">Query</router-link>-->
      <a href="javascript:void(0)" @click="scrollToTop">Top</a>
      <a href="#boxa">Overview</a>
      <a href="#boxb">Product</a>
      <a href="#boxc">Access</a>
      <a href="#boxd">Query</a>
    </nav>
    <header id="header" data-section-name="header">
        <div id="app" class="fade-in">
            <img
              src="@/assets/logo.png"
              alt="Logo"
              class="logo app-logo"
              ref="logo"
              @mouseover="enlargeLogo"
              @mouseleave="resetLogo"
              @click="goToTop"
            >
        </div>
      <HelloWorld v-if="showHelloWorld" msg="
      <span style='font-size: 1.8em'>私たちrobottteは<span style='color: red'>『年齢を重ねながら、幸せに暮らせる社会の実現』</span>に向け、
      ロボの手で、人の手を支えて参ります。私たちの志、思いについて、記載しております。
      私たちと一緒に、より良い未来を創造していきませんか。"/>
    </header>
      <main>
      <section class="box" data-section-name="Area1"><!--id="box2" -->
      <router-view name="boxa"></router-view>
      </section>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <section class="box" data-section-name="Area2"><!--id="box2" -->
      <router-view name="boxb"></router-view>
      </section>      
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <section class="box" data-section-name="Area3"><!--id="box3" -->
      <HelloWorld v-if="showHelloWorld" msg="
      私達の拠点情報になります。働く場所に囚われず、
      リモートで働ける環境もございます。"/>
      <router-view name="boxc"></router-view>
      </section>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <section class="box" data-section-name="Area4"><!--id="box4" -->
      <HelloWorld v-if="showHelloWorld" msg="
      お問合せはこちらにお願いします。"/>
      <router-view name="boxd"></router-view>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <!--/box--></section>
      </main>
        <footer id="footer" data-section-name="footer"></footer>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Vue from 'vue';
import VueRouter from 'vue-router';
import '../js/6-1.js';  // 6-1.jsへのパスを指定
import scrollify from 'jquery-scrollify';

Vue.use(VueRouter);

export default {
  props: ['msg'],
  name: 'App',
  components: {
    HelloWorld
  },
//  mounted() {
//    this.$nextTick(() => {
//      scrollify(/* オプション */);
//    });
//  },
  mounted() {
              scrollify({section : ".box",});
  },
  methods: {
    enlargeLogo() {
      this.$refs.logo.style.transform = 'scale(1.2)';
    },
    resetLogo() {
      this.$refs.logo.style.transform = 'scale(1)';
    },
    goToTop() {
      const currentPath = this.$route.path;
      if (currentPath !== '/') {
        this.$router.push('/');
      }
    },
    toggleMenu() {
      this.menuActive = !this.menuActive;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  data() {
    return {
      currentSection: 0,
      showHelloWorld: true,
      menuActive: false,
    };
  },
  watch: {
    '$route'(to) { // fromを削除。
      // 特定のページ（例えばホームページ）でのみHelloWorldを表示する
      this.showHelloWorld = to.path === '/';
    }
  },
  computed: {
    formattedMessage() {
      return this.msg.replace(/<span style='color: red;'>/g, "<span class='custom-text'>");
    }
  },
}
</script>

<style scoped>
@import '@/assets/css/6-1.css'; 

#app {
  font-family: 'BIZ UDPゴシック', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.custom-text {
  font-family: 'BIZ UDPゴシック', sans-serif;
  font-size: 1.2em; /* 例として1.2emを使用 */
}

.logo {
  width: 30vw;
  height: auto;
  margin-bottom: 10px;
}

.logo:hover {
  transform: scale(1.2);
  transition: transform 0.5s ease;
  cursor: pointer;
}

.logo {
  transition: transform 0.5s ease;
}

.logo:not(:hover) {
  transform: none; 
}

.app-logo {
  cursor: pointer;
}

.pointer-link:hover {
  cursor: pointer;
}

@media (max-width: 600px) {
  .logo {
    width: 70vw;
  }
}

.fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* ページ遷移時のトランジションのスタイル */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

/* リンクのスタイル */
router-link {
  font-size: 20px;
  text-decoration: none;
  color: #2c3e50;
  margin: 5px;
  transition: color 0.3s;
}
router-link:hover {
  color: #3498db;
}
/* ハンバーガーメニューのスタイル */
#hamburger {
  cursor: pointer;
  display: block; /* デフォルトでは非表示 */
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
}

#hamburger span {
  display: block;
  width: 30px;
  height: 3px;
  margin-bottom: 5px;
  background-color: #333;
  transition: all 0.3s ease-in-out;
}

#hamburger.active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

#hamburger.active span:nth-child(2) {
  opacity: 0;
}

#hamburger.active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* ナビゲーションメニューのスタイル */
nav {
  display: block; /* デフォルトでは非表示 */
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.2);
  padding: 20px;
}

nav a {
  display: block;
  margin: 10px 0;
  color: #333;
  text-decoration: none;
  font-size: 18px;
}
/* メニューがアクティブの時 */
nav.active {
  display: block;
}

/* レスポンシブ対応のスタイル */
@media (max-width: 800px) {
  #hamburger {
    display: block; /* モバイルビューではハンバーガーメニューを表示 */
  }
}
</style>
