const { createApp } = Vue
  

createApp({
    data() {
        return {
            count: 0
        }
    }
}).use(Vue3Dummy).mount('#app')