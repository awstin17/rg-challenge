<template>
  <div class="container-fluid p-0">
    <div style="min-height: 526px" class="row no-gutters">
      <div class="col-12 col-sm-3 offset-sm-2 d-flex flex-column justify-content-center py-5 px-2">
        <h1 class="font-weight-bold" style="color: #613476">Lorem Ipsum</h1>
        <p>Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula, lacus est vehicula donec. Quam in ac quam. Duis et, non arcu imperdiet sem tellus suspendisse. Condimentum non aliquet sed, quisque risus vitae semper duis feugiat .</p>
        <a href style="color: #613476">> Lorem Ipsum</a>
      </div>
      <div style="min-height: 400px" id="test" class="col-12 col-sm-6 offset-sm-1 pb-5 pb-sm-0"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FirstSection extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#test {
  background-image: url("../assets/img-1.jpg");
  background-position: 50%;
  background-size: cover;
}
</style>