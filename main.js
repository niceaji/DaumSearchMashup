(function($, app){

	var searchTypeIndex = 0;

	// var callbackData = function(data){

	// 	console.log("data:",data);
	// };

	var main = function(){

		this.addEvent();
		this.page = 1;

		this.daumSearcher = new app.DaumSearcher( );
	};
	main.prototype = {
		

		addEvent : function(){

			$('.search-form').on("submit", this.searchQuery.bind(this) );
		},


		searchQuery : function(){


			if(event.type==="submit"){
				this.page = 1;
			}


			var query = $('#query').val();

			this.daumSearcher.call(query, this.page, this.searchQueryPrint.bind(this) );

			return false;
			
		},
		searchQueryPrint : function(data){


			var appendFunc = (this.page===1) ? "html":"append";

			$('.list .box')[appendFunc](  _.template($('#listTemplate').html() ,
					 {list:data.channel.item}) );

			//TODO. 더보기 갯수가 있을경우
			if(this.page === 1){
				
				$('button.more').on("click", this.searchQuery.bind(this) ).show();

			}

			this.page++;
		}



	};




	window.app = new main();

})(jQuery,dsm);