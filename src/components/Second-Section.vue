<template>
  <div id="container" class="container-fluid p-0">
    <div class="row" style="height: 600px">
      <div class="col-6 col-sm-3 offset-1 offset-sm-2 my-auto">
        <h1 class="font-weight-bold" style="color: #613476">LOREM IPSUM</h1>
        <button style="background-color: #FF7218" class="btn text-white">BUTTON BUTTON</button>
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
  background-attachment: fixed;
  background-position: 60%;
}
</style>