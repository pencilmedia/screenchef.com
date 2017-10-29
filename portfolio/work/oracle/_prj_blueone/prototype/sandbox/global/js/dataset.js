agile.ux.dataset =
{
	/////////////////////////////////////////////////////////////////////
	//	INIT
	/////////////////////////////////////////////////////////////////////
	init: function(){},
	countries: function()
	{
		var ds = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia-Herzegovina","Botswana","Brazil","Bulgaria","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Chad","Chile","China","Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Lao","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Morocco","Mozambique","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russian Federation","Rwanda","Samoa","San Marino","Saudi Arabia","Senegal","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","Virgin Islands (British)","Virgin Islands (U.S.)","Yemen","Yugoslavia"];
		return ds;	
	},
	usStates: function()
	{
		var ds = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland",				  "Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
		return ds;
	},
	caStates: function()
	{
		var ds = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Nova Scotia", "Ontario", "Quebec", "Saskatchewan"];
		return ds;
	},
	mxStates: function()
	{
		var ds = ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"];
		return ds;
	},
	multiSelectSearch: function()
	{
		var ds = {"states" : 
						[ 
						  {"COL0" : "Alabama", "COL1" : "Alabama is a wonderful state!"}, 
                          {"COL0" : "Alaska", "COL1" : "Alaska"}, 
                          {"COL0" : "Arizona", "COL1" : "Arizona"}, 
                   		  {"COL0" : "Arkansas", "COL1" : "Arkansas"}, 
                   		  {"COL0" : "California", "COL1" : "California"}, 
                          {"COL0" : "Colorado", "COL1" : "Colorado"}, 
                          {"COL0" : "Connecticut", "COL1" : "Connecticut"}, 
                          {"COL0" : "Delaware", "COL1" : "Delaware"}, 
                          {"COL0" : "Florida", "COL1" : "Florida"}, 
                          {"COL0" : "Georgia", "COL1" : "Georgia"}, 
                          {"COL0" : "Hawaii", "COL1" : "Hawaii"}, 
                          {"COL0" : "Idaho", "COL1" : "Idaho "}, 
                          {"COL0" : "Illinois", "COL1" : "Illinois"}, 
                          {"COL0" : "Indiana", "COL1" : "Indiana"}, 
                          {"COL0" : "Iowa", "COL1" : "Iowa"}, 
                          {"COL0" : "Kansas", "COL1" : "Kansas"}, 
                          {"COL0" : "Kentucky", "COL1" : "Kentucky"}, 
                          {"COL0" : "Louisiana", "COL1" : "Louisiana"}, 
                          {"COL0" : "Maine", "COL1" : "Maine"},
						  {"COL0" : "Maryland", "COL1" : "Maryland"},
						  {"COL0" : "Massachusetts", "COL1" : "Massachusetts"},
						  {"COL0" : "Michigan", "COL1" : "Michigan"},
						  {"COL0" : "Minnesota", "COL1" : "Minesota"},
						  {"COL0" : "Mississippi", "COL1" : "Mississippi"},
						  {"COL0" : "Montana", "COL1" : "Montana"},
						  {"COL0" : "Nebraska", "COL1" : "Nebraska"},
						  {"COL0" : "Nevada", "COL1" : "Nevada"},
						  {"COL0" : "New Hampshire", "COL1" : "New Hampshire"}
						], 
                	   "_COLUMN_HEADERS":[
							{key:"COL0", text:"Name", sortable:false, resizeable:false }, 
                            {key:"COL1", text:"Description", sortable:false, resizeable:false }
						], 
                   		"_SCHEMA" : {fields: ["COL0", "COL1"]}
              	};
	   return ds;
	},
	///////////////////////////////////////////////////////
	//	MULTI USER SEARCH
	///////////////////////////////////////////////////////	
	multiUserSearch: function()
	{
		var ds = {"states" : 
						[ 
                   		  {"COL0":"John", "COL1":"Doe","COL2":"mLiegig1","COL3":"Americas: San Jose"}, 
                   		  {"COL0":"Mike", "COL1":"Smith","COL2":"mLiegig2","COL3":"APAC: Hong Kong"},
                   		  {"COL0":"Juan", "COL1":"Marquez","COL2":"mLiegig3","COL3":"APAC: Hong Kong"}, 
                   		  {"COL0":"Carlos", "COL1":"Marquez","COL2":"mLiegig4","COL3":"APAC: Hong Kong"}, 
                   		  {"COL0":"Steven", "COL1":"Brown","COL2":"mLiegig5","COL3":"Americas: San Jose"}, 
                   		  {"COL0":"David", "COL1":"Green","COL2":"mLiegig6","COL3":"Americas: San Jose"}, 
                   		  {"COL0":"Edeward", "COL1":"Norton","COL2":"mLiegig7","COL3":"Americas: San Jose"}, 
                   		  {"COL0":"Nancy", "COL1":"Harkin","COL2":"mLiegig8","COL3":"Americas: San Jose"}, 
                   		  {"COL0":"Danny", "COL1":"Rodgers","COL2":"mLiegig9","COL3":"Americas: San Jose"}, 
                   		  {"COL0":"Greg", "COL1":"Ponnaru","COL2":"mLiegig10","COL3":"EMEA: London"}, 
                   		  {"COL0":"Jay", "COL1":"Liebig","COL2":"mLiegig11","COL3":"EMEA: London"}, 
                   		  {"COL0":"Maciano", "COL1":"Harkin","COL2":"mLiegig12","COL3":"EMEA: London"}, 
                   		  {"COL0":"Sophia", "COL1":"Liberman","COL2":"mLiegig13","COL3":"EMEA: Paris"}, 
                   		  {"COL0":"Evelyn", "COL1":"Barrington","COL2":"mLiegig14","COL3":"EMEA: Dubai"},
                   		  {"COL0":"Noreen", "COL1":"Lopez","COL2":"mLiegig15","COL3":"EMEA: Dubai"}
						], 
                	   "_COLUMN_HEADERS":[
							{key:"COL0", text:"First", sortable:false, resizeable:false }, 
                            {key:"COL1", text:"Last Name", sortable:false, resizeable:false },
                            {key:"COL2", text:"Email ID", sortable:false, resizeable:false },
                            {key:"COL3", text:"Region", sortable:false, resizeable:false }
						], 
                   		"_SCHEMA" : {fields: ["COL0", "COL1", "COL2", "COL3"]}
              	};
	   return ds;
	},
	searchMenu: function()
	{
		var ds = 
		[
	
			[
				{ text: "Items", url: "", submenu: { id: "createSubmenu01", itemdata: [ 
	
					{ text: "Documents", url: "" },
					{ text: "Parts", url: "" }
	
					] } },
				{ text: "Changes", url: "", submenu: { id: "createSubmenu02", itemdata: [ 
	
						[
							{ text: "Change Orders", url: "" },
							{ text: "Change Requests", url: "" },
							{ text: "Manufacturer Orders", url: "" },
							{ text: "Site Change Orders", url: "" }
						],
						[
							{ text: "Deviations", url: "" },
							{ text: "Stop Ships", url: "" },
							{ text: "Price Change Orders", url: "" }
						]
	
					] } },
				{ text: "Manufacturers", url: "" },
				{ text: "Manufacturer Parts", url: "" },
				{ text: "Part Groups", url: "" }
			],
			
			[
				{ text: "Product Service Requests", url: "", submenu: { id: "createSubmenu03", itemdata: [ 
	
					{ text: "Problem Reports", url: "" },
					{ text: "Non-conformance Reports", url: "" }
	
				] } },
				{ text: "Quality Change Requests", url: "", submenu: { id: "createSubmenu04", itemdata: [ 
	
					{ text: "Audits", url: "" },
					{ text: "Corrective and Preventative Actions", url: "" }
	
				] } },
				{ text: "Customers", url: "" }
			],
			
			[
				{ text: "Programs", url: "", submenu: { id: "createSubmenu05", itemdata: [ 
	
					{ text: "New", url: "" },
					{ text: "From Template", url: "" }
	
				] } }
			],
			
			[
				{ text: "Sourcing Projects", url: "" },
				{ text: "Prices", url: "", submenu: { id: "createSubmenu06", itemdata: [ 
	
					{ text: "Published Prices", url: "" },
					{ text: "Quote Histories", url: "" }
	
				] } },
				{ text: "Suppliers", url: "" }
			],
			
			[
				{ text: "File Folders", url: "" },
				{ text: "Sites", url: "" },
				{ text: "Discussions", url: "" },
				{ text: "Reports", url: "", submenu: { id: "createSubmenu07", itemdata: [ 
	
					{ text: "External Reports", url: "" },
					{ text: "Custom Reports", url: "" }
	
				] } }
			],
			
			[
				{ text: "Packages", url: "" },
				{ text: "Transfer Orders", url: "" }
			],
			
			[
				{ text: "Substances", url: "", submenu: { id: "createSubmenu08", itemdata: [ 
	
					{ text: "Substances", url: "" },
					{ text: "Subparts", url: "" },
					{ text: "Materials", url: "" },
					{ text: "Substance Groups", url: "" }
	
				] } },
				{ text: "Declarations", url: "", submenu: { id: "createSubmenu09", itemdata: [ 
	
					{ text: "Substance Declarations", url: "" },
					{ text: "Homogeneous Material Declarations", url: "" },
					{ text: "JGPSSI Declarations", url: "" },
					{ text: "Supplier Declarations of Conformance", url: "" },
					{ text: "IPC 1752-1 Declarations", url: "" },
					{ text: "IPC 1752-2 Declarations", url: "" }
	
				] } },
				{ text: "Specifications", url: "" }
			]
	
		];
		return ds;
	},
	multiSelectCascadeList: function()
	{
		var ds = [
			{'id': 0, 'title': 'Continents', 'children': 
				[
					{'id': 100, 'title': 'North America', 'toolTip': 'North America', 'children':
						[
							{'id': 110, 'title': 'United States', 'toolTip': 'North America | United States', 'children': 
								[
									{'id': 111, 'title': 'Alabama', 'toolTip': 'North America | United States | Alabama'},
									{'id': 112, 'title': "Alaska", 'toolTip': 'North America | United States | Alaska'},
									{'id': 113, 'title': "Arizona", 'toolTip': 'North America | United States | Arizona'},
									{'id': 114, 'title': "Arkansas", 'toolTip': 'North America | United States | Arkansas'},
									{'id': 115, 'title': "California", 'toolTip': 'North America | United States | California'}
								]
							},
							{'id': 120, 'title': 'Canada', 'toolTip': 'North America | Canada', 'children': 
								[
									{'id': 121, 'title': 'Alberta', 'toolTip': 'North America | Canada | Alberta'},
									{'id': 122, 'title': "British Columbia", 'toolTip': 'North America | Canada | British Columbia'},
									{'id': 123, 'title': "Manitoba", 'toolTip': 'North America | Canada | Manitoba'},
									{'id': 124, 'title': "New Brunswick", 'toolTip': 'North America | Canada | New Brunswick'},
									{'id': 125, 'title': "Nova Scotia", 'toolTip': 'North America | Canada | Nova Scotia'}
								]
							},
							{'id': 130, 'title': 'Mexico', 'toolTip': 'North America | Mexico', 'children': 
								[
									{'id': 131, 'title': 'Aguascalientes', 'toolTip': 'North America | Mexico | Aguascalientes'},
									{'id': 132, 'title': "Baja California", 'toolTip': 'North America | Mexico | Baja California'},
									{'id': 133, 'title': "Baja California Sur", 'toolTip': 'North America | Mexico | Baja California Sur'},
									{'id': 134, 'title': "Campeche", 'toolTip': 'North America | Mexico | Campeche'},
									{'id': 135, 'title': "Chiapas", 'toolTip': 'North America | Mexico | Chiapas'}
								]
							}
						]
					},
					{'id': 200, 'title': 'South America', 'toolTip': 'South America', 'children':
						[
							{'id': 210, 'title': 'Peru', 'toolTip': 'South America | Peru', 'children': 
								[
									{'id': 211, 'title': 'Amazonas', 'toolTip': 'South America | Peru | Amazonas'},
									{'id': 212, 'title': "Ancash", 'toolTip': 'South America | Peru | Ancash'},
									{'id': 213, 'title': "Apurimac", 'toolTip': 'South America | Peru | Apurimac'},
									{'id': 214, 'title': "Arequipa", 'toolTip': 'South America | Peru | Arequipa'},
									{'id': 215, 'title': "Ayacucho", 'toolTip': 'South America | Peru | Ayacucho'}
								]
							},
							{'id': 220, 'title': 'Colombia', 'toolTip': 'South America | Colombia', 'children': 
								[
									{'id': 221, 'title': 'Amazonas', 'toolTip': 'South America | Colombia | Amazonas'},
									{'id': 222, 'title': "Antioquia", 'toolTip': 'South America | Colombia | Antioquia'},
									{'id': 223, 'title': "Aruaca", 'toolTip': 'South America | Colombia | Aruaca'},
									{'id': 224, 'title': "Atlantico", 'toolTip': 'South America | Colombia | Atlantico'},
									{'id': 225, 'title': "Bolivar", 'toolTip': 'South America | Colombia | Bolivar'}
								]
							},
							{'id': 230, 'title': 'Brasil', 'toolTip': 'South America | Brasil', 'children': 
								[
									{'id': 231, 'title': 'Amazonas', 'toolTip': 'South America | Brasil | Amazonas'},
									{'id': 232, 'title': "Acre", 'toolTip': 'South America | Brasil | Acre'},
									{'id': 233, 'title': "Para", 'toolTip': 'South America | Brasil | Para'},
									{'id': 234, 'title': "Bahia", 'toolTip': 'South America | Brasil | Bahia'},
									{'id': 235, 'title': "Tocantins", 'toolTip': 'South America | Brasil | Tocantins'}
								]
							}
						]
					},
				]
			}
		];
		return ds;
	}, 
	multiUserGroups: function()
	{
		var ds = [
			{'id': 0, 'expanded' : true, 'title': 'User Groups', 'children': 
				[
					{'id': 100, 'title': 'Development Team', 'toolTip': 'Development Team', 'children':
						[
							{'id': 105, 'title': 'Bob Smith', 'toolTip': 'Development Team'},
							{'id': 110, 'title': 'Jack Bauer', 'toolTip': 'Development Team'},
							{'id': 115, 'title': 'John Doe', 'toolTip': 'Development Team'}
						]
					},
					{'id': 200, 'title': 'Eng', 'toolTip': 'Eng : Engineering', 'children':
						[
							{'id': 305, 'title': 'Michael Myers', 'toolTip': 'Eng : Engineering'},
							{'id': 310, 'title': 'Mike Peters', 'toolTip': 'Eng : Engineering'},
							{'id': 315, 'title': 'Tom P. Smith', 'toolTip': 'Eng : Engineering'}
						]
					},
					{'id': 300, 'title': 'QA', 'toolTip': 'QA : Quality Assurance Team', 'children':
						[
							{'id': 205, 'title': 'Mary Sue Myers', 'toolTip': 'QA : Quality Assurance Team'},
							{'id': 210, 'title': 'Wayne Palmer', 'toolTip': 'QA : Quality Assurance Team'},
							{'id': 215, 'title': 'Yao Chen', 'toolTip': 'QA : Quality Assurance Team'}
						]
					}
				]
			}
		];
		return ds;
	}
}