<template>
  <div id="footer-container" class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <p class="text-center">Follow Us:</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-4 offset-sm-4 text-center">
        <a href="#">
          <img src="../assets/instagram.svg" class="mr-3" width="50" />
        </a>
        <a href="#">
          <img src="../assets/facebook.svg" width="50" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#footer-container {
  background-color: #fafafa;
}

.icons {
  // fill: #613476;
}
</style>
