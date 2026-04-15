
const lista = document.getElementById("lista-carrinho");
const totalEl = document.getElementById("total");
const btnLimpar = document.querySelector(".btn-limpar");
const btnFinalizar = document.querySelector(".btn-finalizar");

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function renderizarCarrinho() {
    lista.innerHTML = "";

    let total = 0;

    if (carrinho.length === 0) {
        lista.innerHTML = "<p>Seu carrinho está vazio.</p>";
        totalEl.textContent = "R$ 0,00";
        return;
    }

    carrinho.forEach((produto, index) => {

        const item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            
            <div class="item-info">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
            </div>

            <p class="item-preco">${produto.preco}</p>

            <button class="btn-remover" data-index="${index}">
                Remover
            </button>
        `;

        lista.appendChild(item);

        let precoNumero = Number(produto.preco.replace("R$", "").replace(",", "."));
        total += precoNumero;
    });

    totalEl.textContent = "R$ " + total.toFixed(2);

    const botoesRemover = document.querySelectorAll(".btn-remover");

    botoesRemover.forEach(botao => {
        botao.addEventListener("click", () => {
            const index = botao.getAttribute("data-index");

            carrinho.splice(index, 1);

            localStorage.setItem("carrinho", JSON.stringify(carrinho));

            renderizarCarrinho();
        });
    });
}

btnLimpar.addEventListener("click", () => {
    localStorage.removeItem("carrinho");
    carrinho = [];
    renderizarCarrinho();
});

btnFinalizar.addEventListener("click", () => {
    if (carrinho.length === 0) {
        alert("Carrinho vazio!");
        return;
    }

    alert("Compra finalizada com sucesso!");

    localStorage.removeItem("carrinho");
    carrinho = [];
    renderizarCarrinho();
});

renderizarCarrinho();