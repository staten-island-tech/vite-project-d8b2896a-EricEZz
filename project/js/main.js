import '../css/style.css'
import{cameras} from"./Dom"

const DOMSelectors = {
type: document.queryselector("cameras.brands"),
smart: document.querySelector("cameras.smart")
}

cameras.forEach(element => DOMSelectors.container.insertAdjacentHTML(
    "beforeend"

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