(function($, app){

	var DaumSearcher = function(){

	};
	DaumSearcher.prototype={

		call : function(query,page, callback){

			this.callback = callback;

			var url = _.template(app.API_URL, {
				// searchTypeUrl : SEARCH_API_URL[searchTypeIndex],
				searchTypeUrl : app.SEARCH_API_URL[0],
				apikey : app.API_KEY,
				query : query,
				pageno : page
			});


			app._log("searchUrl:",url);

			$.getJSON(url,  this.parse.bind(this) );
			


		},
		parse : function(data){

			console.log("parse:", data);

			this.callback(data);
		}
	};

	dsm.DaumSearcher = DaumSearcher;

})(jQuery, dsm);



