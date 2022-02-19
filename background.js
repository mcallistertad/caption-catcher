


//chrome.browserAction.page .addListener(function (tab) { //Fired when User Clicks ICON
//    if (tab.url.indexOf("https://www.youtube.*") != -1) { // Inspect whether the place where user clicked matches with our list of URL
//        chrome.tabs.executeScript(tab.id, {
//            "file": "contentscript.js"
//        }, function () { // Execute your code
//            console.log("Script Executed .. "); // Notification on Completion
//        });
//    }
//});

function checkForValidUrl(tabId, changeInfo, tab) {
// If the tabs url starts with "http://youtube.com"...
    if (tab.url.indexOf('http://youtube') == 0) {
// ... show the page action.
        chrome.pageAction.show(tabId);
    }
}

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

//Look for Intimation from Content Script for rerun of Injection
// chrome.extension.onMessage.addListener(function (message, sender, callback) {
//     // Look for Exact message
//     if (message == "Rerun script") {
//         //Inject script again to the current active tab
//         chrome.tabs.executeScript({
//             file: "rerunInjection.js"
//         }, function () {
//             console.log("Injection is Completed");
//         });
//     }
// });

