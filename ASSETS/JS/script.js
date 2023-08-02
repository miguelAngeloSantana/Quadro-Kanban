const columnTodo = window.document.querySelector("#add-card-todo");
const columnDoing = window.document.querySelector("#add-card-doing");
const columnDone = window.document.querySelector("#add-card-done");
const form_card_todo = window.document.getElementById("new_card_todo");
const form_card_doing = window.document.getElementById("new_card_doing");
const form_card_done = window.document.getElementById("new_card_done");
let teste = window.document.querySelector(".teste");
let teste2 = window.document.querySelector(".teste2");
let teste3 = window.document.querySelector(".teste3");

let listCard = [];

function AdicionarCard(vl, column) {
    listCard.push(vl);
    let img = document.createElement("img");
    let imgSrc = img.src="./ASSETS/imagens/remover.png";

    let AdicionarCardList = listCard.map(function(vl){
        return `
        <div class="card-info" draggable="true" ondragstart="dragStart(event)" ondragend="dragEnd(event)">
            <span>${vl}</span>
            <img src="${imgSrc}" alt="Icone de uma lixeira para excluir um card da coluna" class="card-info--img"/>
        </div>
        `
    });
    column.innerHTML += AdicionarCardList;
    
    let conteiner = window.document.querySelectorAll(".card-container");
    conteiner.forEach((item) => {
        //Esse evento é acionado sempre que um card é arrastado na div card-conteiner
        item.addEventListener("dragover", (e) => {
            const dragging = window.document.querySelector(".dragging"); // pegamos o item que está sendo movido
            const apply = getPosition(item, e.clientY); // Pegamos a posição que esse está sendo movido, passando a coluna e a posição desse item em si

            // Se tiver alguma posição do item, ele sera colocado depois do elemento, senão é colocado no ultima posição
            if (apply) {
                apply.insertAdjacentElement("afterend", dragging);
            } else {
                column.appendChild(dragging);
            }
        });
    });

    // Fazemos um for para cada item na div card-conteiner, e sempre que que um card é solto na div o texto que esta em cima é oculto
    conteiner.forEach((item) => {
        item.addEventListener("dragend", () => {
            item.childNodes[1].style.display = "none";
        });
    });
    
    listCard.length = 0;
};

function getPosition(coluna, posY) {
    // Dentro da coluna que o item está sendo movimentado, pegamos todos os itens que não é o item movimentado
    const cards = coluna.querySelectorAll(".card-info:not(.dragging)");
    let result;
    // Fazemos um for nos cards filtrados para pegar a altura e posição deles, assim é possivel colocar o card movido entre eles
    for (refer of cards) {
        const col = refer.getBoundingClientRect();
        // Usamos a função acima para pegar a posição do item e a altura
        // O resultado é divido por 2 para quando o item para em cima de outro item, ele ir para a posição de baixo
        const colY = col.y  + col.height / 2;
        
        if (posY >= colY) result = refer; // Se a posição do item for maior que a posição do item que está sendo movimentado por cima, essa posição é guardada
    };
    return result;
};

function dragStart(event) {
    event.target.classList.add("dragging"); //Sempre que um card é arrastado, uma classe dragging é colocada nele
};

function dragEnd(event) {
    event.target.classList.remove("dragging"); // Sempre o evento de arrastar um card é terminado, a classe dragging é remida dele
};

function CriarCardToDo() {
    let value_card_input_todo = window.document.getElementById("input_card_todo");
    let card_progress_input_todo = value_card_input_todo.value.trim();

    if (card_progress_input_todo != "") {
        AdicionarCard(card_progress_input_todo, columnTodo);
        value_card_input_todo.value = '';
        value_card_input_todo.style.display = "none";
    }
   
    teste.style.display = "none";
};

function CriarCardDoing() {
    let card_input_doing = window.document.getElementById("input_card_doing");
    let card_progress_input_doing = card_input_doing.value.trim();

    if (card_progress_input_doing != '') {
        AdicionarCard(card_progress_input_doing, columnDoing);
        card_input_doing.value = '';
        card_input_doing.style.display = "none";
    }
    
    teste2.style.display = "none";
    
};

function CriarCardDone() {
    let card_input_done = window.document.getElementById("input_card_done");
    let card_progress_input_done = card_input_done.value.trim();

    if (card_progress_input_done != '') {
        AdicionarCard(card_progress_input_done, columnDone);
        card_input_done.value = '';
        card_input_done.style.display = "none";
    }
    teste3.style.display = "none";
};


function deleterImagen(conteiner) {
    let cardInfoImg = conteiner.querySelectorAll(".card-info--img");
    let t = conteiner.querySelectorAll(".card-info:not(.generico)");

    for (let i = 0; i < t.length; i++) {
        cardInfoImg[i].addEventListener("click", () => {
            let divCardInfo = cardInfoImg[i].parentElement;
            divCardInfo.remove();
        });
    };

    t.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.preventDefault();
            if (t.length == 1) {
                setTimeout(() => {
                    teste.style.display = "flex";
                    console.log(teste);
                }, 2000);
            }
        });
    });
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