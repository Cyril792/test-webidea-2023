document.getElementById("slideLeft").onclick = function() {
    
    document.getElementById('carous').scrollLeft -= 300;
};
document.getElementById("slideRight").onclick = function() {
    document.getElementById('carous').scrollLeft += 300;
    
};
document.getElementById("defiler").onclick = function() {
    window.scroll(0, 1000);
};


var check = true; 
const burg = document.getElementById("burger");
const navburg = document.getElementById("span_burger");
const der = document.getElementById("deroul");
burg.onclick = function() {
    
    if (check == true) {
        console.log(check);
        burg.classList.add ("croix"); 
        der.style.top ="0px";
        check = false;
    } else { 
        console.log(check);
        burg.classList.remove ("croix"); 
        der.style.top ="-600px";
        check = true; 
    };
};

const hauteur = document.getElementById("header").clientHeight;
const logo = document.getElementById("logo");
const bgnav = document.getElementById("navbar");


window.addEventListener('scroll', () => {
    if(window.scrollY > hauteur) {
        logo.classList.add('bleu');
        navbar.style.backgroundColor = "white";
    }else {
        logo.classList.remove('bleu');
        navbar.style.backgroundColor = "transparent";
    };
});


