<div id="Header" class="header" onclick="loadSearchPage(event);">
	<div class="search_header">
		<!--************************************
	        DMS
	    *************************************-->
		<div class="errorbar" id="errorbar">
			<p id="error" class="bgd">&nbsp;</p>
			<p class="text">
				<span class="dms_error_icon">&nbsp;</span>
				<em>1 error was found.</em>
			</p>
		</div>
	
		<!--************************************
	        SEARCH HEADER
	    *************************************-->
	    <div id="search_header" class="header_wrapper">
			<div class="column_one layout">
				<h2>Search Criteria</h2>	
			</div>
		</div>
	</div>
</div>
<div id="PaneContent" class="search_content">
	<!--************************************
        MAIN SEARCH CONTENT
    *************************************-->
	<div id="main_search_content" class="main_search_content">
		<div id="basic_search">
			<!--************************************
				BUTTON BAR
			*************************************-->
			<div class="button_bar">
				<div class="column_one no_width">
					<div class="search_boxes">
						<select name="select_class">
							<option value="Select a class">Select a class</option>
						</select>
						<select name="select_subclass">
							<option value="Select a subclass">Select a subclass</option>
						</select>
					</div>
				</div>
				<div class="column_three">&nbsp;</div>
			</div>
			<div class="search_options">
				<!--************************************
				   EDIT FILTER TABLE
				*************************************-->
				
				<div id="basic_search_table_content" class="basic_search_table_content">
				<div class="basic_search_labels">
					<div class="basic_search_attributes">
						Attribute
					</div>
					<div class="basic_search_operator">
						Operator
					</div>
					<div class="basic_search_value">
						Value
					</div>
				</div>
					<div class="basic_search_options">
						<div class="basic_search_icon">&nbsp;</div>
						<div class="basic_search_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="basic_search_operator">
							<select>&nbsp;</select>
						</div>
						<div class="basic_search_value">
							<select>&nbsp;</select>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
						<div class="button_add">
							<a class="button"><span><em class="add iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
					<div class="basic_search_options">
						<div class="basic_search_icon">
							<span class="error_icon">&nbsp;</span>
						</div>
						<div class="basic_search_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="basic_search_operator">
							<select>
								<option value="That is between">between</option>
							</select>
						</div>
						<div class="basic_search_value between_1">
							<input class="nodrag text addr"/><a class="button"><span><em class="calendar iconic">&nbsp;</em>&nbsp;</span></a>
							<br/>
							<span>Error</span>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
						<div class="button_add">
							<a class="button"><span><em class="add iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
					<div class="basic_search_options">
						<div class="basic_search_icon">&nbsp;</div>
						<div class="basic_search_attributes">&nbsp;</div>
						<div class="basic_search_operator">&nbsp;</div>
						<div class="basic_search_value between_2">
							<input class="nodrag text addr"/><a class="button"><span><em class="calendar iconic">&nbsp;</em>&nbsp;</span></a>
							<br/>
							<span>Error</span>
						</div>
						<div class="button_add">&nbsp;</div>
						<div class="button_remove">&nbsp;</div>
					</div>
					<div class="basic_search_options">
						<div class="basic_search_icon">&nbsp;</div>
						<div class="basic_search_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="basic_search_operator">
							<select>&nbsp;</select>
						</div>
						<div class="basic_search_value">
							<div>
								<input class="text weight" value=""/><select class="weight">&nbsp;</select>
							</div>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
						<div class="button_add">
							<a class="button"><span><em class="add iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
					<div class="basic_search_options">
						<div class="basic_search_icon">&nbsp;</div>
						<div class="basic_search_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="basic_search_operator">
							<select>&nbsp;</select>
						</div>
						<div class="basic_search_value">
							<div>
								<input class="text weight" value=""/><select class="weight">&nbsp;</select>
							</div>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
						<div class="button_add">
							<a class="button"><span><em class="add iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
					<div class="basic_search_options">
						<div class="basic_search_icon">&nbsp;</div>
						<div class="basic_search_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="basic_search_operator">
							<select>&nbsp;</select>
						</div>
						<div class="basic_search_value">
							<div>
								<input class="text weight" value=""/><select class="weight">&nbsp;</select>
							</div>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
						<div class="button_add">
							<a class="button"><span><em class="add iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
                    <div class="search_attachment_option">
                        <label class=""><input class="checkbox" type="checkbox" /> Search attachment text</label>
                    </div>                    
				</div>
			</div>
		</div>
		<div id="advanced_search" style="display: none;">
			<!--************************************
				BUTTON BAR
			*************************************-->
			<div class="button_bar">
				<div class="column_one no_width">
					<div class="search_boxes">
						<select name="select_class">
							<option value="Select a class">Select a class</option>
						</select>
						<select name="select_subclass">
							<option value="Select a subclass">Select a subclass</option>
						</select>
						<select name="select_search_type">
							<option value="Object Search">Object Search</option>
							<option value="Where used, all levels, latest released revision">Where used, all levels, latest released revision</option>
							<option value="Where used, top level, latest released revision">Where used, top level, latest released revision</option>
							<option value="Where used, one level, latest released revision">Where used, one level, latest released revision</option>
							<option value="Where used, one level, all released revisions">Where used, one level, all released revisions</option>
						</select>
					</div>
				</div>
				<div class="column_three">&nbsp;</div>
			</div>
			<div class="search_options">
				<!--************************************
				   EDIT FILTER TABLE
				*************************************-->
				<div id="advanced_search_table_content" class="advanced_search_table_content">
                        <div class="advanced_search_labels">
                            <div class="advanced_search_paren">
                                (
                            </div>
                            <div class="advanced_search_paren_img">
                                &nbsp;
                            </div>
                            <div class="advanced_search_attributes">
                                Attribute
                            </div>
                            <div class="advanced_search_operator">
                                Operator
                            </div>
                            <div class="advanced_search_prompt">
                                Prompt
                            </div>
                            <div class="advanced_search_value">
                                Value
                            </div>
                            <div class="advanced_search_paren_img">
                                &nbsp;
                            </div>
                            <div class="advanced_search_paren">
                                )
                            </div>
                            <div class="advanced_search_join">
                                Join
                            </div>
                        </div>
                        <div class="advanced_search_options">
						<div class="advanced_search_icon">&nbsp;</div>
						<div class="advanced_search_paren"><input type="radio" class="radio" /></div>
						<div class="advanced_search_paren_img">&nbsp;</div>
						<div class="advanced_search_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_operator">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_prompt"><input type="checkbox" class="checkbox" /></div>
						<div class="advanced_search_value">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_paren_img">&nbsp;</div>
						<div class="advanced_search_paren"><input type="radio" class="radio" /></div>
						<div class="advanced_search_join">
							<select>
								<option value="and">and</option>
								<option value="or">or</option>
							</select>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
						<div class="button_add">
							<a class="button"><span><em class="add iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
					<div class="advanced_search_options">
						<div class="advanced_search_icon">
							<span class="error_icon">&nbsp;</span>
						</div>
						<div class="advanced_search_paren"><input type="radio" class="radio" /></div>
						<div class="advanced_search_paren_img">(((((((</div>
						<div class="advanced_search_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_operator">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_prompt"><input type="checkbox" class="checkbox" /></div>
						<div class="advanced_search_value">
							<input class="nodrag text addr"/><a class="button"><span><em class="calendar iconic">&nbsp;</em>&nbsp;</span></a>
							<br/>
							<span>Error</span>
						</div>
						<div class="advanced_search_paren_img">&nbsp;</div>
						<div class="advanced_search_paren"><input type="radio" class="radio" /></div>
						<div class="advanced_search_join">
							<select>
								<option value="and">and</option>
								<option value="or">or</option>
							</select>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
						<div class="button_add">
							<a class="button"><span><em class="add iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
					<div class="advanced_search_options">
						<div class="advanced_search_icon">&nbsp;</div>
						<div class="advanced_search_paren"><input type="radio" class="radio" /></div>
						<div class="advanced_search_paren_img">&nbsp;</div>
						<div class="advanced_search_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_operator">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_prompt"><input type="checkbox" class="checkbox" /></div>
						<div class="advanced_search_value">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_paren_img">&nbsp;</div>
						<div class="advanced_search_paren"><input type="radio" class="radio" /></div>
						<div class="advanced_search_join">
							<select>
								<option value="and">and</option>
								<option value="or">or</option>
							</select>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
						<div class="button_add">
							<a class="button"><span><em class="add iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
					<div class="advanced_search_options">
						<div class="advanced_search_icon">&nbsp;</div>
						<div class="advanced_search_paren"><input type="radio" class="radio" /></div>
						<div class="advanced_search_paren_img">&nbsp;</div>
						<div class="advanced_search_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_operator">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_prompt"><input type="checkbox" class="checkbox" /></div>
						<div class="advanced_search_value">
							<div>
								<input class="text weight" value=""/><select class="weight">&nbsp;</select>
							</div>
						</div>
						<div class="advanced_search_paren_img">&nbsp;</div>
						<div class="advanced_search_paren"><input type="radio" class="radio" /></div>
						<div class="advanced_search_join">
							<select>
								<option value="and">and</option>
								<option value="or">or</option>
							</select>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
						<div class="button_add">
							<a class="button"><span><em class="add iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
					<div class="advanced_search_options">
						<div class="advanced_search_icon">&nbsp;</div>
						<div class="advanced_search_paren"><input type="radio" class="radio" /></div>
						<div class="advanced_search_paren_img">&nbsp;</div>
						<div class="advanced_search_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_operator">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_prompt"><input type="checkbox" class="checkbox" /></div>
						<div class="advanced_search_value">
							<div>
								<input class="text weight" value=""/><select class="weight">&nbsp;</select>
							</div>
						</div>
						<div class="advanced_search_paren_img">)))))))</div>
						<div class="advanced_search_paren"><input type="radio" class="radio" /></div>
						<div class="advanced_search_join">
							<select>
								<option value="and">and</option>
								<option value="or">or</option>
							</select>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
						<div class="button_add">
							<a class="button"><span><em class="add iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
					<div class="advanced_search_options">
						<div class="advanced_search_icon">&nbsp;</div>
						<div class="advanced_search_paren"><input type="radio" class="radio" /></div>
						<div class="advanced_search_paren_img">&nbsp;</div>
						<div class="advanced_search_attributes">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_operator">
							<select>&nbsp;</select>
						</div>
						<div class="advanced_search_prompt"><input type="checkbox" class="checkbox" /></div>
						<div class="advanced_search_value">
							<div>
								<input class="text weight" value=""/><select class="weight">&nbsp;</select>
							</div>
						</div>
						<div class="advanced_search_paren_img">&nbsp;</div>
						<div class="advanced_search_paren"><input type="radio" class="radio" /></div>
						<div class="advanced_search_join">
							<select>
								<option value="and">and</option>
								<option value="or">or</option>
							</select>
						</div>
						<div class="button_remove">
							<a class="button"><span><em class="remove iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
						<div class="button_add">
							<a class="button"><span><em class="add iconic">&nbsp;</em>&nbsp;</span></a>
						</div>
					</div>
                    <div class="search_attachment_option">
                        <label class=""><input class="checkbox" type="checkbox" /> Match case for values</label>
                    </div> 
				</div>
                
                
                
			</div>
		</div>
        <!-- Basic Search Footer Bar -->
		<div id="search_collapse_wrapper_basic" class="search_collapse_wrapper" title="Collapse">
        	<div class="column_one">
            	<p>
					<a href="#" class="button" onclick="displaySearch('advanced');"><span>Advanced</span></a>
                    <span class="btn_divide">&nbsp;</span>
                    <a href="#" class="button" onclick="callFormatResults();"><span>Format</span></a>
                    <a href="#" class="button" id="toggle_format_save_advanced_menu"><span>Save<em class="dropdown combo">&nbsp;</em>&nbsp;</span></a>
                    <a href="#" class="button" id="toggle_group_search_menu"><span>Grouping<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
				</p>
            </div>
            <div id="search_collapse" class="search_collapse column_two" onclick="collapseSearchOptions();">&nbsp;</div>
        	<div class="column_three">
                <p>
                    <a href="#" class="button"><span>Search</span></a>
					<a href="#" class="button"><span>Clear</span></a>
               </p>
            </div>
        </div>
        <!-- Advanced Search Footer Bar -->
        <div id="search_collapse_wrapper_advanced" class="search_collapse_wrapper" title="Collapse" style="display: none;">
                <div class="column_one">
                    <p>
                        <a href="#" class="button" onclick="displaySearch('basic');"><span>Basic</span></a>
                        <span class="btn_divide">&nbsp;</span>
                        <a href="#" class="button" onclick="callFormatResults();"><span>Format</span></a>
                        <a href="#" class="button" id="toggle_format_save_advanced_menu"><span>Save<em class="dropdown combo">&nbsp;</em>&nbsp;</span></a>
                        <a href="#" class="button" id="toggle_group_search_menu"><span>Grouping<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
                    </p>
                </div>
                <div id="search_collapse" class="search_collapse column_two" onclick="collapseSearchOptions();">&nbsp;</div>
                <div class="column_three">
                    <p>
                        <a href="#" class="button"><span>Search</span></a>
                        <a href="#" class="button"><span>Clear</span></a>
                   </p>
                </div>
            </div>        
        </div>
	
    <!--************************************
        RESULTS TABLE
    *************************************-->
	<div id="results_table" class="results_table">
		<div id="search_expand_wrapper" class="search_expand_wrapper" title="Expand" onclick="expandSearchOptions();" style="display: none;">
            <div id="search_expand" class="search_expand" onclick="expandSearchOptions();">&nbsp;</div>
			<span class="search_expand_text">Click to show search controls</span>
        </div>

		 <!--************************************
            VIEW CONTROLS
        *************************************-->
        
        <div class="view_controls">
            <h4>Results: no search executed</h4>
        </div>
	</div>

</div>