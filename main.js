let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click',function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})

// with masonry
new Masonry("#posts .grid", {
    itemSelector:'.grid-item',
    gutter:20
});

//swiper library initialization
new Swiper('.swiper-container',{
    direction: 'horizontal',
    loop : true,
    slidesPerView : 1,
    autoplay : {
        delay : 3000
    },
})


//Sticky Navigation
window.onscroll = function(){ myFunction()};

// get the current value
let navbar = document.getElementById("header");

//get the navbar position
let sticky = navbar.offsetTop;

//sticky function
function myFunction(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
}