<template>
  <div class="home">
    <jsx>
      <test slot="test"></test>
      <div style="height: 100vh;"></div>
    </jsx>
  </div>
</template>

<script>
// @ is an alias to /src
import Jsx from "@/components/Jsx";
import Test from "@/components/Test";
export default {
  name: "Home",
  components: {
    Jsx,
    Test
  },
  methods: {
    scroll() {
      console.log(document.documentElement.scrollTop);
    }
  },
  created() {
    window.addEventListener("scroll", this.scroll, false);
    /* 程序化侦听器 实现自动清理 */
    this.$once("hook:beforeDestroy", function() {
      window.removeEventListener("scroll", this.scroll, false);
    });
    this.$store.dispatch('test')
  }
};
</script>
