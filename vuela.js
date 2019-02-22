

Vue.component('my-comp', {
  data: function(){
    return {
      names: ['Charlie', 'Max', 'Barack', 'Wally'] 
    }  
  },
  template: '<div class="bubbles"><div class="pill" v-for="name in names"><i>C</i>{{ name }}</div></div>'
})

var app = new Vue({
  el: '#app',
  data: {
    h1: '',
    p: '',
    heading: 'Hello World',
    paragraph: '',
    fontSize: 6,
    lineHeight: 5,
    bgStart: 'url(\"',
    bgURL: './img/img.jpg',
    bgEnd: '\")',
    bgRepeat: 'no-repeat',
    bgPosX: 0,
    bgPosY: 0,
    bgScale: 100,
    bgWidth: 550,
    bgHeight: 300,
    nameInitial: '',
    name: 'Charlie'
  },
  computed: {
    nameInitialMaker: function(){
      this.nameInitial = this.name.charAt(0);
      return this.nameInitial;
    },

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
