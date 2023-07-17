let columnTodo = window.document.querySelector(".add-card-todo");
let columnDoing = window.document.querySelector(".add-card-doing");
let columnDone = window.document.querySelector(".add-card-done");
const form_card_todo = window.document.getElementById("new_card_todo");
const form_card_doing = window.document.getElementById("new_card_doing");
const form_card_done = window.document.getElementById("new_card_done");

function AdicionarCard(vl, column) {
    let listCard = [];
    listCard.push(vl);
    let img = document.createElement("img");
    let imgSrc = img.src="./ASSETS/imagens/remover.png";
    let AdicionarCardList = listCard.map(function(){
        return `
        <div class="card-info">
            <span>${vl}</span>
            <img src="${imgSrc}" alt="Icone de uma lixeira para excluir um card da coluna" class="card-info--img"/>
        </div>
        `
    });
    listCard.length = 0;
    column.innerHTML += AdicionarCardList;
};

// function SetButton(formulario) {
//     let inputTextForm = formulario.childNodes[1];
//     let buttonForm = formulario.childNodes[3];
//     inputTextForm.style.display = "block";

//     inputTextForm.addEventListener("keyup", (e) => {
//         if (e.key == "Enter") {
//             inputTextForm.style.display = "none";
//         }
//     });  
// };

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
    // SetButton(form_card_todo);
    let inputTextForm = form_card_todo.childNodes[1];
    inputTextForm.style.display = "block";
    CriarCardToDo();
});

form_card_doing.addEventListener("submit", function(event) {
    event.preventDefault();
    let inputTextForm = form_card_doing.childNodes[1];
    inputTextForm.style.display = "block";
    // SetButton(form_card_doing);
    CriarCardDoing();
});

form_card_done.addEventListener("submit", function(event) {
    event.preventDefault();
    let inputTextForm = form_card_done.childNodes[1];
    inputTextForm.style.display = "block";
    // SetButton(form_card_done);
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