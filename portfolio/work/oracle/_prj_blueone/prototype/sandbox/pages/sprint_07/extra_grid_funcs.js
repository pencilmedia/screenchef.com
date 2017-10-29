////////////////////////////////////////
//
//        TREEGRID API FUNCTIONS
//
////////////////////////////////////////

Grids.OnFocus = function (G, row, col, orow, ocol) {
	if (prev_sel_row != null && prev_sel_col != null){
		prev_sel_col = current_sel_col;
		prev_sel_row = current_sel_row;
	}

	current_sel_row = Grids[0].FRow;
	current_sel_col = Grids[0].FCol;
	current_frame_type = determinePopup(current_sel_col);
	
	if (prev_sel_row == null && prev_sel_col == null){
		prev_sel_col = current_sel_col;
		prev_sel_row = current_sel_row;
	}
	
	if (frame_edit_displayed == true && changedCell() == true) {
		hideEditFrame();
	}
	
	
	//display read frame if no frame displayed on frame type multitext
	if (frame_edit_displayed == false && current_frame_type == "multitext"){
		set_read_frame_timer = setTimeout("setFrame('read');", 2000);
	} else if (frame_read_displayed == true) {
		hideReadFrame();
	}
}

Grids.OnClick = function (G,row,col,x,y){
	
}

Grids.OnDblClick = function (G,row,col,x,y) {
	clearTimeout(timer);
	timer = null;
	doOnDblClick();
}

Grids.OnScroll = function (G, scroll_left, scroll_top) {
	if		(frame_edit_displayed == true){ setFrame("edit"); }
	else if (frame_read_displayed == true){ setFrame("read"); }
}
/*
Grids.OnKeyPress = function (grid, key, evt) {
	if 		(key == 13)										{ detectedEnter(); }
	else if (key == 27 && frame_edit_displayed == true)		{ detectedEsc(); }
}
*/