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

function clearFields(){
    DOMSelectors.container.innerHTML = ""; 
};
// const filters = ["EKEN", "blurams", "blink"];
function load(){
    clearFields();
cameras.forEach(cam => DOMSelectors.container.insertAdjacentHTML(
    "beforeend" , 
        `  <div class="card">
        <h1 class="card-head" >${cam.name}</h1>
        <img src = ${cam.img} class = "card-img"/>
           <h3 class="card">${cam.price}</h3>
           </div>`)

)};
load();

DOMSelectors.allbtn.addEventListener("click", function(){
    load();
})

function Blinkcam(){
    clearFields();
    const call = cameras.filter((cameras)=> cameras.brand.includes ("Blink"));
    call.forEach((cameras) => DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
    `<div class="card">
        <div class="card-head" id="Blink">${cameras.name}</div>
        <img src = ${cameras.img} class = "card-img"/>
        <div class="card">${cameras.price}</div>
         </div>`));
};
DOMSelectors.but1.addEventListener("click", function(){
    Blinkcam();
});


function EKENcam(){
    clearFields();
    const call = cameras.filter((cameras)=> cameras.brand.includes("EKEN"));
    call.forEach((cameras) => DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
    `<div class="card">
        <div class="card-head" id="EKEN">${cameras.name}</div>
        <img src = ${cameras.img} class = "card-img"/>
        <div class="card">${cameras.price}</div>
         </div>`));
};
DOMSelectors.but2.addEventListener("click", function(){
    EKENcam();
});

function Bluramscam(){
    clearFields();
const call = cameras.filter((cameras)=> cameras.brand.includes("Blurams"));
    call.forEach((cameras) => DOMSelectors.container.insertAdjacentHTML(
        "beforeend",
    `<div class="card">
        <div class="card-head" id="Blurams">${cameras.name}</div>
        <img src = ${cameras.img} class = "card-img"/>
        <div class="card">${cameras.price}</div>
         </div>`)
         );
        };
DOMSelectors.but3.addEventListener("click", function(){
    Bluramscam();
});

// let buttons = document.queryselectiorAll('button')
//buttons.forEach((btn)=> btn.addEventlistener("click, function(){
/*     let type = btn.textContent.toLowerCase()
    let newArr = cameras.filter((camera)=> camera.brand === type)
    clearFields()
    load(newArr)")) */

//  function filter(){
//     cameras.forEach(cameras => DOMSelectors.container.insertAdjacentHTML(
//         "beforeend" , 
//         `<div class="card">
//             <div class="card-head" >${cameras.name}</div>
//             <img src = ${cameras.img} class = "card-img"/>
//             <div class="card">${cameras.price}</div>
//              </div>`)
//              );
// };  
// filter();
        // DOMSelectors.EKEN.addEventListener("click", function(){
        //     DOMSelectors.container.innerHTML = ''
        //     EKENcam()
        // });
        // DOMSelectors.Blink.addEventListener("click", function(){
        //     DOMSelectors.container.innerHTML = ''
        //     Blinkcam()
        // });
        // DOMSelectors.Blurams.addEventListener("click", function(){
        //     DOMSelectors.container.innerHTML = ''
        //     Bluramscam()
        // });
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
