/*
	This is sample data. This will become whatever the eventual data
	structure is determined to be, and will come directly from the 
	server in AJAX or whatever
*/
var table1_cfg = {buttons: ["edit"],
				footing:"footing",
				lockedCols:3,
				columns:[
						{sticky:true, type:"icon", editable:false
						},
						{sticky:true, type:"icon", editable:false
						},
						{sticky:true, type:"link", editable:false
						},
						{sticky:true, type:"text", editable:false
						},
						{sticky:false, type:"text", editable:true
						},
						{sticky:false, type:"xhtml", editable:true
						},
						{sticky:false, type:"icon", editable:false
						},
						{sticky:false, type:"link", editable:false
						},
						{sticky:false, type:"date", editable:true
						},
						{sticky:false, type:"text", editable:false
						}
						]
					};

var table1_headings = ["", "", "Name", "Description", "Rev/Ver", "Status", "", "Related to", "Due", ""];
var table1_data = [
	[
	'sundial',
	'document',
	{url:'#',text:'DCO001200',title:'a link'},
	'Marketing Requirements Document for the...',
	'Preliminary',
	'Draft',
	'exclaim_ble',
	{url:'#', text:'Complete Market Requirements', title:'a link'},
	'03/18/2006',
	''
	],                    
[
	'',
	'dbl_doc',
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'Finite Analysis for Kona Project',
	'2',
	'2',
	'exclaim_ble',
	{url:'#',text:'Complete Finite Analysis',title:'a link'},
	'03/20/2006',
	''
	],                    
[
	'',
	'eco',
	{url:'#',text:'DCO001234',title:'a link'},
	'Initial release of Functional Specification Document.  More text to show that more text can be displayed.  How much can you add.',
	'',
	'Here we have some <b><i>XHTML</i></b> content.',
	'exclaim_ble',
	{url:'#',text:'Approve Functional Specification',title:'a link'},
	'04/05/2006',
	''
	] ,                   
[
	'',
	'eco',
	{url:'#',text:'DCO001234',title:'a link'},
	'',
	'','Draft',
	'exclaim_ble',
	{url:'#', text:'',title:'a link'},'04/05/2006','&nbsp;'
	],
[
	'sundial',
	'document',
	{url:'#',text:'Project Kickoff',title:'a link'},
	'Review and approval of original project plan and resource allocations',
	'','',
	'exclaim_ble',
	{url:'#', text:'Definition Complete',title:'a link'},'03/24/2006','&nbsp;'
	],
[	
	'apply',
	'prog',
	{url:'#',text:'Prioritize Market Requirements',title:'a link'},
	'This task is to prioritize all Market Requirements prior to the design phase',
	'','',
	'exclaim_ble',
	{url:'#', text:'Definition Complete',title:'a link'},'04/01/2006','&nbsp;'
	],
[
	'apply',
	'document',
	{url:'#',text:'SP008994',title:'a link'},
	'Sourcing analysis and early sourcing activities for the Kona project.',
	'','&',
	'exclaim_ble',
	{url:'#', text:'Kona Sourcing Analysis',title:'a link'},'05/28/2006',''
	],
[					
	'apply',
	'document',
	{url:'#',text:'Example1',title:'a link'},
	'Another Example',
	'B','Final',
	'exclaim_ble',
	{url:'#', text:'Example Related Task 1',title:'a link'},'06/16/2006',''
	],
[
	'',	'dbl_doc',
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'Finite Analysis for Kona Project','2','2',
	'exclaim_ble',
	{url:'#', text:'Complete Finite Analysis',title:'a link'},	'03/20/2006',''
	],                    
[
	'',	'dbl_doc',
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'Finite Analysis for Kona Project','2','2',
	'exclaim_ble',
	{url:'#', text:'Complete Finite Analysis',title:'a link'},	'03/20/2006',''
	],                    
	[
	'sundial',
	'document',
	{url:'#', text:'D003551', title:'a link'},
	'Marketing Requirements Document for the...',
	'Preliminary',
	'Draft',
	'exclaim_ble',
	{url:'#', text:'Complete Market Requirements', title:'a link'},
	'03/18/2006',
	''
	],                    
[
	'',
	'dbl_doc',
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'Finite Analysis for Kona Project',
	'2',
	'2',
	'exclaim_ble',
	{url:'#',text:'Complete Finite Analysis',title:'a link'},
	'03/20/2006',
	''
	],                    
[	
	'apply',
	'prog',
	{url:'#',text:'Prioritize Market Requirements',title:'a link'},
	'This task is to prioritize all Market Requirements prior to the design phase',
	'&nbsp;','&nbsp;',
	'exclaim_ble',
	{url:'#', text:'Definition Complete',title:'a link'},
	'04/01/2006',
	''
	],
[
	'apply',
	'document',
	{url:'#',text:'SP008994',title:'a link'},
	'Sourcing analysis and early sourcing activities for the Kona project.',
	'&nbsp;','&nbsp;',
	'exclaim_ble',
	{url:'#', text:'Kona Sourcing Analysis',title:'a link'},'05/28/2006',''
	],
[					
	'apply',
	'document',
	{url:'#',text:'Example1',title:'a link'},
	'Another Example',
	'B','Final',
	'exclaim_ble',
	{url:'#', text:'Example Related Task 1',title:'a link'},'06/16/2006',''
	],
[
	'',	'dbl_doc',
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'Finite Analysis for Kona Project','2','2',
	'exclaim_ble',
	{url:'#', text:'Complete Finite Analysis',title:'a link'},	'03/20/2006','&nbsp;'
	],                    
[
	'',	'dbl_doc',
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'Finite Analysis for Kona Project','2','2',
	'exclaim_ble',
	{url:'#', text:'Complete Finite Analysis',title:'a link'},	'03/20/2006','&nbsp;'
	],                    
	[
	'sundial',
	'document',
	{url:'#', text:'D003551', title:'a link'},
	'Marketing Requirements Document for the...',
	'Preliminary',
	'Draft',
	'exclaim_ble',
	{url:'#', text:'Complete Market Requirements', title:'a link'},
	'03/18/2006',
	''
	],                    
[
	'',
	'dbl_doc',
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'Finite Analysis for Kona Project',
	'2',
	'2',
	'exclaim_ble',
	{url:'#',text:'Complete Finite Analysis',title:'a link'},
	'03/20/2006',
	''
	],                    
[
	'',
	'eco',
	{url:'#',text:'DCO001234',title:'a link'},
	'Initial release of Functional Specification Document.  More text to show that more text can be displayed.  How much can you add.',
	'',
	'Draft',
	'exclaim_ble',
	{url:'#',text:'Approve Functional Specification',title:'a link'},
	'04/05/2006',
	''
	],                   
[
	'',
	'eco',
	{url:'#',text:'DCO001234',title:'a link'},
	'',
	'&nbsp;','Draft',
	'exclaim_ble',
	{url:'#', text:'',title:'a link'},'04/05/2006','&nbsp;'
	],
[
	'sundial',
	'document',
	{url:'#',text:'Project Kickoff',title:'a link'},
	'Review and approval of original project plan and resource allocations',
	'&nbsp;','&nbsp;',
	'exclaim_ble',
	{url:'#', text:'Definition Complete',title:'a link'},'03/24/2006','&nbsp;'
	],
[	
	'apply',
	'prog',
	{url:'#',text:'Prioritize Market Requirements',title:'a link'},
	'This task is to prioritize all Market Requirements prior to the design phase',
	'&nbsp;','&nbsp;',
	'exclaim_ble',
	{url:'#', text:'Definition Complete',title:'a link'},'04/01/2006','&nbsp;'
	],
[
	'apply',
	'document',
	{url:'#',text:'SP008994',title:'a link'},
	'Sourcing analysis and early sourcing activities for the Kona project.',
	'&nbsp;','&nbsp;',
	'exclaim_ble',
	{url:'#', text:'Kona Sourcing Analysis',title:'a link'},'05/28/2006','&nbsp;'
	],
[					
	'apply',
	'document',
	{url:'#',text:'Example1',title:'a link'},
	'Another Example',
	'B','Final',
	'exclaim_ble',
	{url:'#', text:'Example Related Task 1',title:'a link'},'06/16/2006','&nbsp;'
	],
[
	'',	'dbl_doc',
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'Finite Analysis for Kona Project','2','2',
	'exclaim_ble',
	{url:'#', text:'Complete Finite Analysis',title:'a link'},	'03/20/2006','&nbsp;'
	],                    
[
	'',	'dbl_doc',
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'Finite Analysis for Kona Project','2','2',
	'exclaim_ble',
	{url:'#', text:'Complete Finite Analysis',title:'a link'},	'03/20/2006','&nbsp;'
	],                    
[
	'sundial',
	'document',
	{url:'#', text:'D003551', title:'a link'},
	'Marketing Requirements Document for the...',
	'Preliminary',
	'Draft',
	'exclaim_ble',
	{url:'#', text:'Complete Market Requirements', title:'a link'},
	'03/18/2006',
	''
	],                    
[
	'',
	'dbl_doc',
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'Finite Analysis for Kona Project',
	'2',
	'2',
	'exclaim_ble',
	{url:'#',text:'Complete Finite Analysis',title:'a link'},
	'03/20/2006',
	''
	]                                
];                    



