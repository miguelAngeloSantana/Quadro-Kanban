let columnTodo = window.document.querySelector(".add-card-todo");
let columnDoing = window.document.querySelector(".add-card-doing");
let columnDone = window.document.querySelector(".add-card-done");
let btnFormTodo = window.document.querySelectorAll(".btn-form");
const form_card_todo = window.document.getElementById("new_card_todo");
const form_card_doing = window.document.getElementById("new_card_doing");
const form_card_done = window.document.getElementById("new_card_done");

let listCard = [];

function AdicionarCard(vl, column) {
    listCard.push(vl);
    let img = document.createElement("img");
    let imgSrc = img.src="./ASSETS/imagens/remover.png";
    let AdicionarCardList = listCard.map(function(){
        return `
        <div class="card-info">
            <span>${vl}</span>
            <img src="${imgSrc}" />
        </div>
        `
    });
    listCard.length = 0;
    column.innerHTML += AdicionarCardList.join('');
};

function SetButton(formulario) {
    let filho = formulario.childNodes[1];
    filho.style.display = "block";

    filho.addEventListener("keyup", (e) => {
        if (e.key == "Enter") {
            filho.style.display = "none";
        }
    });
}

form_card_todo.addEventListener("submit", function(event){
    event.preventDefault();
    SetButton(form_card_todo);
    CriarCardToDo();
});

form_card_doing.addEventListener("submit", function(event) {
    event.preventDefault();
    SetButton(form_card_doing);
    CriarCardDoing();
})

form_card_done.addEventListener("submit", function(event) {
    event.preventDefault();
    SetButton(form_card_done);
    CriarCardDone();
})

function CriarCardToDo() {
    let value_card_input_todo = window.document.getElementById("input_card_todo");
    let card_progress_input_todo = value_card_input_todo.value.trim();

    if (card_progress_input_todo != "") {
        AdicionarCard(card_progress_input_todo, columnTodo);
        value_card_input_todo.value = '';
    } 
};

function CriarCardDoing() {
    let card_input_doing = window.document.getElementById("input_card_doing");
    let card_progress_input_doing = card_input_doing.value.trim();

    if (card_progress_input_doing != '') {
        AdicionarCard(card_progress_input_doing, columnDoing);
        card_progress_input_doing.value = '';
    }
}

function CriarCardDone() {
    let card_input_done = window.document.getElementById("input_card_done");
    let card_progress_input_done = card_input_done.value.trim();

    if (card_progress_input_done != '') {
        AdicionarCard(card_progress_input_done, columnDone);
        card_input_done.value = '';
    }
}