let columnTodo = window.document.querySelector(".add-card-todo");
let columnDoing = window.document.querySelector(".add-card-doing");
let columnDone = window.document.querySelector(".add-card-done");

const form_card_todo = window.document.getElementById("new_card_todo");
const form_card_doing = window.document.getElementById("new_card_doing");
const form_card_done = window.document.getElementById("new_card_done");

function AdicionarCard(vl) {
    const card = document.createElement("div");
    card.textContent = vl
    return card;
};


form_card_todo.addEventListener("submit", function(event){
    event.preventDefault();
    CriarCardToDo();
});

form_card_doing.addEventListener("submit", function(event) {
    event.preventDefault();
    CriarCardDoing();
})

form_card_done.addEventListener("submit", function(event) {
    event.preventDefault();
    CriarCardDone();
})

function CriarCardToDo() {
    let value_card_input_todo = window.document.getElementById("input_card_todo");
    let card_progress_input_todo = value_card_input_todo.value.trim();

    if (card_progress_input_todo != "") {
        let newCard = AdicionarCard(card_progress_input_todo);
        columnTodo.appendChild(newCard);
        value_card_input_todo.value = '';
    } 
};

function CriarCardDoing() {
    let card_input_doing = window.document.getElementById("input_card_doing");
    let card_progress_input_doing = card_input_doing.value.trim();

    if (card_progress_input_doing != '') {
        const newCard = AdicionarCard(card_progress_input_doing);
        columnDoing.appendChild(newCard);
        card_input_doing.value = '';
    }
}

function CriarCardDone() {
    let card_input_done = window.document.getElementById("input_card_done");
    let card_progress_input_done = card_input_done.value.trim();

    if (card_progress_input_done != '') {
        const newCard = AdicionarCard(card_progress_input_done);
        columnDone.appendChild(newCard);
        card_input_done.value = '';
    }
}