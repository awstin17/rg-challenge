<template>
  <div id="app">
    <Header />
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import FirstSection from "./components/First-Section.vue";
import SecondSection from "./components/Second-Section.vue";
import ThirdSection from "./components/Third-Section.vue";
import FourthSection from "./components/Fourth-Section.vue";
import FifthSection from "./components/Fifth-Section.vue";
import Footer from "./components/footer.vue";

@Component({
  components: {
    Header,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FifthSection,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap");
#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
}
</style>
