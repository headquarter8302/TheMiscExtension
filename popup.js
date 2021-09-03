// API runtime: Create new window
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.windows.create({
    url: chrome.runtime.getURL("mypage.html"),
    type: "popup"
  });
});

// Copy funtion
function copy() {
  let copyText = document.getElementById("copy").getAttribute("value");
  navigator.clipboard.writeText(copyText.value);
};
