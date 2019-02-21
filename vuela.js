var app = new Vue({
  el: '#app',
  data: {
    h1: '',
    p: '',
    heading: 'Hello World',
    paragraph: '',
    fontSize: 6,
    lineHeight: 5
  },
  methods: {
    replaceText: function() {
        this.heading = this.h1;
        this.paragraph = this.p;
    },
    splitHead: function() {
        let arr = this.heading.split('');
        for (i = 0; i < arr.length; i++) {
          arr[i] = '<span>' + arr[i] + '</span>';
        }
        arr = arr.join('');
        document.getElementById("header").innerHTML = arr;
    }
  },
  watch: {}
})
