
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

  var message = chrome.runtime.sendMessage({message:'run this snippet'});
}

function handleMessage(request, sender, sendResponse) {
  sep.text(request.message);
  console.log('rodouuuu');
}

initBackground();
