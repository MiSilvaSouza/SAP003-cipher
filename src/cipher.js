window.cipher = {
  encode: encode,
  decode: decode
  // ...

};
function encode(chave, mensagem) {  
  let resultado = "";  
  for (let i = 0; i < mensagem.length; i++) {
    if (mensagem.charCodeAt(i) >=65 && mensagem.charCodeAt(i) <=90) {
      resultado += String.fromCharCode((((mensagem.charCodeAt(i) - 65 + chave) % 26) + 65));    
    } 
    else if (mensagem.charCodeAt(i) >=97 && mensagem.charCodeAt(i) <=122) {
      resultado += String.fromCharCode((((mensagem.charCodeAt(i) - 97 + chave) % 26) + 97));
    } 
    else if (mensagem.charCodeAt(i) >=32 && mensagem.charCodeAt(i) <=64) {
      resultado += String.fromCharCode(mensagem.charCodeAt(i));
    }       
  }
  return resultado;
}
function decode(chave, mensagem) {  
  let resultado = "";
  for (let i = 0; i < mensagem.length; i++) {
    if (mensagem.charCodeAt(i) >=65 && mensagem.charCodeAt(i) <=90) {
      resultado += String.fromCharCode((((mensagem.charCodeAt(i) - 90 - chave) % 26) + 90));    
    } 
    else if (mensagem.charCodeAt(i) >=97 && mensagem.charCodeAt(i) <=122) {
      resultado += String.fromCharCode((((mensagem.charCodeAt(i) - 122 - chave) % 26) + 122));
    } 
    else if (mensagem.charCodeAt(i) >=32 && mensagem.charCodeAt(i) <=64) {
      resultado += String.fromCharCode(mensagem.charCodeAt(i));
    }       
  }
  return resultado;
}