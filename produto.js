
const produtos = {
    ps3: {
        nome: "PS3",
        preco: "R$ 100",
        imagem: "imagems/ps3.jpg.jpg",
        descricao: "Console Playstation 3 clássico.",
        detalhes: "Possui diversos jogos incríveis e ótimo custo benefício."
    },

    xbox36: {
        nome: "Xbox 360",
        preco: "R$ 50",
        imagem: "imagems/xbox360.png",
        descricao: "Console Xbox 360.",
        detalhes: "Perfeito para jogos antigos e multiplayer local."
    },

    ps2: {
        nome: "PS2",
        preco: "R$ 50",
        imagem: "imagems/ps2.png",
        descricao: "Playstation 2 raiz.",
        detalhes: "Um dos consoles mais vendidos da história."
    },

    ps1: {
        nome: "PS1",
        preco: "R$ 30",
        imagem: "imagems/ps1.png",
        descricao: "Primeiro Playstation.",
        detalhes: "Clássico retrô para fãs de nostalgia."
    },

    xbox: {
        nome: "Xbox Clássico",
        preco: "R$ 40",
        imagem: "imagems/xbox.png",
        descricao: "Primeiro Xbox.",
        detalhes: "Console raiz da Microsoft."
    },

    dream: {
        nome: "Dreamcast",
        preco: "R$ 20",
        imagem: "imagems/dreamcast.png",
        descricao: "Console da Sega.",
        detalhes: "Apesar de pouco popular, tem jogos excelentes."
    }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const nome = document.getElementById("nome-produto");
const preco = document.getElementById("preco-produto");
const imagem = document.getElementById("imagem-produto");
const descricao = document.getElementById("descricao-produto");
const detalhes = document.getElementById("detalhes-produto");

if (produtos[id]) {
    nome.textContent = produtos[id].nome;
    preco.textContent = produtos[id].preco;
    imagem.src = produtos[id].imagem;
    descricao.textContent = produtos[id].descricao;
    detalhes.textContent = produtos[id].detalhes;
} else {
    nome.textContent = "Produto não encontrado";
}

const btnComprar = document.querySelector(".btn-comprar");
const btnCarrinho = document.querySelector(".btn-carrinho");

btnComprar.addEventListener("click", () => {
    alert("Compra realizada!");
});

btnCarrinho.addEventListener("click", () => {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.push(produtos[id]);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert("Produto adicionado ao carrinho!");
});