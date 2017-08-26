
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
  chrome.runtime.onMessage.addListener(handleMessage);
}

function handleMessage(request, sender, sendResponse) {
  console.log("Message from the content script: " +
  request.message);
  sep.text(request.message);
  sendResponse({response: "Response from background script"});
}

initBackground();
