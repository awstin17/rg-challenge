<template>
  <div id="jumbotron" class="jumbotron pt-3">
    <div class="container">
      <div class="row">
        <div class="col-4 offset-1">
          <img style="max-width: 200px;" src="../assets/logo-white.svg" />
        </div>
      </div>
      <div class="row align-items-center" style="height: 500px">
        <div class="col-12">
          <svg
            style="max-width: 600px; display: block; margin: auto"
            class="text-center"
            viewBox="0 0 15 2"
          >
            <text
              x="50%"
              y="80%"
              text-anchor="middle"
              font-size="1.5"
              fill="none"
              stroke-width=".05"
              stroke="#fff"
              font-family="sans-serif"
            >WELCOME TO</text>
          </svg>
          <h1 style="letter-spacing: 5px;" class="text-center text-white">Rooster Grin</h1>
          <button
            style="background-color: #a041a0"
            class="btn d-block m-auto text-white"
          >Button button</button>
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
</style>
