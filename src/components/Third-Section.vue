<template>
  <div id="container" class="container-fluid p-0">
    <div class="row no-gutters">
      <div class="col-3 offset-2 d-flex flex-column justify-content-center align-items-start">
        <h1 class="font-weight-bold">LOREM IPSUM DOLOR SIT AMET</h1>
        <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
        <a style="color: #613476">> Lorem Ipsum</a>
      </div>
      <div
        style="background-color: #FAFAFA"
        class="col-6 offset-1 d-flex flex-column justify-content-around p-5"
      >
        <div class="row mt-5">
          <div class="col-5 offset-1 text-center">
            <div style="width: 80px" class="border rounded-circle image-container mx-auto mb-3">
              <img class="p-3" src="../assets/home-expertise.svg" width="100%" />
            </div>
            <h5>LOREM</h5>
          </div>
          <div class="col-6 text-center">
            <div style="width: 80px" class="border rounded-circle image-container mx-auto mb-3">
              <img class="p-3" src="../assets/home-hygiene.svg" width="100%" />
            </div>
            <h5>LOREM IPSUM</h5>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-5 offset-1 text-center">
            <div style="width: 80px" class="border rounded-circle image-container mx-auto mb-3">
              <img class="p-3" src="../assets/home-lab.svg" width="100%" />
            </div>
            <h5>LOREM IPSUM</h5>
          </div>
          <div class="col-6 text-center">
            <div style="width: 80px" class="border rounded-circle image-container mx-auto mb-3">
              <img class="p-3" src="../assets/home-retention.svg" width="100%" />
            </div>
            <h5>LOREM IPSUM</h5>
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