var table3_cfg = {footing:"a different footing",
					lockedCols:0,
					columns:[
						{sticky:false, type:"link", editable:false
						},
						{sticky:false, type:"text", editable:false
						},
						{sticky:false, type:"date", editable:false
						}
						]
					};
var table3_headings = ["Name","Status","Due"];
var table3_data = [
[
	{url:'#', text:'D003551',title:'a link'},
	'Preliminary','03/18/2006'
	],                    
[
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'2','03/20/2006'
	],                    
[
	{url:'#', text:'DCO001234',title:'a link'},
	'Draft','04/05/2006'
	],                    
[
	{url:'#', text:'DCO001234',title:'a link'},
	'Draft','04/05/2006'
	],
[
	{url:'#', text:'Project Kickoff',title:'a link'},
	'&nbsp;',
	'03/24/2006'
	],
[	
	{url:'#', text:'Prioritize Market Requirements',title:'a link'},
	'&nbsp;','04/01/2006'
	],
[
	{url:'#', text:'SP008994',title:'a link'},
	'&nbsp;','05/28/2006'
	],
[					
	{url:'#', text:'Example1',title:'a link'},
	'Final','06/16/2006'
	],
[
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'2','03/20/2006'
	],                    
[
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'2','03/20/2006'
	],                    
[
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'2','03/20/2006'
	],                    
[
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'2','03/20/2006'
	],                    
[
	[{url:'#',text:'finite_analysis.doc',title:'a link'},
	 {url:'#',text:'supporting_info.xls',title:'a link'}],
	'2','03/20/2006'
	]                 
];                    

		