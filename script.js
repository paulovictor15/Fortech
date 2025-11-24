// 1️⃣ Mensagem de boas-vindas
window.onload = () => {
    alert("Bem-vindo(a) à Fortech! Confira nossas promoções 🔥");
};

// -------------------------------------------------------------
// 2️⃣ SISTEMA DE CARRINHO —
// -------------------------------------------------------------

// Carregar carrinho do localStorage
let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// Atualizar contador do carrinho no menu
function atualizarContador() {
    document.querySelectorAll('#contador-carrinho').forEach(el => {
        el.textContent = carrinho.length;
    });
}
atualizarContador();

// Função global para adicionar item ao carrinho
window.addToCart = function (btn) {
    // Pegando o elemento pai do produto
    let produtoEl = btn.closest(".produto");

    let produto = {
        nome: produtoEl.querySelector("h4").textContent,
        preco: produtoEl.querySelector("p").textContent,
        imagem: produtoEl.querySelector("img").src
    };

    // Adiciona no carrinho
    carrinho.push(produto);

    // Salva no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Atualiza contador
    atualizarContador();

    // Feedback no botão
    btn.textContent = "Adicionado ✓";
    setTimeout(() => btn.textContent = "Adicionar", 1200);
};

// Ativar botões
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn-adicionar").forEach(btn => {
        btn.addEventListener("click", () => addToCart(btn));
    });
});

// -------------------------------------------------------------
// 3️⃣ Botão de destaque leva à página de produtos
// -------------------------------------------------------------
let destaque = document.getElementById('btn-destaque');
if (destaque) {
    destaque.addEventListener('click', () => {
        window.location.href = "produtos.html";
    });
}

// -------------------------------------------------------------
// 4️⃣ Tema escuro/claro
// -------------------------------------------------------------
function alternarTema() {
    document.body.classList.toggle("dark-mode");
}

document.body.insertAdjacentHTML("beforeend", `
    <button id="tema-btn">Alternar Tema</button>
`);

document.getElementById("tema-btn").addEventListener("click", alternarTema);

// -------------------------------------------------------------
// 5️⃣ Filtragem simples
// -------------------------------------------------------------
function filtrarProdutos(categoria) {
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(prod => {
        prod.style.display = prod.textContent.includes(categoria) ? "block" : "none";
    });
}

