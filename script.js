let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



let navbar = document.querySelector('.navbar');


let menuIcon = document.querySelector('#menu-icon');


window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -200;
        let height = sec.offsetHeight -200;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector(`nav a[ href="#${id}"]`).classList.add('active');

            });
        };
    });
};



var typed = new Typed(".input",{
    strings:["HTML", "CSS", "JS", "PHP"],
    typeSpeed: 500,
    backSpeed: 70,
    loop:true
}) 


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  document.querySelector("#close").addEventListener
  ("click", function(){
        document.querySelector(".div-pop-up").style.display = "none";
    }
  );