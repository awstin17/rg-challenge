<template>
  <div id="carousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        data-target="#carouselIndicators"
        data-slide-to="0"
        class="active indicator rounded-circle"
      ></li>
      <li data-target="#carouselIndicators" data-slide-to="1" class="indicator rounded-circle"></li>
      <li data-target="#carouselIndicators" data-slide-to="2" class="indicator rounded-circle"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <h5 class="text-center text-secondary mb-5">John Doe 08/08/2019</h5>
        <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.</p>
      </div>
      <div class="carousel-item">
        <h5 class="text-center text-secondary mb-5">John Doe 08/08/2019</h5>
        <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.</p>
      </div>
      <div class="carousel-item">
        <h5 class="text-center text-secondary mb-5">John Doe 08/08/2019</h5>
        <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.</p>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
      <span class="text-secondary" aria-hidden="true">
        <font-awesome-icon class="h1" icon="angle-left" />
      </span>
      <span class="sr-only">Previous</span>
    </a>

    <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
      <span class="text-secondary" aria-hidden="true">
        <font-awesome-icon class="h1" icon="angle-right" />
      </span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Carousel extends Vue {}
</script>

<style scoped lang="scss">
.carousel-indicators {
  bottom: -60px;
}

.indicator {
  background-color: #ffc718;
}

.carousel-control-prev {
  left: -60px;
}

.carousel-control-next {
  right: -60px;
}
</style>