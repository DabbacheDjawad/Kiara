import { text } from '@fortawesome/fontawesome-svg-core';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors :{
      'main-light-grey' : "#F1F1F0",
      'main-medium-grey':"#787878",
      'emphasis-grey':"rgba(0 , 0 , 0 , 0.65)",
      'black':"#000000",
      'white':"#FFFF"
    },
    extend: {
      keyframes:{
        navAnimation:{
          '0%':{height:'0%'},
          '10%':{height:'10%'},
          '20%':{height:'20%'},
          '30%':{height:'30%'},
          '40%':{height:'40%'},
          '50%':{height:'50%'},
          '60%':{height:'60%'},
          '70%':{height:'70%'},
          '80%':{height:'80%'},
          '90%':{height:'90%'},
          '100%':{height:'100%'},
        },
      },
      animation :{
        navAnimation : 'navAnimation 1s',
      },
      fontFamily:{
        f:'Sansita',
      }
    },

   screens:{
      'xm': {'min': '300px'},
      'sm':{'min' : '640px'},
      'md':{'min' : '768px'},
      'lg':{'min' : '1024px'},
      'xl' : {'min' : '1280'},      
    }
  },
  plugins: [],
}
