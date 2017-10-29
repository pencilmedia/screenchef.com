<div id="Header" class="header" onclick="loadSearchPage(event);">
	<div class="search_header">
		<!--************************************
	        DMS
	    *************************************
		<div class="errorbar" id="errorbar">
			<p id="error" class="bgd">&nbsp;</p>
			<p class="text">
				<span class="dms_error_icon">&nbsp;</span>
				<em>1 error was found.</em>
			</p>
		</div>-->
	
		<!--************************************
	        SEARCH HEADER
	    *************************************-->
	   	<div id="search_header" class="header_wrapper" style="display: none;">
			<div class="column_one layout">
				<h2>Search Criteria</h2>	
			</div>
		</div>
	</div>
</div>
<div id="PaneContent" class="search_content" style="overflow-y: hidden;"><!-- ONLY hiding vertical scroll because we do not have div resizing wired up -->
	<!--************************************
        MAIN SEARCH CONTENT
    *************************************-->
	<div id="main_search_content" class="main_search_content" style="display: none;">
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
                        <a class="button"><span><em class="iconic remove">&nbsp;</em>&nbsp;</span></a>
                    </div>
                    <div class="button_add">
                        <a class="button"><span><em class="iconic add">&nbsp;</em>&nbsp;</span></a>
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
                        <input class="nodrag text addr"/><a class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
                        <br/>
                        <span>Error</span>
                    </div>
                    <div class="button_remove">
                        <a class="button"><span><em class="iconic remove">&nbsp;</em>&nbsp;</span></a>
                    </div>
                    <div class="button_add">
                        <a class="button"><span><em class="iconic add">&nbsp;</em>&nbsp;</span></a>
                    </div>
                </div>
                <div class="basic_search_options">
                    <div class="basic_search_icon">&nbsp;</div>
                    <div class="basic_search_attributes">&nbsp;</div>
                    <div class="basic_search_operator">&nbsp;</div>
                    <div class="basic_search_value between_2">
                        <input class="nodrag text addr"/><a class="button"><span><em class="iconic calendar">&nbsp;</em>&nbsp;</span></a>
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
                        <a class="button"><span><em class="iconic remove">&nbsp;</em>&nbsp;</span></a>
                    </div>
                    <div class="button_add">
                        <a class="button"><span><em class="iconic add">&nbsp;</em>&nbsp;</span></a>
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
                        <a class="button"><span><em class="iconic remove">&nbsp;</em>&nbsp;</span></a>
                    </div>
                    <div class="button_add">
                        <a class="button"><span><em class="iconic add">&nbsp;</em>&nbsp;</span></a>
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
                        <a class="button"><span><em class="iconic remove">&nbsp;</em>&nbsp;</span></a>
                    </div>
                    <div class="button_add">
                        <a class="button"><span><em class="iconic add">&nbsp;</em>&nbsp;</span></a>
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
				<div class="column_three">
					<p>
						<a href="#" class="button" onclick="displaySearch('basic');"><span>Basic</span></a>
					</p>
				</div>
			</div>
			<div class="search_options">
				<!--************************************
				   EDIT FILTER TABLE
				*************************************-->
				
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
				<hr />
				<div id="advanced_search_table_content" class="advanced_search_table_content">
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
						<div class="advanced_search_paren_img">(</div>
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
						<div class="advanced_search_paren_img">)</div>
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
		
		<div id="search_collapse_wrapper_basic" class="search_collapse_wrapper" title="Collapse">
        	<div class="column_one">
            	<p>
                	<a href="#" class="button"><span>Advanced</span></a>
                    <span class="btn_divide">&nbsp;</span>
                    <a href="#" class="button"><span>Clear</span></a>
                    <a href="#" class="button" onclick="callFormatResults();"><span>Format</span></a>
                    
				</p>
            </div>
            <div id="search_collapse" class="search_collapse column_two" onclick="collapseSearchOptions();">&nbsp;</div>
        	<div class="column_three">
                <p>
                    <a href="#" class="button"><span>Search</span></a>
					<a href="#" class="button combo" id="toggle_format_save_advanced_menu" onclick="aProp(event);"><span>Save<em class="menu" onclick="emProp(event);">&nbsp;</em>&nbsp;</span></a>
                </p>
            </div>
        </div>
                
	</div>
	
    <!--************************************
        RESULTS TABLE
    *************************************-->
	<div id="results_table" class="results_table">
		<div id="search_expand_wrapper" class="search_expand_wrapper" title="Expand" onclick="expandSearchOptions();">
            <div id="search_expand" class="search_expand" onclick="expandSearchOptions();">&nbsp;</div>
			<span class="search_expand_text">Click to show search controls</span>
        </div>

		 <!--************************************
            VIEW CONTROLS
        *************************************-->
        
        <div class="view_controls">
            <h4>Results: 6 found</h4>
        </div>
        <!--************************************
            TABLE ACTIONS
        *************************************-->
        <div class="table_actions">
            <div class="column_one no_width">
                <p>
                    <a href="#" class="button"><span>Add</span></a>
                    <a href="#" class="button"><span>Delete</span></a>
                    <span class="btn_divide"></span>
                    <a href="#" class="button" id="cmdPrepare"><span>Prepare<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
                    <a href="#" class="button" id="cmdQuote"><span>Quote<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
                    <span class="btn_divide"></span>
                    <a href="#" class="button" id="cmdMore"><span>More Actions<em class="dropdown">&nbsp;</em>&nbsp;</span></a>
                </p>
            </div>
            <div class="column_three">
                <p>
                    <a href="#" id="toggle_list" class="button"><span><em class="iconic toggle_list">&nbsp;</em>&nbsp;</span></a>
                    <a href="#" id="toggle_thumblist" class="button"><span><em class="iconic toggle_thumblist">&nbsp;</em>&nbsp;</span></a>
                    <a href="#" id="toggle_thumbs" class="button"><span><em class="iconic toggle_thumbs">&nbsp;</em>&nbsp;</span></a>
                </p>
            </div>
        </div>
        <div id="thumb_list" class="scrollTableDiv aml" style="height: 140px;">
            <table class="aml" cellpadding="0" cellspacing="0">
                <tr class="header">
                    <td class="handle"></td>
                    <td class="manufacturer_part w15"></td>
                    <td class="w20"></td>
                    <td>Number</td>
                    <td>Description</td>
                    <td>Rev</td>
                    <td>Quantity</td>
                    <td>Target Cost</td>
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td></td>
                    <td class="w20"><span class="level_00"><em class="part">&nbsp;</em></span></td>
                    <td>25-165905-01</td>
                    <td>MAPPING PROC. PROG PLD</td>
                    <td>B</td>
                    <td>0</td>
                    <td>0.906</td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td class="gray_dot"></td>
                    <td class="w20"><span class="level_00"><em class="part">&nbsp;</em></span></td>
                    <td>20-115438</td>
                    <td>TRAN T THY SC141 D</td>
                    <td>A</td>
                    <td>7,000</td>
                    <td>0.282</td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td class="gray_dot"></td>
                    <td class="w20"><span class="level_00"><em class="part">&nbsp;</em></span></td>
                    <td>25-123099</td>
                    <td>TRANS S NFT BSP295</td>
                    <td>A</td>
                    <td>25,000</td>
                    <td>0.26</td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td></td>
                    <td class="w20"><span class="level_00"><em class="part">&nbsp;</em></span></td>
                    <td>BSP295E6327</td>
                    <td></td>
                    <td></td>
                    <td>25,000</td>
                    <td></td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td></td>
                    <td class="w20"><span class="level_00"><em class="part">&nbsp;</em></span></td>
                    <td>BSP295E6327</td>
                    <td></td>
                    <td></td>
                    <td>25,000</td>
                    <td></td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td class="gray_dot"></td>
                    <td class="w20"><span class="level_00"><em class="part">&nbsp;</em></span></td>
                    <td>20-115438</td>
                    <td>TRAN T THY SC141 D</td>
                    <td>A</td>
                    <td>7,000</td>
                    <td>0.282</td>                
                </tr>
            </table>
        </div>
        <div id="thumb_tablelist" class="scrollTableDiv aml" style="height: 458px; display: none;">
            <table class="aml" cellpadding="0" cellspacing="0">
                <tr class="header">
                    <td class="handle"></td>
                    <td class="manufacturer_part w15"></td>
                    <td class="w20"></td>
                    <td>&nbsp;</td>
                    <td>Number</td>
                    <td>Description</td>
                    <td>Rev</td>
                    <td>Quantity</td>
                    <td>Target Cost</td>
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td></td>
                    <td class="w20"><span class="level_00"><em class="part">&nbsp;</em></span></td>
                    <td><a href="#" class="launch_viewer" title="Launch Viewer"><img src="../../../global/images/thumbnail_iMac_75px.png" alt="Thumbnail" /></a></td>
                    <td>25-165905-01</td>
                    <td>MAPPING PROC. PROG PLD</td>
                    <td>B</td>
                    <td>0</td>
                    <td>0.906</td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td class="gray_dot"></td>
                    <td class="w20"><span class="level_00"><em class="part">&nbsp;</em></span></td>
                    <td><img src="../../../global/images/thumbnail_blank_75px.png" alt="Blank Image" /></td>
                    <td>20-115438</td>
                    <td>TRAN T THY SC141 D</td>
                    <td>A</td>
                    <td>7,000</td>
                    <td>0.282</td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td class="gray_dot"></td>
                    <td class="w20"><span class="level_00"><em class="part">&nbsp;</em></span></td>
                    <td><a href="#" class="launch_viewer" title="Launch Viewer"><img src="../../../global/images/thumbnail_iMac_75px.png" alt="Thumbnail" /></a></td>
                    <td>25-123099</td>
                    <td>TRANS S NFT BSP295</td>
                    <td>A</td>
                    <td>25,000</td>
                    <td>0.26</td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td></td>
                    <td class="w20"><span class="level_00"><em class="part">&nbsp;</em></span></td>
                    <td><img src="../../../global/images/thumbnail_blank_75px.png" alt="Blank Image" /></td>
                    <td>BSP295E6327</td>
                    <td></td>
                    <td></td>
                    <td>25,000</td>
                    <td></td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td></td>
                    <td class="w20"><span class="level_00"><em class="part">&nbsp;</em></span></td>
                    <td><a href="#" class="launch_viewer" title="Launch Viewer"><img src="../../../global/images/thumbnail_iMac_75px.png" alt="Thumbnail" /></a></td>
                    <td>BSP295E6327</td>
                    <td></td>
                    <td></td>
                    <td>25,000</td>
                    <td></td>                
                </tr>
                <tr>
                    <td class="handle"></td>
                    <td class="gray_dot"></td>
                    <td class="w20"><span class="level_00"><em class="part">&nbsp;</em></span></td>
                    <td><img src="../../../global/images/thumbnail_blank_75px.png" alt="Blank Image" /></td>
                    <td>20-115438</td>
                    <td>TRAN T THY SC141 D</td>
                    <td>A</td>
                    <td>7,000</td>
                    <td>0.282</td>                
                </tr>
            </table>
        </div>
        <div id="thumb_table" class="table_thumbnails" style="height: 530px; display: none;">
            	<div class="thumbnail">
            		<a href="#" id="thumb1" class="launch_viewer" title="Launch Viewer"><img src="../../../global/images/thumbnail_iMac1.png" alt="Thumbnail" /></a>
                    <p id="thumb1_btn" class="overlay"><a href="#" class="button"><span>Markup</span></a></p>
                    <p class="description">iMac Front View</p>
                </div>
                <div class="thumbnail">
            		<a href="#" id="thumb2" class="launch_viewer" title="Launch Viewer"><img src="../../../global/images/thumbnail_iMac3.png" alt="Thumbnail" /></a>
                    <p id="thumb2_btn" class="overlay"><a href="#" class="button"><span>Markup</span></a></p>
                    <p class="description">iMac Side View</p>
                </div>
            	<div class="thumbnail">
            		<a href="#" id="thumb3" class="launch_viewer" title="Launch Viewer"><img src="../../../global/images/thumbnail_iMac2.png" alt="Thumbnail" /></a>
                    <p id="thumb3_btn" class="overlay"><a href="#" class="button"><span>Markup</span></a></p>
                    <p class="description">iMac 3/4 View</p>
                </div>
            	<div class="thumbnail">
            		<a href="#" id="thumb4" class="launch_viewer" title="Launch Viewer"><img src="../../../global/images/thumbnail_iMac3.png" alt="Thumbnail" /></a>
                    <p id="thumb4_btn" class="overlay"><a href="#" class="button"><span>Markup</span></a></p>
                    <p class="description">iMac Side View</p>
                </div>
            	<div class="thumbnail">
            		<a href="#" id="thumb5" class="launch_viewer" title="Launch Viewer"><img src="../../../global/images/thumbnail_iMac1.png" alt="Thumbnail" /></a>
                    <p id="thumb5_btn" class="overlay"><a href="#" class="button"><span>Markup</span></a></p>
                    <p class="description">iMac Front View</p>
                </div>
            	<div class="thumbnail">
            		<a href="#" id="thumb6" class="launch_viewer" title="Launch Viewer"><img src="../../../global/images/thumbnail_iMac2.png" alt="Thumbnail" /></a>
                    <p id="thumb6_btn" class="overlay"><a href="#" class="button"><span>Markup</span></a></p>
                    <p class="description">iMac Front View</p>
                </div>
        </div>
        <div class="bom_demo_table_filler" id="bomTableFiller"></div>
        
                
        <!--************************************
            TABLE ACTIONS
        *************************************-->
        <!--
        <div class="table_actions">
			<div class="column_one no_width">
				<p>
					<a href="#" class="button"><span>Export</span></a>
					<a href="#" class="button"><span>Print</span></a>
				</p>
			</div>
		</div>
		<div style="height: 100%; clear:both; width: 100%;" class="agile_table">
			<treegrid Data_Url="/pages/_testing/proj_search/results.xml"></treegrid>
		</div>
        -->
        
       
	</div>
