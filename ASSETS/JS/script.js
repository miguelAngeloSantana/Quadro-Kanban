let columnTodo = window.document.querySelector("#add-card-todo");
let columnDoing = window.document.querySelector("#add-card-doing");
let columnDone = window.document.querySelector("#add-card-done");
const form_card_todo = window.document.getElementById("new_card_todo");
const form_card_doing = window.document.getElementById("new_card_doing");
const form_card_done = window.document.getElementById("new_card_done");

let listCard = [];
let count = 0;

function AdicionarCard(vl, column) {
    listCard.push(vl);
    let img = document.createElement("img");
    let imgSrc = img.src="./ASSETS/imagens/remover.png";
    let AdicionarCardList = listCard.map(function(vl){
        return `
        <div class="card-info" id=Count${count} draggable="true" ondragstart="dragStart(event)">
            <span>${vl}</span>
            <img src="${imgSrc}" alt="Icone de uma lixeira para excluir um card da coluna" class="card-info--img"/>
        </div>
        `
    });
    count++;

    listCard.length = 0;
    column.innerHTML += AdicionarCardList;

    column.addEventListener("dragover", dragOver);
    column.addEventListener("drop", drop);
};

function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
};

function dragOver(event) {
    event.preventDefault();
};

function drop(event) {
    event.preventDefault();

    const cardId = event.dataTransfer.getData('text');    
    const card = document.getElementById(cardId);
    const result = event.target.closest(".card-container");
    // let card = document.querySelector(".card-info");

    // const cardId = event.dataTransfer.getData('text/plain');
    // const card = document.getElementById(cardId);
    // const result = event.target.closest(".card-container");

    result.appendChild(card);
};

function CriarCardToDo() {
    let value_card_input_todo = window.document.getElementById("input_card_todo");
    let card_progress_input_todo = value_card_input_todo.value.trim();

    if (card_progress_input_todo != "") {
        AdicionarCard(card_progress_input_todo, columnTodo);
        value_card_input_todo.value = '';
        value_card_input_todo.style.display = "none";
    }
};

function CriarCardDoing() {
    let card_input_doing = window.document.getElementById("input_card_doing");
    let card_progress_input_doing = card_input_doing.value.trim();

    if (card_progress_input_doing != '') {
        AdicionarCard(card_progress_input_doing, columnDoing);
        card_input_doing.value = '';
        card_input_doing.style.display = "none";
    }
};

function CriarCardDone() {
    let card_input_done = window.document.getElementById("input_card_done");
    let card_progress_input_done = card_input_done.value.trim();

    if (card_progress_input_done != '') {
        AdicionarCard(card_progress_input_done, columnDone);
        card_input_done.value = '';
        card_input_done.style.display = "none";
    }
};


function deleterImagen(conteiner) {
    let cardInfoImg = conteiner.querySelectorAll(".card-info--img");
    for (let i = 0; i < conteiner.children.length; i++) {
        cardInfoImg[i].addEventListener("click", () => {
            let divCardInfo = cardInfoImg[i].parentElement;
            divCardInfo.remove();
        });
    };
};

form_card_todo.addEventListener("submit", function(event){
    event.preventDefault();
    let inputTextForm = form_card_todo.childNodes[1];
    inputTextForm.style.display = "block";
    CriarCardToDo();
});

form_card_doing.addEventListener("submit", function(event) {
    event.preventDefault();
    let inputTextForm = form_card_doing.childNodes[1];
    inputTextForm.style.display = "block";
    CriarCardDoing();
});

form_card_done.addEventListener("submit", function(event) {
    event.preventDefault();
    let inputTextForm = form_card_done.childNodes[1];
    inputTextForm.style.display = "block";
    CriarCardDone();
});

columnTodo.addEventListener("mouseup", () => {
    deleterImagen(columnTodo);
});

columnDoing.addEventListener("mouseup", () => {
    deleterImagen(columnDoing);
});

columnDone.addEventListener("mouseup", () => {
    deleterImagen(columnDone);
});