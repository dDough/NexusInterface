/** Collection of Javascript Functions to keep track of all
	Registered Resources in Use for Interface.
	
	This includes Systems, Modules, Scripts, and Stylesheets
	
**/

/** Declare the Namespace for the AJAX Functions. **/
var REGISTRY = REGISTRY || {};

/** Declare the Namespace for Registration Functions. **/
REGISTRY.REGISTER   = REGISTRY.REGISTER   || {};
REGISTRY.UNREGISTER = REGISTRY.UNREGISTER || {};

/** 						
_____________________________________________________________________________________ 

		Systems Registry
_____________________________________________________________________________________ **/

/** Array to keep track of all System Resources. **/
REGISTRY.Systems = REGISTRY.Systems || {};

/** Registration Function to register a System. **/
REGISTRY.REGISTER.System = function(ID, Label) { 
	REGISTRY.Systems[ID] = {};
	
	REGISTRY.Systems[ID].Label = Label;
	REGISTRY.Systems[ID].Modules = {};
};

/** Registration Function to register a Module to a System. 
	Module Registrations Contain Database Foreign Key for System,
	Primary Record key for Module, Filepath, Navigation Label, Meta **/
REGISTRY.REGISTER.Module = function(System, ID, Location, Label, Scripts, Stylesheets ) {
		
	if(Scripts === undefined)
		Scripts = '';
		
	if(Stylesheets == undefined)
		Stylesheets = '';
		
	REGISTRY.Systems[System].Modules[ID] = { Location, Label, Scripts, Stylesheets };
};


/** 						
_____________________________________________________________________________________ 

		Themes Registry
_____________________________________________________________________________________ **/

/** Registration Function to register Theme Colors from Database. **/
REGISTRY.REGISTER.Theme = function(Color) { 
	
};


