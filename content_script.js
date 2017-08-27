
document.addEventListener('dblclick', function p(evento){
  console.log('Run Speak content_script=>' + evento.target.innerText);

  var runTime = chrome.runtime;
  var message = runTime.sendMessage({message: evento.target.innerText});

  evento.target.classList.add('sep_speaking');
});


function initContentScript(){
  console.log('passou aqki');
  chrome.runtime.onMessage.addListener(handleMessage);
  console.log('passou aqki tambem');
}

function handleMessage(request, sender, sendResponse) {
  console.log('rodou a response!!!');
}

initContentScript();


console.log('content_script Played!');
