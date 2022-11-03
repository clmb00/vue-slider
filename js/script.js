const {createApp} = Vue;

createApp({
  data(){
    return{
      states: [
        {
          name: 'Sweden',
          descr: 'Sweden is a Nordic country in Scandinavia. The capital and largest city is Stockholm.',
          image: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'    
        }, {
          name: 'Peru',
          descr: 'Peru is a country in western South America and has a population of 32 million.',
          image: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg'    
        }, {
          name: 'Chile ',
          descr: 'Chile is a country in the western part of South America. It is the southernmost country in the world.',
          image: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c'    
        }, {
          name: 'Argentina',
          descr: 'Argentina is a country in the southern half of South America. Argentina covers an area of 2,780,400 km2',
          image: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg'    
        }, {
          name: 'Colombia',
          descr: 'Colombia is a country in South America with an insular region in North America.',
          image: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop'    
        }
      ],
      counter: 0,
      interval: null,
      direction: true
    }
  },

  methods:{
    nextImg(right){
      if(right){
        if(++this.counter == this.states.length) this.counter = 0;
      } else {
        if(--this.counter == -1) this.counter = this.states.length -1;
      }
    },
    autoPlay(){
      interval = setInterval(()=>{
        this.nextImg(this.direction);
      },3000);
    },
    stopAutoPlay(){
      clearInterval(interval)
    }
  },

  mounted(){
    this.autoPlay();
  }
}).mount('#app')