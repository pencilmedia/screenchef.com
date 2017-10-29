var treeData = [
	{'id': 10, 'title': 'Phase 0 - Production xxx xxx xxx xxx xxx xxx xxx', 'status':'complete', 'children': 
		[
			{'id': 1001, 'title': 'Production 1001', 'iconClass': 'task', 'status':'complete', 'children':
				[
					{'id': 100101, 'title': 'Task 1', 'status':'complete'},
					{'id': 100102, 'title': 'Task 2', 'status':'complete'},
					{'id': 100103, 'title': 'Task 3', 'status':'complete'}
				]
			},
			{'id': 1002, 'title': 'Production 1002', 'iconClass': 'task', 'status':'complete', 'children':
				[
					{'id': 100201, 'title': 'Task 1', 'status':'complete'},
					{'id': 100202, 'title': 'Task 2', 'status':'complete'},
					{'id': 100203, 'title': 'Task 3', 'status':'complete'}
				]
			}
		]
	},
	
	{'id': 10, 'title': 'Phase 1 - Planning', 'status':'rejected', 'children': 
		[
			{'id': 1001, 'title': 'Planning 1001', 'iconClass': 'task', 'status':'complete', 'children':
				[
					{'id': 100101, 'title': 'Task 1', 'status':'complete'},
					{'id': 100102, 'title': 'Task 2', 'status':'complete'},
					{'id': 100103, 'title': 'Task 3', 'status':'complete'}
				]
			},
			{'id': 1002, 'title': 'Planning 1002', 'iconClass': 'task', 'status':'pending', 'children':
				[
					{'id': 100201, 'title': 'Task 1', 'status':'complete'},
					{'id': 100202, 'title': 'Task 2', 'status':'onTrack'},
					{'id': 100203, 'title': 'Task 3', 'status':'rejected'}
				]
			}
		]
	},
	
	{'id': 10, 'title': 'Phase 2 - Redesign', 'status':'onTrack', 'children': 
		[
			{'id': 1001, 'title': 'Redesign 1001', 'iconClass': 'task', 'status':'complete', 'children':
				[
					{'id': 100101, 'title': 'Task 1', 'status':'complete'},
					{'id': 100102, 'title': 'Task 2', 'status':'complete'},
					{'id': 100103, 'title': 'Task 3', 'status':'complete'}
				]
			},
			{'id': 1002, 'title': 'Redesign 1002', 'iconClass': 'task', 'status':'pending', 'children':
				[
					{'id': 100201, 'title': 'Task 1', 'status':'complete'},
					{'id': 100202, 'title': 'Task 2', 'status':'onTrack'},
					{'id': 100203, 'title': 'Task 3', 'status':'rejected'}
				]
			}
		]
	},
	
	{'id': 10, 'title': 'Phase 3 - Testing', 'status':'offTrack', 'children': 
		[
			{'id': 1001, 'title': 'Testing 1001', 'iconClass': 'task', 'status':'complete', 'children':
				[
					{'id': 100101, 'title': 'Task 1', 'status':'complete'},
					{'id': 100102, 'title': 'Task 2', 'status':'complete'},
					{'id': 100103, 'title': 'Task 3', 'status':'complete'}
				]
			},
			{'id': 1002, 'title': 'Testing 1002', 'iconClass': 'task', 'status':'pending', 'children':
				[
					{'id': 100201, 'title': 'Task 1', 'status':'complete'},
					{'id': 100202, 'title': 'Task 2', 'status':'onTrack'},
					{'id': 100203, 'title': 'Task 3', 'status':'rejected'}
				]
			}
		]
	},	
];