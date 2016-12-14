# 微信unblock
* 作用：
	* 在Mac版微信中打开没有经过ICP备案的域名时，默认会被微信堵住
		* 例如： https://weixin110.qq.com/security/newreadtemplate?t=webpage_intercept/w_reason&block_type=1&url=http%3A%2F%2F//www.meilshuo.me
		* 然后点击“跳转”之后，需要再经过微信服务器。反应很慢，体验不好。
	* 本Plugin直接截获微信的请求，然后直接跳转到url对应的页面中

## 安装
 * 下载代码(Download code by git or direct download zip)
	 * git clone https://github.com/wfxiang08/weixin_unblock.git
	 * 或下载:(Download zip file and unzip it)
		 * https://github.com/wfxiang08/weixin_unblock/archive/master.zip
		 * 解压缩zip文件
 * Open Chrome
	* Enter URL: chrome://extensions/
	* Enable Develop Mode(选中开发者模式)
	* Load the uncompressed extension from folder "weixin_unblock")加载已解压的扩展程序，然后选中weixin_unblock, 即可安装。

## 验证
 * 从微信中打开新的URL, 应该能直接访问
	 * 例如：https://weixin110.qq.com/security/newreadtemplate?t=webpage_intercept/w_reason&block_type=1&url=http%3A%2F%2F//www.meilshuo.me 跳转到: http://www.meilshuo.me/
