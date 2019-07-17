<template>
  <div class="container-fluid p-0">
    <div id="first-section-row" class="row no-gutters">
      <div
        id="left-column"
        data-aos="fade-right"
        data-aos-duration="500"
        class="col-10 offset-1 col-sm-4 offset-sm-1 col-lg-3 offset-lg-2 d-flex flex-column justify-content-center py-5 py-sm-4"
      >
        <h1 id="title" class="text-secondary">LOREM IPSUM</h1>
        <p
          id="description"
        >Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat .</p>
        <a id="link" href>> Lorem Ipsum</a>
      </div>
      <!-- Image is background and not img tag for covering purposes -->
      <div id="hikeimg-column" class="background-cover col-12 col-sm-6 offset-sm-1"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class FirstSection extends Vue {}
</script>

<style scoped lang="scss">
#first-section-row {
  min-height: 526px;
}

#hikeimg-column {
  background-image: url("../assets/img-1.jpg");
  background-position: 75%, 50%;
  min-height: 450px;
}
</style>