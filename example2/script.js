const app = Vue.createApp({
  data() {
    return {
      message: `You loaded this page on ${new Date().toLocaleString()}`
    }
  }
}).mount('#app');
