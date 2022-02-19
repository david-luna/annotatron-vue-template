<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="action-buttons">
    <button @click="echo">Echo!</button>
  </div>
</template>

<script lang="ts">
/*global backend*/
import { Vue } from "vue-class-component";

export default class About extends Vue {
  echo(): void {
    /**
     * DISCLAIMER: for demo purposes. Usage of store to comunicate to the backend
     * via side effects/thunks is higly recommended
     */
    backend.dispatchCommand({
      type: "echo",
      payload: "Message sent at " + new Date().toString(),
    });
  }

  mounted(): void {
    /**
     * DISCLAIMER: for demo purposes.
     * Usage of store to listen to the backend via side effects/thunks is higly recommended.
     */
    backend.results$.subscribe((result) => {
      console.log("result from backend", result);
    });
    backend.errors$.subscribe((error) => {
      console.log("error from backend", error);
    });
  }
}
</script>
