import { createApp } from "vue";
import "./css/globals.css";
import App from "./App.vue";
import { router } from "./router";


import { createPinia } from "pinia";

import './_mockApis'




const app = createApp(App);

app.use(createPinia());


app.use(router);



app.mount("#app");
