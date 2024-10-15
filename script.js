gsap.from('#box1', {
  x: -160,
  borderRadius: "50%",
  backgroundColor:"pink",
  duration:1,
  delay: 1,
  rotate: 360,
  repeat: -1,
  yoyo:true
})

gsap.from('.box2', {
  x: 160,
  borderRadius: "50%",
  backgroundColor:"aqua",
  duration:1,
  delay: 1,
  rotate: 360,
  repeat: -1,
  yoyo:true
})

gsap.from('.box3', {
  x: -160,
  borderRadius: "50%",
  backgroundColor:"green",
  duration:1,
  delay: 1,
  rotate: 360,
  repeat: -1,
  yoyo:true
})

gsap.from('.box4', {
  x: 160,
  borderRadius: "50%",
  backgroundColor:"blue",
  duration:1,
  delay: 1,
  rotate: 360,
  repeat: -1,
  yoyo:true
})

gsap.from('.box5', {
  x: -160,
  borderRadius: "50%",
  backgroundColor:"gray",
  duration:1,
  delay: 1,
  rotate: 360,
  repeat: -1,
  yoyo:true
})

var tl = gsap.timeline()

tl.from('.navLinks div', {
  opacity: 0,
  y: -30,
  duration:1,
  delay: 1,
  stagger: 0.3,
})

tl.from('.heading h2', {
  opacity: 0,
  y: -30,
  duration:0.5,
})

tl.from('.motion h4', {
  opacity: 0,
  y: 30,
  duration:1,
  stagger: 0.3,
})

tl.from('.myName h1', {
  opacity: 0,
  scale: 0.2,
  duration:1,
})