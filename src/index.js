const chave = document.getElementById("chave");
const mensagem = document.getElementById("msg");

document.getElementById("btn-cifrar").onclick = function cifrar() {
  window.cipher.encode(chave.value, mensagem.value);
  document.getElementById("resultado").innerHTML = window.cipher.encode(+(chave.value), mensagem.value);
};
document.getElementById("btn-decifrar").onclick = function decifrar() {
  window.cipher.decode(chave.value, mensagem.value);
  document.getElementById("resultado").innerHTML = window.cipher.decode(+(chave.value), mensagem.value);
};