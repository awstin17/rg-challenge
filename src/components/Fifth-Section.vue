<template>
  <div class="container-fluid p-0">
    <div class="row no-gutters align-items-center pb-5 pb-sm-0" style="min-height: 600px">
      <div class="py-5 col-12 col-sm-3 offset-sm-2 d-flex flex-column justify-content-center">
        <h1 class="text-center font-weight-bold" style="color: #613476">LOREM IPSUM DOLOR SIT AMET</h1>
        <img
          src="../assets/stars.png"
          style="height: auto; width: 100%; max-width: 176px; max-height: 26px"
          class="m-auto"
        />
      </div>

      <div class="col-8 offset-2 col-sm-4 offset-sm-1 pb-5 pb-sm-0">
        <Carousel />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Carousel from "./carousel.vue";

@Component({
  components: {
    Carousel
  }
})
export default class FifthSection extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>