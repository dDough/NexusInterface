/** menu.js

	This Script File contains the Necessary Standard Functions to handle the Dynamic Menu from the Main Console.
	General Format for Namespace in this Framework is all CAPS.

	Created by Colin Cantrell.

**/

/** Declare the Namespace for the MENU Functions. **/
var MENU = MENU || {};

/** Declare the Loaded Menu ID. -1 is flag for all menu's collapsed. **/
MENU.SelectedIndex = -1;

/** 						
_____________________________________________________________________________________ 

		Menu Generate Functions.
_____________________________________________________________________________________ **/

MENU.Generate = function() {
	
	/** Locate the Main Menu DIV Element. **/
	var Menu = document.getElementById('navigation-menu');
	
	/** Iterate by Keys in Reverse Order. **/
	var Keys = {}, Index = {};
	Keys.System = Object.keys(REGISTRY.Systems);
	
	/** Unregister Systems. **/
	var Removal = [];
	
	/** Iterate through the Systems. **/
	for(Index.System = 0; Index.System < Keys.System.length; Index.System ++){
	
		/** Declare the System Index. **/
		var System = Keys.System[Index.System];
		 
		/** Skip System if no Modules Registered. **/
		Keys.Module = Object.keys(REGISTRY.Systems[System].Modules);
		if(Keys.Module.length == 0)
			continue;
	
		/** Generate the Systems Level Button. **/
		var Element = CREATE.Button();
		Element.id = 'system-' + System;
		Element.style.width = '95%';
		Element.innerHTML = REGISTRY.Systems[System].Label;
		
		/** Add the Menu Execution Script. **/
		Element.setAttribute('system-id', System);
		Element.setAttribute('onclick', 'MENU.Show(this.getAttribute("system-id"))');
		
		/** Add the Systems Navigation to the DOM. **/
		Menu.appendChild(Element);
		
		/** Generate the Modules Container. **/
		var SubMenu = document.createElement('div');
		SubMenu.id = 'system-menu-' + System;
		SubMenu.classList.add('resize-transition');
		SubMenu.style.height = '0px';
		SubMenu.style.overflow = 'hidden';
		
        /* Iterate the modules in the registry to generate the sub menu items. */
		for(Index.Module = 0; Index.Module < Keys.Module.length; Index.Module ++){
		
			/** Declare the Module Index. **/
			var Module = Keys.Module[Index.Module];
		
			/** Generate the Module Menu Item. **/
			var Element = CREATE.Button(true);
			Element.id        = 'module-' + Module;
			Element.innerHTML = REGISTRY.Systems[System].Modules[Module].Label;
			
			/** Add the Menu Execution Script. **/
			Element.setAttribute('module-id', Module);
			Element.setAttribute('system-id', System);
			Element.setAttribute('onclick', 'LOAD.Module(this.getAttribute("system-id"), this.getAttribute("module-id"))');
			
			//draggable="true" ondragstart="drag(event)"
			Element.setAttribute("draggable", "true");
			Element.setAttribute("ondragstart", "ACTION.MOVE.Drag(event);");
			
			Element.style.width = '95%'; 
			SubMenu.appendChild(Element);
		}
		
		/** Add the Sub Menu to the Systems Registry. **/
		REGISTRY.Systems[System].SubMenu = SubMenu;
		
		/** Add the Sub Menu to the DOM. **/
		Menu.appendChild(SubMenu);
	}
};

/** 						
_____________________________________________________________________________________ 

		Menu Execute Functions.
_____________________________________________________________________________________ **/

/** Hide the Current Menu by TagID. **/
MENU.Hide = function(ID) {
	/** Size the Sub Menu to 0 pixels from the Registry. **/
	REGISTRY.Systems[ID].SubMenu.style.height = '0px';
};

/** Show the Current Menu by TagID. **/
MENU.Show = function(ID) {

	/** Hide any Previous Menus. **/
	if(MENU.SelectedIndex !== -1) {
		MENU.Hide(MENU.SelectedIndex);
		
		/** Just hide the Menu if Clicked Twice. **/
		if(MENU.SelectedIndex == ID){
			MENU.SelectedIndex = -1;
			return;
		}
	}
	
	/** Change the Menu Height: TODO Register the Required Height by Number of Modules in Menu.
		Each Module Menu Item is 38px **/
	REGISTRY.Systems[ID].SubMenu.style.height = (Object.keys(REGISTRY.Systems[ID].Modules).length * 40) + 'px';
	
	/** Set the Selected Visible Menu Item. **/
	MENU.SelectedIndex = ID;
};

/** Menu Registry Function. Used to Store Menu Data in a Client Side Array. **/
MENU.Register = function(TagID, TotalModules, Dashboard) {
	MENU.Registry[TagID]['modules']   = TotalModules;
	MENU.Registry[TagID]['dashboard'] = Dashboard;
};

