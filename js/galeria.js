const galeria = document.getElementById("galeria");

const imagens = [
  "img/galeria/1.jpg",
  "img/galeria/2.jpg",
  "img/galeria/3.jpg",
  "img/galeria/4.jpg",
];

for (let i = 0; i < imagens.length; i++) {
  const imagem = document.createElement("img");
  imagem.src = imagens[i];
  imagem.style.marginRight = "50px";
  galeria.appendChild(imagem);
}