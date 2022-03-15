const plan = document.getElementById('plan')


const observerPlan = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting
        console.log(intersecting)
        if (intersecting == true) {
            observerPlan.unobserve(entry.target)
            plan.style.transform = 'translate(0px, -150px)';
            const planMenu = document.getElementsByClassName('planMenu')
            for (let i = 0; i < planMenu.length; i++) {
                planMenu[i].style.opacity = 1;
            }
        }
    })
}, {
    rootMargin: "00px",
    threshold: 0.5
})
observerPlan.observe(plan)




const observerScroll = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const intersecting = entry.isIntersecting
        console.log(entry.target)
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
    console.log(animate[i])
}


const images = ['/test.png', 'https://www.expertest.tn/wp-content/uploads/2021/04/Custom-Software-Development.jpg']
const descriptions = ['fs  fesse fs fe fes', 'kjh kkuhkhu kuhkh']

let planBtn = document.querySelectorAll('.planBtn')
for (let i = 0; i < planBtn.length; i++) {
    planBtn[i].addEventListener('click', (e) => {
        console.log(i)
        document.getElementById('plan').src = images[i]
        // document.getElementById('planDesc').innerText = descriptions[i]
        const btns = e.target.parentNode.parentNode.children
        for (let y = 0; y < btns.length; y++) {
            btns[y].ariaSelected=false; 
        }
        e.target.parentNode.ariaSelected = true;
    })
}