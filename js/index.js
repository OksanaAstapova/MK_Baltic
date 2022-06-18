const bannersData = [
    {"name": "GRATINGS",
    "img": "../assets/background/1_gratings.jpg",
    "alt": "Gratings"},

    {"name": "STAIR THREAD",
    "img": "assets/background/2_stairs.jpg",
    "alt": "STAIR THREAD"},

    {"name": "FASTENERS",
    "img": "assets/background/3_fasteners.jpg",
    "alt": "FASTENERS"},

    {"name": "PIPELINE INSTALLATION WORKS",
    "img": "assets/background/4_papeline.jpg",
    "alt": "PIPELINE INSTALLATION WORKS"},

    {"name": "STEEL CONSTRUCTION",
    "img": "assets/background/5_steel.jpg",
    "alt": "STEEL CONSTRUCTION"}

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
    document.querySelector(".products__info_stair").classList.remove("products__info_appear");
    document.querySelector(".products__info_fasteners").classList.remove("products__info_appear");
    document.querySelector(".products__info_pipeline").classList.remove("products__info_appear");
    document.querySelector(".products__info_steel").classList.remove("products__info_appear");

    button_gratings.classList.toggle("products__title_active");
    button_stair.classList.remove("products__title_active");
    button_fastener.classList.remove("products__title_active");
    button_pipeline.classList.remove("products__title_active");
    button_steel.classList.remove("products__title_active");


})

button_stair.addEventListener("click", ()=>{
    document.querySelector(".products__info_gratings").classList.remove("products__info_appear");
    document.querySelector(".products__info_stair").classList.toggle("products__info_appear");
    document.querySelector(".products__info_fasteners").classList.remove("products__info_appear");
    document.querySelector(".products__info_pipeline").classList.remove("products__info_appear");
    document.querySelector(".products__info_steel").classList.remove("products__info_appear");

    button_gratings.classList.remove("products__title_active");
    button_stair.classList.toggle("products__title_active");
    button_fastener.classList.remove("products__title_active");
    button_pipeline.classList.remove("products__title_active");
    button_steel.classList.remove("products__title_active");
})

button_fastener.addEventListener("click", ()=>{
    document.querySelector(".products__info_gratings").classList.remove("products__info_appear");
    document.querySelector(".products__info_stair").classList.remove("products__info_appear");
    document.querySelector(".products__info_fasteners").classList.toggle("products__info_appear");
    document.querySelector(".products__info_pipeline").classList.remove("products__info_appear");
    document.querySelector(".products__info_steel").classList.remove("products__info_appear");

    button_gratings.classList.remove("products__title_active");
    button_stair.classList.remove("products__title_active");
    button_fastener.classList.toggle("products__title_active");
    button_pipeline.classList.remove("products__title_active");
    button_steel.classList.remove("products__title_active");

})

button_pipeline.addEventListener("click", ()=>{
    document.querySelector(".products__info_gratings").classList.remove("products__info_appear");
    document.querySelector(".products__info_stair").classList.remove("products__info_appear");
    document.querySelector(".products__info_fasteners").classList.remove("products__info_appear");
    document.querySelector(".products__info_pipeline").classList.toggle("products__info_appear");
    document.querySelector(".products__info_steel").classList.remove("products__info_appear");

    button_gratings.classList.remove("products__title_active");
    button_stair.classList.remove("products__title_active");
    button_fastener.classList.remove("products__title_active");
    button_pipeline.classList.toggle("products__title_active");
    button_steel.classList.remove("products__title_active");  
})

button_steel.addEventListener("click", ()=>{
    document.querySelector(".products__info_gratings").classList.remove("products__info_appear");
    document.querySelector(".products__info_stair").classList.remove("products__info_appear");
    document.querySelector(".products__info_fasteners").classList.remove("products__info_appear");
    document.querySelector(".products__info_pipeline").classList.remove("products__info_appear");
    document.querySelector(".products__info_steel").classList.toggle("products__info_appear");

    button_gratings.classList.remove("products__title_active");
    button_stair.classList.remove("products__title_active");
    button_fastener.classList.remove("products__title_active");
    button_pipeline.classList.remove("products__title_active");
    button_steel.classList.toggle("products__title_active");
})


/*-----------------gallery------------------*/

document.querySelector(".gallery__card_bridge > button").addEventListener("click", ()=>{

    document.querySelector(".gallery__modal_bridge").classList.add("gallery__modal_appear");
})

document.querySelector(".gallery__card_heat > button").addEventListener("click", ()=>{

    document.querySelector(".gallery__modal_heat").classList.add("gallery__modal_appear");
})

document.querySelector(".gallery__card_tower > button").addEventListener("click", ()=>{

    document.querySelector(".gallery__modal_tower").classList.add("gallery__modal_appear");
})

document.querySelector(".gallery__card_plant > button").addEventListener("click", ()=>{

    document.querySelector(".gallery__modal_plant").classList.add("gallery__modal_appear");
})

document.querySelectorAll(".gallery__modal_close-btn").forEach(k =>{

    k.addEventListener("click", ()=> {

        document.querySelectorAll(".gallery__modal").forEach(w => {

            w.classList.remove("gallery__modal_appear");
        })

    })
})

/*------------scroll to section-----------*/


