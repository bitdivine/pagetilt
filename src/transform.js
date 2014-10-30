

function transform() {
  chrome.tabs.executeScript({
    code: "document.querySelector('html').style['-webkit-transform'] = 'matrix(0,1,-1,0,'+window.innerWidth+',0)';"
        + "document.querySelector('html').style['-webkit-transform-origin'] = '0px 0px';"
        + "document.querySelector('html').style['position'] = 'absolute';"
        + "document.querySelector('html').style['width'] = window.innerHeight+'px';"
        + "document.querySelector('html').style['position'] = window.innerWidth+'px';"
  });
}

chrome.browserAction.onClicked.addListener(transform);

