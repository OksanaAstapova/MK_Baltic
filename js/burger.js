const button = document.querySelector(".burger-button");
const menu = document.querySelector(".burger-menu");
const links = document.querySelectorAll(".burger-menu>p");
const btn_products = document.querySelector("body > main > div > p:nth-child(1)");
const btn_projects = document.querySelector("body > main > div > p:nth-child(2)");
const btn_partners = document.querySelector("body > main > div > p:nth-child(3)");
const btn_contacts = document.querySelector("body > main > div > p:nth-child(4)");



button.addEventListener("click", ()=>{

    menu.classList.toggle("burger-menu_appear");
    button.classList.toggle("burger-button_rotate");

})

links.forEach(link => {
    link.addEventListener("click", ()=>{
        menu.classList.remove("burger-menu_appear");
        button.classList.remove("burger-button_rotate");
    })
})

btn_products.addEventListener("click", ()=>{
    document.querySelector(".products").scrollIntoView({block: "center", behavior: "smooth"});
  
})
btn_projects.addEventListener("click", ()=>{
    document.querySelector(".gallery").scrollIntoView({block: "center", behavior: "smooth"});
  
})
btn_partners.addEventListener("click", ()=>{
    document.querySelector(".partners").scrollIntoView({block: "center", behavior: "smooth"});
  
})
btn_contacts.addEventListener("click", ()=>{
    document.querySelector(".contacts").scrollIntoView({block: "center", behavior: "smooth"});
  
})

