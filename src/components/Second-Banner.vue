<template>
  <div id="second-banner-container" class="container-fluid parallax background-cover p-0">
    <div id="second-banner-row" class="row no-gutters">
      <div class="bg-light rounded col-10 offset-1 col-sm-4 offset-sm-7 col-md-3 my-auto p-3">
        <h1 class="text-secondary text-center text-sm-left">LOREM IPSUM</h1>
        <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
        <button class="btn btn-info d-block text-white m-auto m-sm-0">BUTTON BUTTON</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SecondBanner extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#second-banner-container {
  background-image: url("../assets/banner-2.jpg");
  background-size: cover;
  background-position: 30%;
}

#second-banner-row {
  min-height: 600px;
}
</style>