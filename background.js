
function getQueryString(name, url) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = url.match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    } else {
        return null;
    }
}

function removeParam(key, sourceURL) {
    var rtn = sourceURL.split("?")[0],
        param,
        params_arr = [],
        queryString = (sourceURL.indexOf("?") !== -1) ? sourceURL.split("?")[1] : "";

    if (queryString !== "") {
        params_arr = queryString.split("&");
        for (var i = params_arr.length - 1; i >= 0; i -= 1) {
            param = params_arr[i].split("=")[0];
            if (param === key) {
                params_arr.splice(i, 1);
            }
        }
        if (params_arr.length > 0) {
            rtn = rtn + "?" + params_arr.join("&");
        }
    }
    return rtn;
}

// https://weixin110.qq.com/security/newreadtemplate?t=webpage_intercept/w_reason&block_type=1&url=http%3A%2F%2Fwww.baidu.com
chrome.webRequest.onBeforeRequest.addListener(function(details) {
    var url = getQueryString("url", details.url);
    if (url) {
        // nsukey=xxx
        // 去掉参数
        url = removeParam("nsukey", url);
        return {redirectUrl: url};
    } else {
        return {cancel: false};
    }
}, {urls: ["https://weixin110.qq.com/*"]}, ["blocking"]);

