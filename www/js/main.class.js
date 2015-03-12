var MAIN_OBJ = null;
$(document).ready(function(e) 
{
	MAIN_OBJ = new MAIN();	
});

var MAIN = Class.create();
MAIN.prototype = 
{
	initialize: function() 
	{
		
	},
	load: function()
	{
		navigator.notification.alert("Prototyped message box");
	}
};


