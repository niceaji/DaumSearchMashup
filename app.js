var IS_DEBUG = true;

var _log = function(){
	if(IS_DEBUG) {
		console.log(arguments);
	}
};

$(document).ready(function() {

	var API_KEY = "f3330b2b08327bc2ed0806b5bc153de024c65e29";
	var API_URL = "http://apis.daum.net/search/vclip?apikey=<%=apikey%>&q=<%=query%>&result=5&pageno=<%=pageno%>&output=json&callback=?";
	var SEARCH_TYPE = ["블로그","카페","게시판"];
	var SEARCH_API_URL = [
		"http://apis.daum.net/search/blog",
		"http://apis.daum.net/search/cafe",
		"http://apis.daum.net/search/board"];

	var searchTypeIndex = 0;


	var searchQuery = function(){
		var query = $('#query').val();

		var url = _.template(API_URL, {
			apikey : API_KEY,
			query : query,
			pageno : 1
		});

		_log("searchUrl:",url);


		return false;
	};



	$('.search-form').on("submit", searchQuery);


});