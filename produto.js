async function carregarDados() {
    const destino = document.getElementById('destino');
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    try {
        const response = await fetch('ramalho.json');
        const produtos = await response.json();

        if (destino) {
            destino.innerHTML = '';
            produtos.forEach(item => {
                const link = document.createElement('a');
                link.href = `produto.html?id=${item.id}`;
                link.className = 'linkp';
                link.innerHTML = `
                    <div class="card">
                        <img src="${item.imagem}" alt="imagem" class="cardimg">
                        <h1 class="cardh1">${item.nome}</h1>
                        <p class="produtopreco">${item.preco}</p>
                        <p class="cardp">${item.descricao}</p>
                    </div>
                `;
                destino.appendChild(link);
            });
        }

        if (id && document.getElementById("nomeproduto")) {
            const prod = produtos.find(p => p.id === id);
            if (prod) {
                document.getElementById("nomeproduto").textContent = prod.nome;
                document.getElementById("precoproduto").textContent = prod.preco;
                document.getElementById("imagemproduto").src = prod.imagem;
                document.getElementById("descricaoproduto").textContent = prod.descricao;
                document.getElementById("detalhesproduto").textContent = prod.detalhes;
            }
        }
    } catch (error) {
        console.error("Erro ao carregar JSON:", error);
    }
}

document.addEventListener('DOMContentLoaded', carregarDados);

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}