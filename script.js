// 1️⃣ Mensagem de boas-vindas
window.onload = () => {
    alert("Bem-vindo(a) à Fortech! Confira nossas promoções 🔥");
};

// 2️⃣ Adicionar produto ao carrinho
let botoes = document.querySelectorAll('.btn-adicionar');
let carrinho = 0;

botoes.forEach(btn => {
    btn.addEventListener('click', () => {
        carrinho++;
        alert("Produto adicionado! Itens no carrinho: " + carrinho);
    });
});

// 3️⃣ Botão de destaque leva à página de produtos
document.getElementById('btn-destaque').addEventListener('click', () => {
    window.location.href = "produtos.html";
});

// 4️⃣ Tema escuro/claro
function alternarTema() {
    document.body.classList.toggle("dark-mode");
}

document.body.insertAdjacentHTML("beforeend", `
    <button id="tema-btn">Alternar Tema</button>
`);

document.getElementById("tema-btn").addEventListener("click", alternarTema);

// 5️⃣ Filtragem de produtos (exemplo simplificado)
function filtrarProdutos(categoria) {
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(prod => {
        prod.style.display = prod.textContent.includes(categoria) ? "block" : "none";
    });
}


// Mantém contador de carrinho simples usando localStorage
(function(){
  function getCount(){ return Number(localStorage.getItem('techmarket_cart') || 0); }
  function setCount(n){ localStorage.setItem('techmarket_cart', String(n)); updateDOM(); }

  // Atualiza elementos com id 'contador-carrinho'
  function updateDOM(){
    document.querySelectorAll('#contador-carrinho').forEach(el => el.textContent = getCount());
  }

  // Ao carregar marca link ativo (baseado em pathname)
  function setActiveNav(){
    const path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(a=>{
      const href = a.getAttribute('href');
      if(!href) return;
      if(href === path || (href.endsWith('index.html') && path === '')) a.classList.add('active');
      else a.classList.remove('active');
    });
  }

  // Função pública para adicionar item (pode ser chamada pelos botões)
  window.techmarket = {
    addToCart: function(increment=1){
      setCount(getCount() + Number(increment));
    },
    clearCart: function(){ setCount(0); }
  };

  // Event listeners globais
  document.addEventListener('DOMContentLoaded', function(){
    updateDOM();
    setActiveNav();

    // conecta botões com classe .btn-adicionar
    document.querySelectorAll('.btn-adicionar').forEach(btn=>{
      btn.addEventListener('click', function(e){
        e.preventDefault();
        window.techmarket.addToCart(1);
        btn.textContent = 'Adicionado ✓';
        setTimeout(()=> btn.textContent = 'Adicionar ao Carrinho', 1200);
      });
    });
  });
})();
