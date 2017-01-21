const Vue = require('vue');
const VueRouter = require('vue-router');

const tc = require('../../Components/src/user.js');
const hello = require('../../Components/src/hello.vue');
const aloha = require('../../Components/src/aloha.vue');

Vue.use(VueRouter);

var Foo = Vue.extend({
	template: "<p>this is foo component</p>"
})

var Bar = Vue.extend({
	template: '<p>This is bar component with subcomponents<user></user><hello>qwe</hello><aloha></aloha></p>',
	components: {
		hello, aloha
	}
});


const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
	routes: routes,
	history: true,
	root: "/VueRouting"
})

const app = new Vue({
	router: router,
	data: {
		message: "Hello vue world."
	}
}).$mount('#app')

