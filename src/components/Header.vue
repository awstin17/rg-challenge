<template>
  <div style="min-height: 600px" id="container" class="pt-4 container-fluid parallax-desktop">
    <div class="row no-gutters">
      <div class="col-4 offset-sm-1">
        <img style="max-width: 200px; min-width: 150px;" src="../assets/logo-white.svg" />
      </div>
    </div>
    <div class="row no-gutters align-items-center" style="height: 500px">
      <div class="col-12">
        <img
          src="../assets/welcome to@2x.png"
          width="100%"
          class="m-auto d-block"
          style="max-width: 430px"
        />
        <h1 style="letter-spacing: 5px;" class="text-center text-white">Rooster Grin</h1>
        <button
          style="background-color: #a041a0"
          class="btn d-block m-auto text-white"
        >BUTTON BUTTON</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#container {
  background-image: url("../assets/hero.jpg");
  background-size: cover;
  background-position: 50% 50%;
}

@media (min-width: 576px) {
  h1 {
    font-size: 3.5rem;
  }
}
</style>
