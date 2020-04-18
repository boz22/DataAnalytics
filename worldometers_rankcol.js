$( "tr.total_row_world" ).remove();
$("tr").each( function( index, row ){
	$(row).children("td").each( function(indexCell, cell){
		if( indexCell == 0 ){
			$(cell).find("span").remove();
			$(cell).prepend("<span style='padding-right: 10px; vertical-align: middle'>" + index + "</span>")
		}
	});
});


//Remove columns with headers except the one which shows country
//and the currently sorted one.
$("th").each( function(index, value ){
	if( index != 0 && !$(value).hasClass("sorting_asc") && !$(value).hasClass("sorting_desc") ){
		$(value).remove();
	}
});


$("tr").each( function( index, row ){
	$(row).children("td").each( function(indexCell, cell){
		if( indexCell != 0 && !$(cell).hasClass("sorting_1") ){
			$(cell).remove();
		}
	});
} );
