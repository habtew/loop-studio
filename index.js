const grid = document.querySelector('.grid')
const humberIcon = document.querySelector('.hamburger-icon')


const mobileData = [
    {
        txt: 'Deep earth',
        img: 'image-deep-earth.jpg'
    },
    {
        txt: 'Night arcade',
        img: 'image-night-arcade.jpg'
    },
    {
        txt: 'Soccer team VR',
        img: 'image-soccer-team.jpg'
    },
    {
        txt: "The Grid",
        img: "image-grid.jpg"
    },
    {
        txt: 'From up above VR',
        img: 'image-from-above.jpg'
    },
    {
        txt: 'Pocket borealis',
        img: 'image-pocket-borealis.jpg'
    },
    {
        txt: 'The curiosity',
        img: 'image-curiosity.jpg'
    },
    {
        txt: 'Make it fisheye',
        img: 'image-fisheye.jpg'
    },   
]


humberIcon.addEventListener('click', ()=>{
    const elem = document.querySelector('nav .nav')
    elem.style.display == 'none'? elem.style.display = 'flex': elem.style.display = 'none'
})


let gridItems = ''


const mql = window.matchMedia('(min-width: 740px)')
mql.addEventListener('change', (event)=>{
    if(event.matches){
        gridItems = mobileData.map(item => {
            return `
            <div class="grid-items">
                <img class="grid-items-img" src="./images/desktop/${item.img}" alt="deep earth">
                <h3 class="grid-items-text">${item.txt}</h3>
            </div>
            `
        }).join('')
    }
    else{
        gridItems = mobileData.map(item => {
            return `
            <div class="grid-items">
                <img class="grid-items-img" src="./images/mobile/${item.img}" alt="deep earth">
                <h3 class="grid-items-text">${item.txt}</h3>
            </div>
            `
        }).join('')
    }
    grid.innerHTML = gridItems
})

