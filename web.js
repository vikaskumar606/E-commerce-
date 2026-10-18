let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let blog = document.querySelector(".trends");
let mainpage = document.querySelector(".main");
let cart = document.querySelector(".cart");

function homes(){
    mainpage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    blog.style.display="block";
    about.style.display="none";
    contact.style.display="none";
    cart.style.display="none";

    document.getElementById("home").style.color="rgb(26, 180, 180)";
    document.getElementById("shop").style.color="black";
    document.getElementById("blog").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
}

function shops(){ 
    mainpage.style.display="none";
    blog.style.display="none";
    card.style.display="block";
    card2.style.display="block";  
    about.style.display="none";
    contact.style.display="none";
    cart.style.display="none";

    document.getElementById("shop").style.color="rgb(2, 173, 173)";
    document.getElementById("home").style.color="black";
    document.getElementById("blog").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
}

function blogs(){
    mainpage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="block";
    about.style.display="none";
    contact.style.display="none";
    cart.style.display="none";

    document.getElementById("blog").style.color="rgb(2, 173, 173)";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
}

function abouts(){
    mainpage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none"; 
    about.style.display="block";
    contact.style.display="none";
    cart.style.display="none";

    document.getElementById("about").style.color="rgb(2, 173, 173)";     
    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
}

function contacts(){
    mainpage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none"; 
    about.style.display="none";
    contact.style.display="block";
    cart.style.display="none";

    document.getElementById("contact").style.color="rgb(26, 180, 180)";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("blog").style.color="black";
    document.getElementById("about").style.color="black";
}

function show(img){
    let newImg = document.getElementById("newImg");
    newImg.src = img.src;

    mainpage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    blog.style.display="none"; 
    about.style.display="none";
    contact.style.display="none";

    cart.style.display="flex";
}

function addCart(){
    alert("Added to Cart");
    location.reload();
}