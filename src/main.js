// src/main.js
import { createApp } from "vue";
import vueCustomElement from "vue-custom-element";
import AddDateMonth from "./components/AddDateMonth.vue";

const app = createApp(AddDateMonth);

app.use(vueCustomElement);
app.component("date-manipulation", vueCustomElement(app, AddDateMonth));

app.mount("#app");
