<template>
  <div class="container-fluid p-0">
    <div id="secondsection-main-row" class="row no-gutters">
      <div
        id="left-column"
        data-aos="fade-right"
        data-aos-duration="500"
        class="col-10 offset-1 col-sm-4 offset-sm-1 col-lg-3 offset-lg-2 d-flex flex-column justify-content-center py-5 py-sm-4"
      >
        <h1 id="title">LOREM IPSUM DOLOR SIT AMET</h1>
        <p
          id="description"
        >Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.</p>
        <a id="link" href="#" class="text-secondary">> Lorem Ipsum</a>
      </div>
      <div
        id="right-column"
        class="col-12 col-sm-6 offset-sm-1 d-flex flex-column justify-content-center py-5 py-sm-0"
      >
        <div class="row icon-row mb-5">
          <div data-aos="zoom-in" data-aos-duration="500" class="col-5 offset-1 text-center">
            <div
              class="hvr-grow border border-primary icon-container rounded-circle mx-auto mb-3 p-3"
            >
              <img src="../assets/home-expertise.svg" />
            </div>
            <h5>LOREM</h5>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="250"
            class="col-5 col-sm-6 text-center"
          >
            <div
              class="hvr-grow border border-primary icon-container rounded-circle mx-auto mb-3 p-3"
            >
              <img src="../assets/home-hygiene.svg" />
            </div>
            <h5>LOREM IPSUM</h5>
          </div>
        </div>
        <div class="row icon-row">
          <div data-aos="zoom-in" data-aos-duration="500" class="col-5 offset-1 text-center">
            <div
              class="hvr-grow border border-primary icon-container rounded-circle mx-auto mb-3 p-3"
            >
              <img src="../assets/home-lab.svg" />
            </div>
            <h5>LOREM IPSUM</h5>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="250"
            class="col-5 col-sm-6 text-center"
          >
            <div
              class="hvr-grow border border-primary icon-container rounded-circle mx-auto mb-3 p-3"
            >
              <img src="../assets/home-retention.svg" />
            </div>
            <h5>LOREM</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SecondSection extends Vue {}
</script>

<style scoped lang="scss">
#secondsection-main-row {
  min-height: 600px;
}

#right-column {
  background-color: #fafafa;
}

.icon-row {
  max-width: 550px;
}

.icon-container {
  width: 80px;
}
</style>