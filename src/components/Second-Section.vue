<template>
  <div id="container" class="container-fluid p-0 parallax-desktop">
    <div class="row no-gutters" style="height: 600px">
      <div
        style="background-color: rgba(247, 247, 247, 0.8); border-radius: 7%"
        class="col-10 offset-1 col-sm-6 offset-sm-2 my-auto p-3"
      >
        <h1 class="text-center font-weight-bold" style="color: #613476">LOREM IPSUM</h1>
        <button
          style="background-color: #FF7218"
          class="d-block btn text-white m-auto"
        >BUTTON BUTTON</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class SecondSection extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#container {
  background-image: url("../assets/banner-1.jpg");
  background-size: cover;
  background-position: 60%;
}
</style>