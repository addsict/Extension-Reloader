chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  chrome.tabs.query({},function(results) {  
    for (var i = 0, l = results.length; i < l; i++) {
      if (results[i].url == "chrome://settings/extensions#") {
        var tabId = results[i].id;
        chrome.tabs.update(tabId, {active: true});
      }
    }
  });
});
/*
chrome.browserAction.onClicked.addListener(function(tab) {
  // query$B$K(B"chrome://settings/extensions#"$B$r(Burl$B$H$7$FF~$l$F$b(Bextension$B$N%Z!<%8$,<hF@$G$-$J$$$N$G!"(B
  //  $BA4$F$N%?%V$r<hF@$7$F$+$i(Bextension$B$N%?%V$rC5$9(B
  //
  chrome.tabs.query({},function(results) {  
    for (var i = 0, l = results.length; i < l; i++) {
      if (results[i].url == "chrome://settings/extensions#") {
        var tabId = results[i].id;
        chrome.tabs.update(tabId, {active: true}, function(tab) {
          reloadExtension("dimdcggmcokdnapmajgeikecmejcmmfe");
        });
      }
    }
  });
});
*/
