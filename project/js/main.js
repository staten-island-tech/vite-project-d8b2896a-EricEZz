import '../css/style.css'
//import{} from "";

function addCard(){
    const card = `
    <div class="box">
        <h2>
            ${names}
        </h2>
        <img src="${inputImage}" alt="user">
        <p>${desc}</p>
    </div>`
    DOMSelectors.container.insertAdjacentHTML("beforebegin", `${card}`)
}

