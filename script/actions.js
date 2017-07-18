/** 
	Javascript Functions to Handle Actions in the DOM.
**/

/** Handle the Main Actions Namespace **/
var ACTION = ACTION || {};	

/** Declare the Namespace for the AJAX LOADER Handlers. **/
ACTION.MOVE = ACTION.MOVE || {};

/** Initialize a an object to receive drop. **/
ACTION.MOVE.Allow = function(event) {
	event.preventDefault();
};

/** Set the Target Element Dragging to. **/
ACTION.MOVE.Drag   = function(event) {
	event.dataTransfer.setData("text", event.target.id);
};

/** Drop the Element on Target Element. **/
ACTION.MOVE.Drop   = function(event) {
	event.preventDefault();
	
    var data = event.dataTransfer.getData("text");
	var clone = document.getElementById(data).cloneNode(true);
	event.target.appendChild(clone);
};
