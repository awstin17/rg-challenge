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
              <h6 class="text-center mb-5" style="color: #613476">John Doe 08/08/2019</h6>
              <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in.</p>
            </div>
            <div class="carousel-item">
              <h6 class="text-center mb-5" style="color: #613476">John Doe 08/08/2019</h6>
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FifthSection extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>