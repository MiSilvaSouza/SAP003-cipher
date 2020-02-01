const chave = document.querySelector(".chave");
const mensagem = document.querySelector(".msg");

document.querySelector(".btn-cifrar").onclick = function cifrar() {  
  document.querySelector(".resultado").innerHTML = window.cipher.encode(+(chave.value), mensagem.value);
};
document.querySelector(".btn-decifrar").onclick = function decifrar() {  
  document.querySelector(".resultado").innerHTML = window.cipher.decode(+(chave.value), mensagem.value);
};