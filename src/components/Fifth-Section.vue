<template>
  <div class="container-fluid p-0">
    <div id="third-section-row" class="row no-gutters align-items-center pb-5 pb-sm-0">
      <div
        id="left-column"
        class="col-10 offset-1 col-sm-4 offset-sm-1 col-md-3 offset-md-2 d-flex flex-column justify-content-center py-5 py-sm-0"
      >
        <h1 class="text-center text-secondary">LOREM IPSUM DOLOR SIT AMET</h1>
        <img id="stars-image" src="../assets/stars.png" class="m-auto h-auto w-100" />
      </div>

      <div id="right-column" class="col-8 offset-2 col-sm-5 offset-sm-1 col-md-4 pb-4 pb-sm-0">
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
#third-section-row {
  min-height: 600px;
}

#stars-image {
  max-width: 176px;
  max-height: 26px;
}
</style>