<template>
  <div id="container" class="container-fluid p-0">
    <div style="min-height: 600px" class="row no-gutters">
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="250"
        class="col-12 col-sm-3 offset-sm-2 d-flex flex-column justify-content-center align-items-start px-4 py-5"
      >
        <h1 class="font-weight-bold">LOREM IPSUM DOLOR SIT AMET</h1>
        <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
        <a href="#" style="color: #613476">> Lorem Ipsum</a>
      </div>
      <div
        style="background-color: #FAFAFA"
        class="col-12 col-sm-6 offset-sm-1 p-3 d-flex flex-column justify-content-center align-items-center py-5"
      >
        <div style="max-width: 700px" class="row w-100 mb-5">
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            class="col-6 col-sm-5 offset-sm-1 text-center"
          >
            <div style="width: 80px" class="border rounded-circle image-container mx-auto mb-3">
              <img class="p-3" src="../assets/home-expertise.svg" width="100%" />
            </div>
            <h5>LOREM</h5>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="250"
            class="col-6 text-center"
          >
            <div style="width: 80px" class="border rounded-circle image-container mx-auto mb-3">
              <img class="p-3" src="../assets/home-hygiene.svg" width="100%" />
            </div>
            <h5>LOREM IPSUM</h5>
          </div>
        </div>
        <div class="row w-100">
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            class="col-6 col-sm-5 offset-sm-1 text-center"
          >
            <div style="width: 80px" class="border rounded-circle image-container mx-auto mb-3">
              <img class="p-3" src="../assets/home-lab.svg" width="100%" />
            </div>
            <h5>LOREM IPSUM</h5>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="250"
            class="col-6 text-center"
          >
            <div style="width: 80px" class="border rounded-circle image-container mx-auto mb-3">
              <img class="p-3" src="../assets/home-retention.svg" width="100%" />
            </div>
            <h5>LOREM</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ThirdSection extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.image-container {
  border-color: #ac5fd0 !important;
}
</style>