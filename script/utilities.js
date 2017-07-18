/** 
	Collection of Javascript Functions for basic utilities in global Interface.
	Add new Interface Specific Utilities Here. Module Specific Functions go In Module Scripts.
	
**/

/** Declare the Namespace for the AJAX Functions. **/
var UTILITIES = UTILITIES || {};

/** 						
_____________________________________________________________________________________ 
	
	Parser Functions
_____________________________________________________________________________________ **/


/** Declare the Local Parser Namespace. **/
UTILITIES.PARSE = UTILITIES.PARSE || {};

/** Parse the Get Form from a Given URL. **/
UTILITIES.PARSE.Form = function (Address) {
	var result = [];
    Address.substr(Address.indexOf("?") + 1).split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
    });
	
	return result;
};

/** Parse the Get Form from a Given URL. **/
UTILITIES.PARSE.Address = function (Address) {
	if(Address.indexOf("?") == -1)
		return Address;

	return  Address.substr(0, Address.indexOf("?"));
};

/** Parse out Invalid Characters (all but letters and numbers). **/
UTILITIES.PARSE.Invalid = function (Input) {
	return Input.replace(/([^a-z0-9]+)/gi, '');
};

/** Parse out Spaces. (remove all spaces). **/
UTILITIES.PARSE.Spaces = function (Input) {
	return Input.replace(/ /g, "");
};

/** 						
_____________________________________________________________________________________ 

	Time Functions
_____________________________________________________________________________________ **/

UTILITIES.Sleep = function(Duration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + Duration){} 
};


/** 						
_____________________________________________________________________________________ 

	Data Type Functions
_____________________________________________________________________________________ **/

/** Find the First Key in a Given Array Object. **/
UTILITIES.First = function(Object) {
    for (var Key in Object) { return Key; }
}