document.addEventListener('dblclick', function p(evento){
  console.log('Speak =>' + evento.target.innerText);
  chrome.extension.sendRequest({'speak': evento.target.innerText})
  evento.target.classList.add('sep_speaking');
});

console.log('content_script Played!');
