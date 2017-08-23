document.addEventListener('click', function p(evento){
  console.log('Speak =>' + evento.target.innerText);
  chrome.extension.sendRequest({'text': evento.target.innerText})
});

console.log('content_script Played!');
