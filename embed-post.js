/**
 * Embed-Post Mod
 * Mostra posts públicos do Instagram em tempo real dentro dos resultados.
 * Usa o embed oficial do Instagram (permissão pública, sem login).
 */

document.addEventListener("DOMContentLoaded", async () => {
  const resultsContainer = document.querySelector(".resultados");
  if (!resultsContainer) return;

  // Cria botão para ativar o embed
  const btn = document.createElement("button");
  btn.textContent = "📸 Mostrar posts em tempo real";
  btn.className = "embed-btn";
  resultsContainer.before(btn);

  btn.addEventListener("click", async () => {
    btn.disabled = true;
    btn.textContent = "🔄 Carregando posts...";

    const links = Array.from(resultsContainer.querySelectorAll("a[href*='instagram.com/']"));
    let count = 0;

    for (const link of links) {
      if (count >= 5) break; // limita os primeiros perfis
      const profileUrl = link.href.replace(/\/$/, "");
      const embedUrl = `https://www.instagram.com/p/Cxabcdef123/embed`; // placeholder
      const profileName = profileUrl.split("/").pop();

      // Cria card de embed
      const card = document.createElement("div");
      card.className = "embed-card";
      card.innerHTML = `
        <h4>@${profileName}</h4>
        <blockquote class="instagram-media" data-instgrm-permalink="${profileUrl}" data-instgrm-version="14"></blockquote>
      `;
      resultsContainer.prepend(card);
      count++;
    }

    // Carrega o script oficial do Instagram
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);

    btn.textContent = "✅ Embeds carregados";
  });
});
