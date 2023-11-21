$(document).ready(function () {
    $('#loading .spinner').fadeOut(1000 , ()=>{
        AOS.init();
        $('#loading').fadeOut(1000 , ()=>{
            
            $('body').css('overflow-y','auto')
            
        })
    });
});


let menu = document.querySelector('.menu')
let navItem = document.getElementsByClassName('navLink')
let bars = document.querySelector('.open-menu')
let times = document.querySelector('.close-menu')


bars.addEventListener('click',()=> {
    menu.style.right = '0'
})

times.addEventListener('click',()=> {
    menu.style.right = '-100%'
})

for (let i = 0; i < navItem.length; i++) {
    
    navItem[i].addEventListener('click',()=> {
        menu.style.right = '-100%'
    })
}

