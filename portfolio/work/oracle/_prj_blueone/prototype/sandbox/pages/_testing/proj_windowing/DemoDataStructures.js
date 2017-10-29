/*

SELECTED ROW
selected

NORMAL

handle
empty
resize
value
resize
...
resize

REDLINED
handle
col_checked
resize
value <span class="demoStrike" style="color:red; text-decoration:line-through">p02651</span>
resize
...
resize

*/

var mdi_demo_schema_search_results = ['type', 'number', 'attachment', 'manufacturer', 'pending', 'problem', 'description', 'lifecycle_phase', 'rev'];
var mdi_demo_schema_ai             = ['redline', 'attachment', 'manufacturer', 'pending', 'problem', 'number', 'description', 'sites', 'change_function', 'old_rev', 'new_rev', 'lifecycle_phase'];
var mdi_demo_schema_redline        = ['redline', 'number', 'description', 'sites', 'change_function', 'old_rev', 'new_rev', 'lifecycle_phase'];




var mdi_demo_data_redlines = [
	{
		'item_data': {
			'number': 'D00385',
			'description': 'LEGO JEEP ASSEMBLY INSTRUCTIONS',
			'site': null,
			'change_function': null,
			'old_rev': null,
			'new_rev': null,
			'lifecycle_phase': null,
			'redline': false
		},
		'meta_data': {
			'id': 'redline_001',
			'dataset': null
		}
	},
	{
		'item_data': {
			'number': 'D00024',
			'description': 'LEGO JEEP, DERIVED DIGITAL DESIGNER FILES',
			'site': null,
			'change_function': null,
			'old_rev': null,
			'new_rev': null,
			'lifecycle_phase': null,
			'redline': false
		},
		'meta_data': {
			'id': 'redline_002',
			'dataset': null
		}
	},
	{
		'item_data': {
			'number': 'D00025',
			'description': 'LEGO JEEP, NATIVE DIGITAL DESIGNER FILES',
			'site': null,
			'change_function': null,
			'old_rev': null,
			'new_rev': null,
			'lifecycle_phase': null,
			'redline': false
		},
		'meta_data': {
			'id': 'redline_003',
			'dataset': null
		}
	},
	{
		'item_data': {
			'number': 'p02651',
			'description': 'LEGO JEEP, CHASSIS ASSEMBLY',
			'site': null,
			'change_function': null,
			'old_rev': null,
			'new_rev': null,
			'lifecycle_phase': null,
			'redline': false // was true
		},
		'meta_data': {
			'id': 'redline_004',
			'dataset': null
		}
	},
	{
		'item_data': {
			'number': 'p02652',
			'description': 'LEGO JEEP, FRAME ASSEMBLY',
			'site': null,
			'change_function': null,
			'old_rev': null,
			'new_rev': null,
			'lifecycle_phase': null,
			'redline': false
		},
		'meta_data': {
			'id': 'redline_005',
			'dataset': null
		}
	},
	{
		'item_data': {
			'number': 'p02653',
			'description': 'LEGO JEEP, GAS TANK ASSEMBLY',
			'site': null,
			'change_function': null,
			'old_rev': null,
			'new_rev': null,
			'lifecycle_phase': null,
			'redline': false
		},
		'meta_data': {
			'id': 'redline_006',
			'dataset': null
		}
	},
	{
		'item_data': {
			'number': 'p02654',
			'description': 'LEGO JEEP, LIGHTING KIT',
			'site': null,
			'change_function': null,
			'old_rev': null,
			'new_rev': null,
			'lifecycle_phase': null,
			'redline': false
		},
		'meta_data': {
			'id': 'redline_007',
			'dataset': null
		}
	},
	{
		'item_data': {
			'number': 'p02655',
			'description': 'LEGO JEEP, CUSTOMER OPTIONS KIT',
			'site': null,
			'change_function': null,
			'old_rev': null,
			'new_rev': null,
			'lifecycle_phase': null,
			'redline': false
		},
		'meta_data': {
			'id': 'redline_008',
			'dataset': null
		}
	},
	{
		'item_data': {
			'number': 'p02656',
			'description': 'LEGO JEEP, INTERIOR',
			'site': null,
			'change_function': null,
			'old_rev': null,
			'new_rev': null,
			'lifecycle_phase': null,
			'redline': false // was true
		},
		'meta_data': {
			'id': 'redline_009',
			'dataset': null
		}
	},
	{
		'item_data': {
			'number': 'p02657',
			'description': 'LEGO JEEP, STEERING ASSEMBLY',
			'site': null,
			'change_function': null,
			'old_rev': null,
			'new_rev': null,
			'lifecycle_phase': null,
			'redline': false
		},
		'meta_data': {
			'id': 'redline_010',
			'dataset': null
		}
	}
];

var mdi_demo_data_search_results = [
	{
		'item_data': {
			'type': 'bom',
			'number': 'LEGO-JEEP-LJ3',
			'description': 'LEGO-JEEP MODEL L-J3-MASTER PRODUCT RECORD',
			'site': null,
			'change_function': null,
			'old_rev': null,
			'new_rev': null,
			'lifecycle_phase': 'Preliminary',
			'redline': false
		},
		'meta_data': {
			'id': 'result_001',
			'dataset': mdi_demo_data_redlines
		}
	},
	{
		'item_data': {
			'type': 'document',
			'number': 'D00385',
			'description': 'LEGO JEEP ASSEMBLY INSTRUCTIONS',
			'site': null,
			'change_function': null,
			'old_rev': null,
			'new_rev': null,
			'lifecycle_phase': null,
			'redline': false
		},
		'meta_data': {
			'id': 'result_002',
			'dataset': null
		}
	},
	{
		'item_data': {
			'type': 'bom',
			'number': 'D00385',
			'description': 'LEGO JEEP CHASSIS ASSEMBLY',
			'site': null,
			'change_function': null,
			'old_rev': null,
			'new_rev': null,
			'lifecycle_phase': null,
			'redline': false
		},
		'meta_data': {
			'id': 'result_003',
			'dataset': null
		}
	}
];