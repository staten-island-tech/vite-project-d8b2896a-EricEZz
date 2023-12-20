// import '../css/style.css'
import {cameras} from "./cameras.js"
import { DOMSelectors } from './Dom.js' 

function themes(){
    document.querySelector(".but").addEventListener("click",function(){
        if(document.body.classList.contains("light")){
            document.body.classList.add("dark");
            document.body.classList.remove("light");
        } else{
            document.body.classList.add("light");
            document.body.classList.remove("dark");
        }
    });
    }
themes();

const filters = ["EKEN", "blurams", "blink"];

 function filter(){
    cards.forEach(element => DOMSelectors.container.insertAdjacentHTML(
        "beforeend"
        `<div class="card">
            <div class="card-head" >${cameras.name}</div>
            <img src = ${cameras.img} class = "card-img"/>
            <div class="card">${cameras.price}</div>
             </div>`)
             );
};  
filter();

function EKENcam(){
    const call = cards.filter((cameras)=> cameras.brand.includes("EKEN"));
    call.forEach((cameras) => DOMSelectors.cards.insertAdjacentHTML(
        "beforeend"
    `<div class="card">
        <div class="card-head" id="EKEN">${cameras.name}</div>
        <img src = ${cameras.img} class = "card-img"/>
        <div class="card">${cameras.price}</div>
         </div>`));
};


function Blinkcam(){
    const call = cards.filter((cameras)=> cameras.brand.includes("Blink"));
    call.forEach((cameras) => DOMSelectors.cards.insertAdjacentHTML(
        "beforeend"
    `<div class="card">
        <div class="card-head" id="Blink">${cameras.name}</div>
        <img src = ${cameras.img} class = "card-img"/>
        <div class="card">${cameras.price}</div>
         </div>`));
};


function Bluramscam(){
const call = cards.filter((cameras)=> cameras.brand.includes("Blurams"));
    call.forEach((cameras) => DOMSelectors.cards.insertAdjacentHTML(
        "beforeend"
    `<div class="card">
        <div class="card-head" id="Blurams">${cameras.name}</div>
        <img src = ${cameras.img} class = "card-img"/>
        <div class="card">${cameras.price}</div>
         </div>`)
         );
        };

        DOMSelectors.EKEN.addEventListener("click", function(){
            DOMSelectors.cards.innerHTML = '';
            EKENcam()
        });
        DOMSelectors.Blink.addEventListener("click", function(){
            DOMSelectors.cards.innerHTML = '';
            Blinkcam()
        });
        DOMSelectors.Blurams.addEventListener("click", function(){
            DOMSelectors.cards.innerHTML = '';
            Bluramscam()
        });
/* function addCard(){
    const card = 
    `<div class="box">
        <h2>${names}</h2>
        <img src="${inputImage}" alt="user">
        <p>${desc}</p>
    </div>`
    DOMSelectors.container.insertAdjacentHTML("beforebegin", `${card}`)

} */

//function card(arr)

/*

*/
