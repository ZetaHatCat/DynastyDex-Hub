const $ = id => document.getElementById(id);
const grid = $("grid"), overlay = $("overlay");

/* Tipo según rareza */
function getType(r) {
  if (r <= 0.5) return "Heavenly";
  if (r <= 3)   return "Mythic";
  if (r <= 10)  return "Legendary";
  if (r <= 20)  return "Epic";
  if (r <= 50)  return "Rare";
  return "Common";
}

/* Imagen de relleno si no hay una */
function img(d) {
  if (d.image) return d.image;
  const l = (d.name[0] || "?").toUpperCase();
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'><defs><radialGradient id='g'><stop offset='0' stop-color='#3a3940'/><stop offset='1' stop-color='#17161a'/></radialGradient></defs><rect width='400' height='400' fill='url(#g)'/><text x='200' y='250' font-size='160' text-anchor='middle' fill='#fff' fill-opacity='.7' font-family='sans-serif' font-weight='700'>${l}</text></svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

function pulse(el, cls) {
  el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls);
}

function render(list) {
  $("count").textContent = `${list.length} entries · by rarity`;
  grid.innerHTML = list.map(d => `
    <article class="card" data-i="${DYNASTIES.indexOf(d)}" tabindex="0">
      <div class="card-img"><img src="${esc(img(d))}" alt="${esc(d.name)}" loading="lazy"></div>
      <div class="card-info">
        <h3>${esc(d.name)}</h3>
        <p><b>T${d.rarity}</b><span>${esc(d.artist)}</span></p>
      </div>
    </article>`).join("");
}

function openModal(i) {
  const d = DYNASTIES[i];
  $("mTitle").textContent = d.name;
  $("mImg").src = img(d);
  $("mImg").alt = d.name;
  $("mRarity").textContent = "T" + d.rarity;
  $("mArtist").textContent = d.artist;
  $("mType").textContent = getType(d.rarity);
  $("mAbilityTitle").textContent = "Ability: " + d.ability;
  $("mAbilityText").textContent = d.text;
  overlay.hidden = false;
  pulse(overlay.firstElementChild, "pop");
  $("closeBtn").focus();
}
const closeModal = () => { overlay.hidden = true; };

grid.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (!card) return;
  pulse(card, "pulse");
  setTimeout(() => openModal(card.dataset.i), 180);
});
grid.addEventListener("keydown", e => {
  if (e.key === "Enter") e.target.click();
});
$("closeBtn").onclick = closeModal;
overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

$("search").addEventListener("input", e => {
  const q = e.target.value.trim().toLowerCase();
  render(DYNASTIES.filter(d => d.name.toLowerCase().includes(q)));
});

/* Tema claro / oscuro */
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem("theme", t); } catch (_) {}
}
try { setTheme(localStorage.getItem("theme") || "dark"); } catch (_) {}
$("themeBtn").onclick = () =>
  setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");

$("joinBtn").href = DISCORD_URL;
render(DYNASTIES);
