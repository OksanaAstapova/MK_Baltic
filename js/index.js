const bannersData = [
    {"name": "PIPELINE INSTALLATION WORKS",
    "img": "assets/background/4_papeline.jpg",
    "alt": "PIPELINE INSTALLATION WORKS"},

    {"name": "STEEL CONSTRUCTION",
    "img": "assets/background/5_steel.jpg",
    "alt": "STEEL CONSTRUCTION"},

    {"name": "GRATINGS",
    "img": "assets/background/1_gratings.jpg",
    "alt": "Gratings"},

    {"name": "STAIR THREAD",
    "img": "assets/background/2_stairs.jpg",
    "alt": "STAIR THREAD"},

    {"name": "FASTENERS",
    "img": "assets/background/3_fasteners.jpg",
    "alt": "FASTENERS"}

]


const nextBtn = document.querySelector(".main-section__switch-arrows_right");
const prevBtn = document.querySelector(".main-section__switch-arrows_left");
const outImg = document.querySelector(".main-section__left_img");
const title = document.querySelector(".main-section__left_title");

let i = 0
outImg.innerHTML =`<img src=${bannersData[i].img}  alt="${bannersData[i].alt}">`
title.innerHTML =`<div class="main-section__left_h1"><h1>${bannersData[i].name}</h1></div>`


nextBtn.onclick = () =>{
    if(i < bannersData.length - 1){
        i++
    }else{
        i = 0
    }
    outImg.innerHTML =`<img src=${bannersData[i].img} alt="${bannersData[i].alt}">`
    title.innerHTML =`<div class="main-section__left_h1"><h1>${bannersData[i].name}</h1></div>`
}

prevBtn.onclick = () =>{
    if(i > 0 ){
        i--
    }else{
        i = bannersData.length-1 
    }
    outImg.innerHTML =`<img src=${bannersData[i].img} alt="${bannersData[i].alt}">`
    title.innerHTML =`<div class="main-section__left_h1"><h1>${bannersData[i].name}</h1></div>`
}

/*--------products-info-------*/

const button_gratings = document.querySelector(".products__titles_gratings");
const button_stair = document.querySelector(".products__titles_stair");
const button_fastener = document.querySelector(".products__titles_fastener");
const button_pipeline = document.querySelector(".products__titles_pipeline");
const button_steel = document.querySelector(".products__titles_steel");


button_gratings.addEventListener("click", ()=>{
    document.querySelector(".products__info_gratings").classList.toggle("products__info_appear");

    document.querySelectorAll(".products__info:not(.products__info_gratings)").forEach(div =>{
        div.classList.remove("products__info_appear");
    })


    button_gratings.classList.toggle("products__title_active");
    
    document.querySelectorAll('.products__titles>div:not(.products__titles_gratings)').forEach(btn =>{
        btn.classList.remove("products__title_active");
    })



})

button_stair.addEventListener("click", ()=>{
    document.querySelector(".products__info_stair").classList.toggle("products__info_appear");
   
    document.querySelectorAll(".products__info:not(.products__info_stair)").forEach(div =>{
        div.classList.remove("products__info_appear");
    })

    button_stair.classList.toggle("products__title_active");

    document.querySelectorAll('.products__titles>div:not(.products__titles_stair)').forEach(btn =>{
        btn.classList.remove("products__title_active");
    })
})

button_fastener.addEventListener("click", ()=>{
    document.querySelector(".products__info_fasteners").classList.toggle("products__info_appear");
   
    document.querySelectorAll(".products__info:not(.products__info_fasteners)").forEach(div =>{
        div.classList.remove("products__info_appear");
    })

    button_fastener.classList.toggle("products__title_active");
   
    document.querySelectorAll('.products__titles>div:not(.products__titles_fastener)').forEach(btn =>{
        btn.classList.remove("products__title_active");
    })

})

button_pipeline.addEventListener("click", ()=>{
    
    document.querySelector(".products__info_pipeline").classList.toggle("products__info_appear");

    document.querySelectorAll(".products__info:not(.products__info_pipeline)").forEach(div =>{
        div.classList.remove("products__info_appear");
    })

    button_pipeline.classList.toggle("products__title_active");
    document.querySelectorAll('.products__titles>div:not(.products__titles_pipeline)').forEach(btn =>{
        btn.classList.remove("products__title_active");
    })})

button_steel.addEventListener("click", ()=>{
   
    document.querySelector(".products__info_steel").classList.toggle("products__info_appear");
   
    document.querySelectorAll(".products__info:not(.products__info_steel)").forEach(div =>{
        div.classList.remove("products__info_appear");
    })

    button_steel.classList.toggle("products__title_active");

    document.querySelectorAll('.products__titles>div:not(.products__titles_steel)').forEach(btn =>{
        btn.classList.remove("products__title_active");
    })
})


/*-----------------gallery------------------*/
const black_back =  document.querySelector(".black-back");

document.querySelector(".gallery__card_bridge > button").addEventListener("click", ()=>{

    document.querySelector(".gallery__modal_bridge").classList.add("gallery__modal_appear");
    document.querySelector(".body").style.overflow = "hidden";
    black_back.style.display = "flex";
})

document.querySelector(".gallery__card_heat > button").addEventListener("click", ()=>{

    document.querySelector(".gallery__modal_heat").classList.add("gallery__modal_appear");
    document.querySelector(".body").style.overflow = "hidden";
    black_back.style.display = "flex";


})

document.querySelector(".gallery__card_tower > button").addEventListener("click", ()=>{

    document.querySelector(".gallery__modal_tower").classList.add("gallery__modal_appear");
    document.querySelector(".body").style.overflow = "hidden";
    black_back.style.display = "flex";



})

document.querySelector(".gallery__card_plant > button").addEventListener("click", ()=>{

    document.querySelector(".gallery__modal_plant").classList.add("gallery__modal_appear");
    document.querySelector(".body").style.overflow = "hidden";
    black_back.style.display = "flex";


})

document.querySelectorAll(".gallery__modal_close-btn").forEach(k =>{

    k.addEventListener("click", ()=> {

        document.querySelectorAll(".gallery__modal").forEach(w => {

            w.classList.remove("gallery__modal_appear");
        })

        document.querySelector(".body").style.overflow = "visible";
         black_back.style.display = "none";

        
    })
    
})

/*------------scroll to section-----------*/

document.querySelector(".header__menu_button-products").addEventListener("click", ()=>{

    window.scrollTo({
        top: 650,
        left: 0,
        behavior: 'smooth'});
})

document.querySelector(".header__menu_button-gallery").addEventListener("click", ()=>{

    window.scrollTo({
        top: 1307,
        left: 0,
        behavior: 'smooth'});
})

document.querySelector(".header__menu_button-partners").addEventListener("click", ()=>{

    window.scrollTo({
        top: 1962,
        left: 0,
        behavior: 'smooth'});
})

document.querySelector(".header__menu_button-contacts").addEventListener("click", ()=>{

    document.querySelector(".contacts").scrollIntoView({block: "center", behavior: "smooth"});
})

document.querySelector(".header__logo").addEventListener("click", ()=>{

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'});
})



