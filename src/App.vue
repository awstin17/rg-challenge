<template>
  <div id="app">
    <Header />
    <FirstSection />
    <FirstBanner />
    <SecondSection />
    <SecondBanner />
    <ThirdSection />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import FirstSection from "./components/First-Section.vue";
import FirstBanner from "./components/First-Banner.vue";
import SecondSection from "./components/Second-Section.vue";
import SecondBanner from "./components/Second-Banner.vue";
import ThirdSection from "./components/Third-Section.vue";
import Footer from "./components/footer.vue";

@Component({
  components: {
    Header,
    FirstSection,
    FirstBanner,
    SecondSection,
    SecondBanner,
    ThirdSection,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style lang="scss"></style>
