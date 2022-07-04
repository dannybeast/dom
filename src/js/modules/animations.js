import {
 gsap
} from 'gsap'
import {
 ScrollTrigger,
} from "gsap/dist/ScrollTrigger";
import ScrollMagic from "../libs/ScrollMagic";

function animate(controller, scrollmagic, triggerClass, tl) {

 const trigger = document.querySelector(triggerClass)

 if (!trigger) {return}
 new scrollmagic.Scene({
         triggerElement: triggerClass,
         offset: -250
     })
     .setTween(tl)
     .addTo(controller)
}


export default function () {
 gsap.registerPlugin(ScrollTrigger);

 if (window.matchMedia("(min-width: 1180px)").matches) {

  const tl = gsap.timeline({
   scrollTrigger:{
       scrub: 2,
   }
});


tl.fromTo('.main-intro .i1',{y:-100}, {y: 0, duration: 3})
  .to('.main-intro .i2', {x : -200, duration:3}, '-=3')
  .to('.main-intro .i3', {y : -220, duration:3}, '-=3')
  .to('.main-intro .i4', {y : 200, duration:3}, '-=3')
  .to('.main-intro .i5', {y: 50, scale : 1.4, duration:3}, '-=3')
  .to('.main-intro .i6', {x : 170, duration:3}, '-=3')
  .fromTo('.main-intro__bg', {scale:1}, {scale: 2.9,  duration: 1}, '-=3')


  }


 let animationSpeed = 0.6

 gsap.registerPlugin(ScrollTrigger);
 gsap.config({
     nullTargetWarn: false
 })
 const controller = new ScrollMagic.Controller()


 $('section').each(function () {

 const trigger = $(this)

 if (!trigger) {return}
     new ScrollMagic.Scene({
         triggerElement: trigger[0],
         offset: -300
     })
     .setTween(
         gsap.timeline().fromTo(
             trigger,
                     animationSpeed, {
                         autoAlpha: 0,
                         y: 15
                     }, {
                         autoAlpha: 1,
                         y: 0
                     },
                     //'-=0.1'
                 )
     )
     .addTo(controller) 
 })



 // if($('.intro-composition').length){
 //     let object = {
 //       el: '.intro-composition img',
 //       duration: 3
 //     }
     
 //     gsap.fromTo(object.el, object.duration, {
 //     opacity: 0,
 //       y:  Math.PI * 2,
 //       x: '-=15',
 //       scale: 0.8,
 //     }, {
 //       opacity: 1,
 //       y: '+=10',
 //       x: 0,
 //       scale: 1,
 //       transformOrigin: 'center',
 //        modifiers: {
 //         x: function(x) {
 //           return Math.sin(parseFloat(x)) * 10 + "px";
 //         },
 //         y: function(y) {
 //           return Math.sin(parseFloat(y)) * 15 + "px";
 //         }
 //       },
       
 //       stagger: {
 //         each: object.duration / document.querySelectorAll(object.el).length*0.5, 
 //         repeat: -1, 
 //         yoyo: true
 //       }
 //     },
     
 //     ); }




  

}