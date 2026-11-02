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
  { name: "Kievan Rus'",    rarity: 0,  artist: ".wken",   image: "", ability: "Noun", text: "Texto de la habilidad. Edítalo en js/data.js." },
  { name: "British Empire", rarity: 1,  artist: "Cattitan", image: "", ability: "Noun", text: "Texto de la habilidad. Edítalo en js/data.js." },
  { name: "Reichtangle",    rarity: 1,  artist: "AUSTRIA-HUNGARY #7539", image: "", ability: "Noun", text: "Texto de la habilidad. Edítalo en js/data.js." },
  { name: "Umayyad Caliphate", rarity: 1, artist: ".wken", image: "", ability: "Noun", text: "Texto de la habilidad. Edítalo en js/data.js." },
  { name: "Mongol Empire",  rarity: 4,  artist: "Cubic",   image: "", ability: "Noun", text: "Texto de la habilidad. Edítalo en js/data.js." },
  { name: "Russian Empire", rarity: 4,  artist: "_finland_", image: "", ability: "Noun", text: "Texto de la habilidad. Edítalo en js/data.js." }
];
