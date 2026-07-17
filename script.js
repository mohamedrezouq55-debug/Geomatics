/* ==========================================
   GeoVision Portfolio
   script.js
   Part 1
========================================== */



// ==========================================
// LEAFLET MAP
// ==========================================

const map = L.map("main-map",{

    zoomControl:true

}).setView([33.5731,-7.5898],11);





// ==========================================
// OPEN STREET MAP
// ==========================================

L.tileLayer(

"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

{

attribution:"&copy; OpenStreetMap"

}

).addTo(map);






// ==========================================
// PROJECT DATA
// ==========================================

const projects=[

{

name:"Urban Expansion",

coords:[33.5731,-7.5898],

description:

"Urban growth analysis using GIS and satellite imagery."

},



{

name:"Flood Risk Assessment",

coords:[33.560,-7.620],

description:

"Hydrological modelling using DEM and drainage analysis."

},



{

name:"NDVI Vegetation",

coords:[33.520,-7.680],

description:

"Vegetation monitoring using Sentinel-2 imagery."

},



{

name:"Population Density",

coords:[33.590,-7.540],

description:

"Spatial demographic analysis using GIS."

}

];






// ==========================================
// ADD MARKERS
// ==========================================

projects.forEach(project=>{

L.marker(project.coords)

.addTo(map)

.bindPopup(

`<h3>${project.name}</h3>

<p>${project.description}</p>`

);

});






// ==========================================
// MAP ANIMATION
// ==========================================

setTimeout(()=>{

map.flyTo(

[33.5731,-7.5898],

12,

{

duration:3

}

);

},1200);






// ==========================================
// HERO BUTTON
// ==========================================

const heroButton=

document.querySelector(".btn");



heroButton.addEventListener("click",(event)=>{

event.preventDefault();

document

.querySelector("#projects")

.scrollIntoView({

behavior:"smooth"

});

});






// ==========================================
// ACTIVE NAVIGATION
// ==========================================

const sections=

document.querySelectorAll("section");



const navLinks=

document.querySelectorAll(".navbar a");



window.addEventListener("scroll",()=>{

let current="";



sections.forEach(section=>{

const top=

window.scrollY;



const offset=

section.offsetTop-150;



const height=

section.offsetHeight;



if(top>=offset && top<offset+height){

current=section.id;

}

});



navLinks.forEach(link=>{

link.classList.remove("active");



if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(

".project-card, .skill-card, .research-card, .contact-card, .stat-box"

);



const revealOnScroll = () => {

    revealElements.forEach((element)=>{

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("show");

        }

    });

};



window.addEventListener("scroll",revealOnScroll);

revealOnScroll();





/* ==========================================
   STATISTICS COUNTER
========================================== */

const counters = document.querySelectorAll(".stat-box h2");



const startCounter = ()=>{

    counters.forEach(counter=>{

        const target = parseInt(counter.innerText);

        let value = 0;

        const speed = target / 80;

        const updateCounter = ()=>{

            value += speed;

            if(value < target){

                counter.innerText = Math.floor(value) + "+";

                requestAnimationFrame(updateCounter);

            }

            else{

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};



let counterStarted = false;



window.addEventListener("scroll",()=>{

    const stats = document.querySelector(".stats");

    if(!stats) return;

    const position = stats.getBoundingClientRect().top;

    if(position < window.innerHeight && !counterStarted){

        counterStarted = true;

        startCounter();

    }

});





/* ==========================================
   PROJECT CARD EFFECT
========================================== */

const cards = document.querySelectorAll(".project-card");



cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});





/* ==========================================
   SMOOTH BUTTON EFFECT
========================================== */

const buttons = document.querySelectorAll(".btn, .btn-small");



buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transition=".3s";

    });

});
/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");

const navbar = document.querySelector(".navbar");



if(menuBtn){

menuBtn.addEventListener("click",()=>{

navbar.classList.toggle("mobile-nav");

});

}





/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topButton=document.createElement("button");

topButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topButton.id="topButton";

document.body.appendChild(topButton);



window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.classList.add("show-top");

}

else{

topButton.classList.remove("show-top");

}

});



topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});






/* ==========================================
   HERO PARALLAX
========================================== */

const hero=document.querySelector(".hero");



window.addEventListener("scroll",()=>{

const y=window.scrollY;

hero.style.backgroundPositionY=(y*0.35)+"px";

});






/* ==========================================
   RESET MAP POSITION
========================================== */

if(map){

map.on("dblclick",()=>{

map.flyTo(

[33.5731,-7.5898],

11,

{

duration:2

}

);

});

}





/* ==========================================
   LOADING ANIMATION
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});






/* ==========================================
   CURRENT YEAR
========================================== */

const year=document.querySelector(".current-year");



if(year){

year.textContent=

new Date().getFullYear();

}