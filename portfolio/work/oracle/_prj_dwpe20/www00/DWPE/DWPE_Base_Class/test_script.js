 var test_class;
	 
 $(document).ready(function() 
 	{
	   	
		
		
		
	 });


function runTestScript()
{
	test_class=new DWPE_Base_Class();
	test_class.parent=$("#preview");
	test_class.render();
	
	test_class.publicMethod();
	try{
		alert("attempting to call private method from outside")
		test_class.privateMethod();
 		}
	catch(e)
		{	alert("private method can't be called outside its class");	}
	
	alert("about to test label update");
	test_class.label="Label update succeeded";
	test_class.render();
}