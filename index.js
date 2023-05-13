const humberIcon = document.querySelector('.hamburger-icon')
const mobileData = [
    {
        txt: 'Deep earth',
        img: 'blah blah'
    },
    {
        txt: 'Night arcade',
        img: ''
    },
    {
        txt: 'Soccer team VR',
        img: ''
    },
    {
        txt: 'From up above VR',
        img: ''
    },
    {
        txt: 'Pocket borealis',
        img: ''
    },
    {
        txt: 'The curiosity',
        img: ''
    },
    {
        txt: 'Make it fisheye',
        img: ''
    },   
]
const desktopData = [
    {
        txt: 'Deep earth',
        img: 'blah blah'
    },
    {
        txt: 'Night arcade',
        img: ''
    },
    {
        txt: 'Soccer team VR',
        img: ''
    },
    {
        txt: 'From up above VR',
        img: ''
    },
    {
        txt: 'Pocket borealis',
        img: ''
    },
    {
        txt: 'The curiosity',
        img: ''
    },
    {
        txt: 'Make it fisheye',
        img: ''
    },   
]

humberIcon.addEventListener('click', ()=>{
    const elem = document.querySelector('nav .nav')
    elem.style.display == 'none'? elem.style.display = 'flex': elem.style.display = 'none'
})