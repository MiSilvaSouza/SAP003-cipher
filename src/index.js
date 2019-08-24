const chave = document.getElementById("chave");
const mensagem = document.getElementById("msg");

document.getElementById("btnCifrar").onclick = function cifrar() {
  window.cipher.encode(chave.value, mensagem.value);
  document.getElementById("result").innerHTML = window.cipher.encode(Number(chave.value), mensagem.value);
};
document.getElementById("btnDecifrar").onclick = function decifrar() {
  window.cipher.decode(chave.value, mensagem.value);
  document.getElementById("result").innerHTML = window.cipher.decode(Number(chave.value), mensagem.value);
};