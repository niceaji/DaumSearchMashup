(function($, app){

	var DaumSearcher = function(){

	};
	DaumSearcher.prototype={

		call : function(query, callback){

			this.callback = callback;

			var url = _.template(app.API_URL, {
				// searchTypeUrl : SEARCH_API_URL[searchTypeIndex],
				searchTypeUrl : app.SEARCH_API_URL[0],
				apikey : app.API_KEY,
				query : query,
				pageno : 1
			});

			app._log("searchUrl:",url);

			// $.getJSON(url,  callbackData);
			this.parse();
		},
		parse : function(data){
			// 데이터 가져왔다 치고 


			var data = {
				list : [
					{title:"11111",link:"1"},
					{title:"2222",link:"2"},
					{title:"3333",link:"3"}
				]
			};
			debugger;

			this.callback(data);
			
		
		}
	};

	dsm.DaumSearcher = DaumSearcher;

})(jQuery, dsm);



