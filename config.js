var dsm = {};

(function($,app){

	app.IS_DEBUG = true;

	app.API_KEY = "f3330b2b08327bc2ed0806b5bc153de024c65e29";
	app.API_URL = "<%=searchTypeUrl%>?apikey=<%=apikey%>&q=<%=query%>&result=5&pageno=<%=pageno%>&output=json&callback=callbackData";
	app.SEARCH_TYPE = ["블로그","카페","게시판"];
	app.SEARCH_API_URL = [
		// "http://apis.daum.net/search/blog",
		"dummy.json",
		"http://apis.daum.net/search/cafe",
		"http://apis.daum.net/search/board"];


})(jQuery, dsm);


