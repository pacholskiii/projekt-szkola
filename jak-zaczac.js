


// Poczatki treningu

let item = document.querySelectorAll(".item-click");
let modals = document.querySelectorAll(".modal-container");

let value;
let btnClose = document.querySelectorAll(".btn-close");



item.forEach((btn, index) => {
    btn.addEventListener("click", () =>{
        modals[index].classList.add("active")
        document.body.style.overflow = "hidden";
      
    });
});

btnClose.forEach(btn => {
    btn.addEventListener("click", () =>{
     
        modals.forEach(modal =>{
            modal.classList.remove("active");
            document.body.style.overflow = "auto";
        })
    })
    
});

// --------swiper--------

var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });

  // nav

  let btn = document.querySelector(".hamburger");
let links = document.querySelector(".nav-links");
let header = document.querySelector(".header");

btn.addEventListener('click', () => {
    links.classList.toggle("active");
    header.classList.toggle("active2");
   
}); 


