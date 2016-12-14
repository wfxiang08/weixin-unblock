
function getQueryString(name, url) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = url.match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    } else {
        return null;
    }
}

// https://weixin110.qq.com/security/newreadtemplate?t=webpage_intercept/w_reason&block_type=1&url=http%3A%2F%2Fphabricator.ushow.media%2Fw%2Fstarmaker%2Fandroid%2Fstarmaker_android_client_%3Fnsukey%3DV0sIVwxUf%252Ffnpzh%252BgAOptwZpUH6371Y6fQiWOBfhsr3bA3XD5ahBOyQd2ovnzGwdki76pOgecEWUS%252FtZrWan7%252FuweSIhww4n55MWzH%252FAbN2EcY27dtn91O1qwmDrDZXfRjXdhaPpo6ysfAYGB8EXur5Pa39P982rj0B2FzoVYU51x8Fq%252FKeLmKkC9vtJVuV2&version=12000510&devicetype=iMac+MacBookPro11%2C4+OSX+OSX+10.12.1+build(16B2555)&lang=zh_CN&scene=0&ext_block_type=0&ticket=Ymh0dHA6Ly9waGFicmljYXRvci51c2hvdy5tZWRpYS93L3N0YXJtYWtlci9hbmRyb2lkL3N0YXJtYWtlcl9hbmRyb2lkX2NsaWVudF8%2FbnN1a2V5PVYwc0lWd3hVZiUyRmZucHpoJTJCZ0FPcHR3WnBVSDYzNzFZNmZRaVdPQmZoc3IzYkEzWEQ1YWhCT3lRZDJvdm56R3dka2k3NnBPZ2VjRVdVUyUyRnRacldhbjclMkZ1d2VTSWh3dzRuNTVNV3pIJTJGQWJOMkVjWTI3ZHRuOTFPMXF3bURyRFpYZlJqWGRoYVBwbzZ5c2ZBWUdCOEVYdXI1UGEzOVA5ODJyajBCMkZ6b1ZZVTUxeDhGcSUyRktlTG1La0M5dnRKVnVWMg%3D%3D&exportkey=Aey5P2GqC1czupFJeMy9tyA%3D&pass_ticket=1oiulUUAlwn9PgE%2FArZObmJevXzNm29jv64uRb11FGISeTt1hjqcewUBLSvO%2FWQg&wechat_real_lang=zh_CN
chrome.webRequest.onBeforeRequest.addListener(function(details) {
    var url = getQueryString("url", details.url);
    if (url) {
        return {redirectUrl: url};
    } else {
        return {cancel: false};
    }
}, {urls: ["https://weixin110.qq.com/*"]}, ["blocking"]);

