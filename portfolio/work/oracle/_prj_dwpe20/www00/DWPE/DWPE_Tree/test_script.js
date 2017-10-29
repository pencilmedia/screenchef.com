var test_class;

$(runTestScript);

function runTestScript() {
	var $preview = $("#preview").css('height','300');
  
	performanceTests = [1,2,3,4,5,6,7,8,9,10];
	
	var myItem;

	var $tree = $("#test-tree")
	
	$tree.data("default-object", DWPE_TreeFactory.getDefaultArgsListForType("tree-item"));
	$tree.data("properties-sheet-template",	DWPE_TreeFactory.getPropertySheetFields('tree-item'));

	$tree.data("manage-form-state", function() {
	    if($('#test-tree').data('selected').find('li').length) {
	        $('#icon-row').hide();
	    } else {
	        $('#icon-row').show();
	    }
	});
		
	var data = [
        {label: 'Root', items: [
            {label: 'First child', icon:'file', status:'warning'}, 
            {label: 'Second child', items: [
                {label: 'First grandchild', icon:'file'}, 
                {label: 'Second grandchild', state: 'closed', status:'warning', items: [
                    {label: 'First great-grandchild', icon:'file'},
                    {label: 'Second great-grandchild', icon:'file'},
                    {label: 'Third great-grandchild', icon:'file'}
                ]}, 
                {label: 'Third grandchild', icon:'file'},
                {label: 'Fourth grandchild', icon:'file'}
            ]}, 
            {label: 'Third child', icon:'file'},
            {label: 'Fourth child', items: [
                {label: 'Fifth grandchild', icon:'file'}
            ]},
            {label: 'Fifth child', icon:'file'},
            {label: 'Sixth child', items: [
                {label: 'Sixth grandchild', icon:'file'}
            ]},
            {label: 'Seventh child', items: [
                {label: 'Seventh grandchild', icon:'file'}
            ]}
        ]}
    ];
	
	
	$tree.data('tree-data',data);
	
	makeEditableTree( $("#test-tree") );
		
	insert();	
	commitProperties();
}