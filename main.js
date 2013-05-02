(function($, app){

	var searchTypeIndex = 0;

	// var callbackData = function(data){

	// 	console.log("data:",data);
	// };



	var main = function(){


		this.addEvent();


	};
	main.prototype = {
		

		addEvent : function(){

			$('.search-form').on("submit", this.searchQuery);
		},


		searchQuery : function(){

			var daumSearcher = new app.DaumSearcher( );
			daumSearcher.call( $('#query').val() , function(data){


				$('.list .box').html(  _.template($('#listTemplate').html() , data) );
			});
		}


	};




	window.app = new main();

})(jQuery,dsm);