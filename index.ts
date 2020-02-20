import Vue from 'vue';
import App from './App.vue';
import "./style.css";
import "./store";
import List from "./components/List/test-list";

const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<h1>Vuex</h1> <test-list></test-list>`;

new Vue({
	render: h => h(App),
}).$mount('#app');

