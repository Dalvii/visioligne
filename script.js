const plan = document.getElementById('plan')


const observerPlan = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting
        console.log(intersecting)
        if (intersecting == true || window.screen.width < 500) {
            observerPlan.unobserve(entry.target)
            plan.style.transform = 'translate(0px, -150px)';
            const planMenu = document.getElementsByClassName('planMenu')
            for (let i = 0; i < planMenu.length; i++) {
                planMenu[i].style.opacity = 1;
            }
        }
    })
}, {
    rootMargin: "-150px",
    threshold: 0.5
})
try {
    observerPlan.observe(plan)
} catch (e) {
    
}




const observerScroll = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting
        // console.log(entry.target)
        if (intersecting == true) {
            entry.target.style.opacity = 1;
            observerScroll.unobserve(entry.target)
        }
    })
}, {
    rootMargin: "-50px",
    threshold: 0
})

const animate = document.getElementsByClassName('animate')
for (let i = 0; i < animate.length; i++) {
    observerScroll.observe(animate[i])
    // console.log(animate[i])
}


const images = ['img/white.png', 'img/dark.png']

let planBtn = document.querySelectorAll('.planBtn')
for (let i = 0; i < planBtn.length; i++) {
    planBtn[i].addEventListener('click', (e) => {
        // console.log(i)
        document.getElementById('plan').src = images[i]
        const btns = e.target.parentNode.parentNode.children
        for (let y = 0; y < btns.length; y++) {
            btns[y].ariaSelected=false; 
        }
        e.target.parentNode.ariaSelected = true;
    })
}




// const subnav = document.getElementById('subnav')
// const nav = document.getElementById('nav1')
// nav.addEventListener("mouseenter", function( event ) {

//     subnav.style.display = 'block'

//     setTimeout(function() {
//         subnav.style.opacity = '1'
//     }, 5);
// }, false);


// nav.addEventListener("mouseout", function( event ) {

//     subnav.style.opacity = '0'
    
//     setTimeout(function() {
//         subnav.style.display = 'none'

//     }, 500);
//   }, false);


    // let mouseX = 0;
    // let mouseY = 0;
    // let xp = 0;
    // let yp = 0;
  
    // document.onmousemove = function(e) {
    //     document.getElementById('custom__cursor__inner').style.transform =
    //         'translate(' + (e.clientX - 3.25) + 'px, ' + (e.clientY - 3.25) + 'px)';
   
        
    //     mouseX = e.clientX - 10;
    //     mouseY = e.clientY - 60;
    // }
  
    // setInterval(function(){
    //     xp += ((mouseX - xp)/6);
    //     yp += ((mouseY - yp)/6);
    //     document.getElementById('custom__cursor__outer').style.transform = 'translateX('+ (xp - 15) +'px) translateY('+ (yp - 15) +'px)';
    // }, 10);