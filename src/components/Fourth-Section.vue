<template>
  <div id="container" class="container-fluid p-0 parallax-desktop">
    <div class="row no-gutters align-items-end" style="min-height: 600px">
      <div
        class="col-10 offset-1 col-sm-3 offset-sm-7 d-flex flex-column justify-content-center align-items-start"
      >
        <h1 class="font-weight-bold" style="color: #613476">LOREM IPSUM</h1>
        <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
        <button style="background-color: #FF7218" class="btn text-white">BUTTON BUTTON</button>
      </div>
      <div class="col-6 offset-1"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FourthSection extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#container {
  background-image: url("../assets/banner-2.jpg");
  background-size: cover;
  background-position: 50% 50%;
}
</style>