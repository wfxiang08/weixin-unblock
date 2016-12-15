
function getQueryString(name, url) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = url.match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    } else {
        return null;
    }
}

// https://weixin110.qq.com/security/newreadtemplate?t=webpage_intercept/w_reason&block_type=1&url=http%3A%2F%2Fwww.baidu.com
chrome.webRequest.onBeforeRequest.addListener(function(details) {
    var url = getQueryString("url", details.url);
    if (url) {
        return {redirectUrl: url};
    } else {
        return {cancel: false};
    }
}, {urls: ["https://weixin110.qq.com/*"]}, ["blocking"]);

