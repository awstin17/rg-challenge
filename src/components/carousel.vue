<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators" style="bottom: -60px">
      <li
        style="background-color: #FFC718; width: 10px; height: 10px; border-radius: 50%"
        data-target="#carouselExampleIndicators"
        data-slide-to="0"
        class="active"
      >
        <font-awesome-icon class="h1" icon="angle-left" />
      </li>
      <li
        style="background-color: #FFC718; width: 10px; height: 10px; border-radius: 50%"
        data-target="#carouselExampleIndicators"
        data-slide-to="1"
      ></li>
      <li
        style="background-color: #FFC718; width: 10px; height: 10px; border-radius: 50%"
        data-target="#carouselExampleIndicators"
        data-slide-to="2"
      ></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <h5 class="text-center mb-5" style="color: #613476">John Doe 08/08/2019</h5>
        <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.</p>
      </div>
      <div class="carousel-item">
        <h5 class="text-center mb-5" style="color: #613476">John Doe 08/08/2019</h5>
        <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.</p>
      </div>
      <div class="carousel-item">
        <h5 class="text-center mb-5" style="color: #613476">John Doe 08/08/2019</h5>
        <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.</p>
      </div>
    </div>
    <a
      class="carousel-control-prev style="
      mr-5
      href="#carouselExampleControls"
      role="button"
      data-slide="prev"
      style="left: -60px"
    >
      <span class style="color: #613476" aria-hidden="true">
        <font-awesome-icon class="h1" icon="angle-left" />
      </span>
      <span class="sr-only">Previous</span>
    </a>

    <a
      class="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-slide="next"
      style="right: -60px"
    >
      <span class style="color: #613476" aria-hidden="true">
        <font-awesome-icon class="h1" icon="angle-right" />
      </span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Carousel extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>