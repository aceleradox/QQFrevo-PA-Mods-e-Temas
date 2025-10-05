/**
 * Bookmark Mod
 * Exibe os perfis favoritos em lista com @, hyperlink e botão de compartilhar
 */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".favoritos");
  if (!container) return;

  const favItems = Array.from(container.querySelectorAll(".fav-item"));

  favItems.forEach(item => {
    const linkEl = item.querySelector("a");
    if (!linkEl) return;

    // Extrai o @ do link
    const url = linkEl.href;
    const match = url.match(/instagram\.com\/([a-zA-Z0-9._]+)\/?/);
    const username = match ? `@${match[1]}` : url;

    // Limpa o item atual
    item.innerHTML = `
      <span class="fav-username"><a href="${url}" target="_blank">${username}</a></span>
      <button class="share-btn">Share</button>
    `;

    // Adiciona evento ao botão de compartilhar
    const btn = item.querySelector(".share-btn");
    btn.addEventListener("click", () => {
      // Copia link para clipboard
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link copiado: ${url}`);
      });
    });
  });
});