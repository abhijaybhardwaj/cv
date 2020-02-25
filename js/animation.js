
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


anime.timeline()
.add({
// targets: '.ml1',
// translateX:650,
// easing: "easeOutExpo",
// delay: anime.stagger(10000)
// delay: anime.stagger(100, {start: 500})
// delay: anime.stagger(19000, {from: 'center'}),
// delay:19000,
// delay: (el, i) => 70 * (i+1),
// offset: '-=2000',
// delay: (el, i, l) => 80 * (l - i)
targets: '.ml1 .letter',
translateY: ["1.1em", 0],
translateZ: 0,
duration: 3000,
delay: (el, i) => 50 * i
}).add({
targets: '.ml1 .line',
scaleX: [0,1],
opacity: [0.5,1],
easing: "easeOutExpo",
duration: 1000,
offset: '-=875',
delay: (el, i, l) => 80 * (l - i),
}).add({
  targets: '.ml1',
  // translateX:-250,
  // duration:3000,
// delay: (el, i) => 50 * i

//Second Animation

}).add({
    targets: '.ml5',
    opacity: [0.5,1],
    scaleX: [0, 1],
    easing: "easeInOutExpo",
    duration: 700,
  
  }).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
  }).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
  }).add({
    targets: '.ml5',
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
    

//third Animation
}).add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,0],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000



//forth Animation
 }).add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    // opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000


});



