//import '../css/style.css'
import '../css/style.css'
import{cameras} from"./cameras"
import { DOMSelectors } from './Dom';
 
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
 function filter(){
    DOMSelectors.container.insertAdjacentHTML(
        "beforeend"
        `<div class="card">
            <div class="card-head" >${cameras.name}</div>
            <img src = ${cameras.img} class = "card-img"/>
            <div class="card">${cameras.price}</div>
             </div>`);
             
};  
filter();

cameras.forEach(element => DOMSelectors.container.insertAdjacentHTML(
    "beforeend"
    `<div class="card">
        <div class="card-head" >${camera.name}</div>
        <img src = ${camera.img} class = "card-img"/>
        <div class="card" ></div>
         </div>`
    )
); 
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