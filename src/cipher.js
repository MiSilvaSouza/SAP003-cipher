window.cipher = {
  encode: encode,
  decode: decode
  // ...

};
function encode(chave, mensagem) {
  let msg = mensagem.toUpperCase(); 
  let msgFinal = ''  
  for(let i = 0; i < msg.length; i++) {
    let msgASC = msg.charCodeAt(i);
    let encodeMSG = ((msgASC - 65 + chave) % 26) + 65;
    let msgCifrada = String.fromCharCode(encodeMSG)
    msgFinal += msgCifrada        
  }
return msgFinal
  }
function decode(chave, mensagem) {
  let msg = mensagem.toUpperCase();
  let msgFinal2 = ''
  for(let i = 0; i < msg.length; i++) {
    let msgASC2 = msg.charCodeAt(i);
    let decodeMSG = ((msgASC2 - 65 - chave) % 26) + 65;
    let msgDecifrada = String.fromCharCode(decodeMSG)
    msgFinal2 += msgDecifrada
  }
return msgFinal2

  //alert (`A chave é ${chave} e a mensagem é ${mensagem}`)
} 
