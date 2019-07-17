<template>
  <div id="first-banner-container" class="container-fluid parallax background-cover p-0">
    <div id="first-banner-row" class="row no-gutters">
      <div
        class="bg-light rounded col-10 offset-1 col-sm-4 offset-sm-1 col-md-3 offset-md-2 my-auto p-3"
      >
        <h1 class="text-center text-secondary">LOREM IPSUM</h1>
        <button class="btn btn-info text-white d-block m-auto">BUTTON BUTTON</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FirstBanner extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#first-banner-container {
  background-image: url("../assets/banner-1.jpg");
  background-size: cover;
  background-position: 60%;
}

#first-banner-row {
  min-height: 600px;
}
</style>