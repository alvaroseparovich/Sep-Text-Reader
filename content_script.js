
<<<<<<< HEAD
document.addEventListener('dblclick', function p(evento){
  console.log('Run Speak content_script=>' + evento.target.innerText);
  var runTime = chrome.runtime;
  var message = runTime.sendMessage({message: evento.target.innerText});
=======
function handleResponse(message) {console.log(`Message from the background script:  ${message.response}`);}

function handleError(error) {console.log(`Error: ${error}`);}

document.addEventListener('dblclick', e => {
  console.log('Speak =>' + e.target.innerText);

  var message = chrome.runtime.sendMessage({message: e.target.innerText});

  message.then(handleResponse, handleError);
>>>>>>> master

  e.target.classList.add('sep_speaking');
});

chrome.runtime.onMessage.addListener(handleMessage);

function handleMessage(request, sender, sendResponse) {
  console.log('rodou a response!!!');
}
/*
function initContentScript(){
  console.log('passou aqki');
  chrome.runtime.onMessage.addListener(handleMessage);
  console.log('passou aqki tambem');
}


*/
console.log('content_script Played!');
