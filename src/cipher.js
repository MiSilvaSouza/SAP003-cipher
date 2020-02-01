window.cipher = {
  encode: encode,
  decode: decode
};

function encode(chave, mensagem) {
  let resultado = "";
  for (let letra of mensagem) {
    const msgCode = letra.charCodeAt();
    const maiusculas = (msgCode >= 65 && msgCode <= 90);
    const minusculas = (msgCode >= 97 && msgCode <= 122);
    const caracteres = (msgCode >= 32 && msgCode <= 64);

    if (maiusculas) {
      resultado += String.fromCharCode((((msgCode - 65 + chave) % 26) + 65));
    }
    if (minusculas) {
      resultado += String.fromCharCode((((msgCode - 97 + chave) % 26) + 97));
    }
    else if (caracteres) {
      resultado += String.fromCharCode(msgCode);
    }
  }
  return resultado;
}

function decode(chave, mensagem) {
  let resultado = "";
  for (let letra of mensagem) {
    const msgCode = letra.charCodeAt();
    const maiusculas = (msgCode >= 65 && msgCode <= 90);
    const minusculas = (msgCode >= 97 && msgCode <= 122);
    const caracteres = (msgCode >= 32 && msgCode <= 64);

    if (maiusculas) {
      resultado += String.fromCharCode((((msgCode - 90 - chave) % 26) + 90));
    }
    if (minusculas) {
      resultado += String.fromCharCode((((msgCode - 122 - chave) % 26) + 122));
    }
    else if (caracteres) {
      resultado += String.fromCharCode(msgCode);
    }
  }
  return resultado;
}