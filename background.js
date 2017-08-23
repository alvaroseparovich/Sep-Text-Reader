
function loadContentScriptInAllTabs() {
  chrome.windows.getAll({'populate': true}, function(windows) {
    for (var i = 0; i < windows.length; i++) {
      var tabs = windows[i].tabs;
      for (var j = 0; j < tabs.length; j++) {
        chrome.tabs.executeScript(
            tabs[j].id,
            {file: 'content_script.js', allFrames: true});
      }
    }
  });
}

function initBackground(){
  loadContentScriptInAllTabs();
  chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
      if (request['speak']) {
        sep.text(request['speak']);
        sep.speak();
      }
      else if(request[greeting]){
        sep.text(request[greeting]);
        sep.speak();
      }
    });
/*
function handleMessage(request, sender, sendResponse) {
  sep.text(request.greeting);
  sep.speak();
  sendResponse({response: "Response from background script"});
}*/

browser.runtime.onMessage.addListener(handleMessage);
}
initBackground();
