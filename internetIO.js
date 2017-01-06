var http = require('http'),
	urls = ['www.baidu.com','www.douyutv.com','www.zhihu.com'];

function fetchPage(url){
	var start = new Date();
	http.get({host:url},function(res){
		console.log("got response from :"+url);
		console.log("request took :",new Date() - start,"ms");
	});
}
for(var i=0;i<urls.length;i++){
	fetchPage(urls[i]);
}

