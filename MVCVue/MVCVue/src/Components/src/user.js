const Vue = require('vue');

var CustomComponent = Vue.component('user', {
	template: "<div class=\"well well-lg\">Hello honey</div>"
})

module.exports = CustomComponent;