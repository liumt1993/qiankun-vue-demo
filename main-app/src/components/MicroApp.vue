<template>
  <div id="micro-app-container"></div>
</template>

<script>
import { loadMicroApp } from "qiankun";
export default {
  mounted() {
    const { microAppName, microAppEntry } = this.$route.meta;

    if (microAppName && microAppEntry) {
      this.microApp = loadMicroApp({
        name: microAppName, // app name registered
        entry: microAppEntry,
        container: "#micro-app-container",
        sandbox: {
          strictStyleIsolation: true,
        },
      });
    }

    console.log(this.microApp);
  },
  beforeDestroy() {
    this.microApp.unmount();
  },
  unmounted() {
    this.microApp.unmount();
  },
};
</script>