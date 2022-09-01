var animation = gsap.timeline();

console.log("I'm hope");

animation
    .from("#logo", { duration: 2 ,y: -224 })
    .from("#title", { duration: 1, opacity: 0 ,x: -900 }, "<0.5")
    .from("#sub-title", { duration: 1 ,x: 850 }, "<")
    .from("#car", { duration: 2 ,x: -1200 } )
    .from(".item", { duration: 1 ,y: 900, stagger: .3 }, 1.8 )
    .from(".hamburger", { duration: 1 ,opacity: 0, scale: 0})
