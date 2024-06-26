import { catalogo } from "./utilities.js";
import { adicionarCarrinho } from "./menucart.js";
import { abrirCarrinho } from "./menucart.js";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="card hide ${
      produtoCatalogo.feminino ? "feminino" : "masculino"
    }" id="card-produto-${produtoCatalogo.id}"> <img class="img-card"
  src= ${produtoCatalogo.imagem}
  alt=${produtoCatalogo.nome}
  />
  <p>${produtoCatalogo.nome}</p>
  <p>R$ ${produtoCatalogo.preco},00</p>
  <button id= "adicionar-${
    produtoCatalogo.id
  }">Adicionar<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="rgb(246, 230, 197)" class="bi bi-cart-plus" viewBox="0 0 16 16">
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg></button></div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }
  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarCarrinho(produtoCatalogo.id));

    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => abrirCarrinho());
  }
}
