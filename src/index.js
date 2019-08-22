const chave = document.getElementById("chave")
const mensagem = document.getElementById("msg")

function cifrar() {
    window.cipher.encode(chave.value, mensagem.value)
    document.getElementById("resultcifra").innerHTML = window.cipher.encode(chave.value, mensagem.value);
  }
function decifrar() {
    window.cipher.decode(chave.value, mensagem.value)
    document.getElementById("resultdecifra").innerHTML = window.cipher.decode(chave.value, mensagem.value);
}