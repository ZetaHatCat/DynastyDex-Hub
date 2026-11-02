/* ===== CONFIGURACIÓN (edita aquí) ===== */
const DISCORD_URL = "https://discord.gg/TU-ENLACE";

/* ===== DINASTÍAS =====
   name:    nombre
   rarity:  número (0, 0.5, 3.1, 25...) → se muestra como T<número>
   artist:  nombre del artista
   image:   ruta de la imagen, ej: "img/kievan.png" (vacío = imagen de relleno)
   ability: nombre de la habilidad (sale en negrita tras "Ability:")
   text:    descripción de la habilidad
   Agrega o quita bloques { } y el contador se actualiza solo. */
const DYNASTIES = [
  { name: "Greater Ottoman Empire",    rarity: 0,  artist: "ZetaHatCat",   image: "https://i.postimg.cc/BQm4Bxzv/173-sin-titulo-20260904164751.png", ability: "Noun", text: "Texto de la habilidad. Edítalo en js/data.js." },
  { name: "Reichtangle", rarity: 0.4,  artist: "ZetaHatCat", image: "https://i.postimg.cc/MTD57N8L/imagen-2026-11-02-124933657.png", ability: "Noun", text: "Texto de la habilidad. Edítalo en js/data.js." },
  { name: "Franco-British Union",    rarity: 0.4,  artist: "PerilousPokey", image: "https://i.postimg.cc/28BvmMKr/imagen-2026-11-02-125101896.png", ability: "Noun", text: "Texto de la habilidad. Edítalo en js/data.js." },
  { name: "Roman Empire", rarity: 0.5, artist: "PerilousPokey", image: "https://i.postimg.cc/V6hvwFRC/imagen-2026-10-04-220350652.png", ability: "Noun", text: "Texto de la habilidad. Edítalo en js/data.js." },
  { name: "British Empire",  rarity: 1,  artist: "TeaLand",   image: "https://i.postimg.cc/SsDX3ycX/imagen-2026-08-12-065953935.png", ability: "Noun", text: "Texto de la habilidad. Edítalo en js/data.js." },
  { name: "Mongol Empire", rarity: 1,  artist: "deleted_user", image: "https://i.postimg.cc/7YdhPsPK/imagen-2026-09-27-093340227.png", ability: "Noun", text: "Texto de la habilidad. Edítalo en js/data.js." }
];
