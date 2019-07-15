<template>
  <div id="container" class="container-fluid p-0">
    <div class="row no-gutters" style="height: 600px">
      <div class="col-3 offset-2 d-flex flex-column justify-content-center align-items-start">
        <h1 class="font-weight-bold" style="color: #613476">Lorem Ipsum</h1>
        <button style="background-color: #FF7218" class="btn text-white">BUTTON BUTTON</button>
      </div>
      <div class="col-6 offset-1"></div>
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
  background-attachment: fixed;
}
</style>