
function handleResponse(message) {console.log(`Message from the background script:  ${message.response}`);}

function handleError(error) {console.log(`Error: ${error}`);}

document.addEventListener('dblclick', function p(evento){
  console.log('Speak =>' + evento.target.innerText);

  var message = chrome.runtime.sendMessage({message: evento.target.innerText});

//  message.then(handleResponse, handleError);

  evento.target.classList.add('sep_speaking');
});

console.log('content_script Played!');
