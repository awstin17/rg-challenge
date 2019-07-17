<template>
  <div
    id="hero-container"
    class="container-fluid parallax background-cover d-flex flex-column pt-4"
  >
    <div class="row">
      <div class="col-4 offset-sm-1">
        <img id="roostergrin-logo" src="../assets/logo-white.svg" />
      </div>
    </div>
    <div class="row m-auto">
      <div class="col-12 mb-5" data-aos="fade" data-aos-duration="500">
        <!-- Welcome to text is image to achieve no fill font. SVG tag difficult to manipulate -->
        <img id="welcometo-image" src="../assets/welcome to.png" width="100%" class="m-auto" />
        <h1 id="company-title" class="text-center text-white">Rooster Grin</h1>
        <button class="btn btn-primary d-block m-auto text-white">BUTTON BUTTON</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
#hero-container {
  background-image: url("../assets/hero.jpg");
  background-position: 50% 50%;
  min-height: 750px;
}

#roostergrin-logo {
  max-width: 200px;
  min-width: 150px;
}

#welcometo-image {
  max-width: 430px;
}

#company-title {
  letter-spacing: 5px;
}

@media (min-width: 576px) {
  #company-title {
    font-size: 3.5rem;
  }
}
</style>
