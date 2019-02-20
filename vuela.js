var app = new Vue({
  el: '#app',
  data: {
    h1: '',
    p: '',
    heading: 'hello world',
    paragraph: ''
  },
  methods: {
    replaceText: function() {
        this.heading = this.h1;
        this.paragraph = this.p;
    }
  },
  watch: {}
})
console.log(app.heading);