</div>
<div id="palette_enclosure"></div>
<!--************************************
   THUMBNAIL PALETTE
*************************************-->
<div id="thumbPalette" class="ux_palette thumbnail_viewer nodrag">
<div id="ux_palette_top" class="ux_palette_top">
    <div id="ux_palette_header" class="ux_palette_header">
        <a id="ux_palette_toggle" class="ux_palette_toggle" href="#"></a>
      <h4 id="ux_palette_title" class="ux_palette_title">Thumbnail Viewer</h4>
        <a id="ux_palette_close" class="ux_palette_close" href="#"><span>close</span></a>
    </div>
  <!-- Optional Top Action Bar
    <div id="ux_palette_top_action_bar" class="ux_palette_top_action_bar">
        <div class="right_column">
            <a href="#" id="cmdBack" class="button"><span><em class="arrow_back">&nbsp;</em>Back</span></a> 
            <a href="#" id="cmdNext" class="button"><span>Next<em class="arrow_next">&nbsp;</em></span></a>
        </div>
        <div class="left_column">&nbsp;</div>
    </div>
    -->
</div>
<div id="ux_palette_main" class="ux_palette_main thumb_content nodrag">
    <div id="thumb_shot" class="lt_column nodrag">
        <img src="../../../global/images/thumbnail_iMac_fullsize1.png" alt="Full Size Photo" />
    	<p class="set"><input type="checkbox" id="default" /><label for="default">Set as default</label></p>
    </div>
    <div class="rt_column nodrag">
        <div id="thumb_tile" class="thumb_tile nodrag">
            <ul class="sortable nodrag">
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac1.png" alt="thumbnail_iMac_fullsize1.png" class="nodrag" /></li>
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac2.png" alt="thumbnail_iMac_fullsize2.png" class="nodrag" /></li>
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac3.png" alt="thumbnail_iMac_fullsize3.png" class="nodrag" /></li>
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac1.png" alt="thumbnail_iMac_fullsize1.png" class="nodrag" /></li>
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac2.png" alt="thumbnail_iMac_fullsize2.png" class="nodrag" /></li>
                <li class="sortableitem nodrag"><img src="../../../global/images/thumbnail_iMac3.png" alt="thumbnail_iMac_fullsize3.png" class="nodrag" /></li>
            </ul>
        </div>  
    </div>
</div>
<div id="ux_palette_bottom" class="ux_palette_bottom nodrag">
    <div id="ux_palette_bottom_action_bar" class="ux_palette_bottom_action_bar nodrag">
        <div class="right_column nodrag">
            <a class="button" href="#" title="Add"><span><em class="iconic add">&nbsp;</em>&nbsp;</span></a>
            <a class="button" href="#" title="Remove"><span><em class="iconic remove">&nbsp;</em>&nbsp;</span></a>
            <a class="button" href="#" title="Replace"><span><em class="iconic replace">&nbsp;</em>&nbsp;</span></a>
            <span class="btn_divide">&nbsp;</span>
            <a class="button" href="#" title="Reload"><span><em class="iconic reload">&nbsp;</em>&nbsp;</span></a>
        </div>
        <div class="left_column nodrag">&nbsp;</div>
    </div>
    <div id="ux_palette_handle" class="ux_palette_handle nodrag">&nbsp;</div>
</div>
</div>
