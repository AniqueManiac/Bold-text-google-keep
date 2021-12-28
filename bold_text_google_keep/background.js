
chrome.browserAction.setIcon({ path: "/images/logo38-disable.png" });
chrome.browserAction.setPopup({ popup: "" });

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // console.log(changeInfo.url);
  if (dirRem(tab.url) == "https://keep.google.") {
    chrome.browserAction.setIcon({ path: "/images/logo38.png" });
    //chrome.browserAction.setIcon({ tabId, path: icons.enabled });
    chrome.browserAction.setPopup({ popup: "main.html" }); // your popup filename
    console.log("true");
  } else {
 //   chrome.browserAction.setIcon({ tabId, path: icons.disabled });
    chrome.browserAction.setIcon({ path: "/images/logo38-disable.png" });
    chrome.browserAction.setPopup({ popup: "" });
    console.log("false");
  };

}); 

chrome.tabs.onActivated.addListener(function(activeInfo) {
 // how to fetch tab url using activeInfo.tabid
 chrome.tabs.get(activeInfo.tabId, function(tab){
    console.log(tab.url);
  if (dirRem(tab.url) == "https://keep.google.") {
    chrome.browserAction.setIcon({ path: "/images/logo38.png" });
    //chrome.browserAction.setIcon({ tabId, path: icons.enabled });
    chrome.browserAction.setPopup({ popup: "main.html" }); // your popup filename
    console.log("true");
  } else {
 //   chrome.browserAction.setIcon({ tabId, path: icons.disabled });
    chrome.browserAction.setIcon({ path: "/images/logo38-disable.png" });
    chrome.browserAction.setPopup({ popup: "" });
    console.log("false");
  };

 });
}); 

function dirRem(full){
  var parts = full.split('.')
  var sub = parts[0]
  var domain = parts[1]
  var subdomain = parts[2]
  var newUrl = sub + '.' + domain + '.' ;
  return newUrl;
  }
