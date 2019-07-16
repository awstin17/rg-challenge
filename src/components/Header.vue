<template>
  <div id="jumbotron" class="jumbotron pt-3 mb-0">
    <div class="container">
      <div class="row">
        <div class="col-4 offset-sm-1">
          <img style="max-width: 200px; min-width: 150px;" src="../assets/logo-white.svg" />
        </div>
      </div>
      <div class="row align-items-center" style="height: 500px">
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
#jumbotron {
  background-image: url("../assets/hero.jpg");
  background-size: cover;
}

@media (min-width: 576px) {
  h1 {
    font-size: 3.5rem;
  }
}
</style>
