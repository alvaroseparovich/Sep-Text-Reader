
function handleResponse(message) {console.log(`Message from the background script:  ${message.response}`);}

function handleError(error) {console.log(`Error: ${error}`);}

document.addEventListener('dblclick', e => {
  console.log('Speak =>' + e.target.innerText);

  var message = chrome.runtime.sendMessage({message: e.target.innerText});

  message.then(handleResponse, handleError);

  e.target.classList.add('sep_speaking');
});

console.log('content_script Played!');
