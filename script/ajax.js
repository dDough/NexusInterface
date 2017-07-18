/** ajax.js

	This source file contains the necessary AJAX functions for dynamically inserting content into the
	Document Object Model (DOM)
	
	TODO Ongoing: Add functions as needed that may see fit.

	Created by Colin Cantrell.
	
**/

/** Declare the Namespace for the AJAX Functions. **/
var AJAX = AJAX || {};

/** 						
_____________________________________________________________________________________ 

		AJAX Functions
_____________________________________________________________________________________ **/

/** Make AJAX Request to Change Element by the Element's ID.
	Uses GET Protocol as Standard. **/
AJAX.ID = function(Address, TagID, Callback) {
	
	/** Object to handle the AJAX Requests. */
	var ResponseObject;
	
	/** Opera 8.0+, Firefox, Safari **/
	try { ResponseObject = new XMLHttpRequest(); } catch (e) {
	
	/** Internet Explorer - All Versions **/
	try { ResponseObject = new ActiveXObject("Msxml2.XMLHTTP");     } catch (e) {
	try { ResponseObject = new ActiveXObject("Microsoft.XMLHTTP");  } catch (e) {
	try { ResponseObject = new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e) {
		return false;
	} } } }
	
	/** Asynchronous event on AJAX Completion. */
	if(Callback == undefined)
		Callback = AJAX.CALLBACK.Standard;
	
	/** Establish the Callback Function. **/
	ResponseObject.onreadystatechange = function() { Callback(ResponseObject, Address, TagID); }
	
	/** Generate the AJAX Request. **/
	ResponseObject.open("GET", Address, true);
	ResponseObject.send();
};

/** Make AJAX Request to Pass data to Another Endpoint.
	Does not update the DOM.
	Uses GET Protocol as Standard. **/
AJAX.BASIC = function(Address, Callback) {
	
	/** Object to handle the AJAX Requests. */
	var ResponseObject;
	
	/** Opera 8.0+, Firefox, Safari **/
	try { ResponseObject = new XMLHttpRequest(); } catch (e) {
	
	/** Internet Explorer - All Versions **/
	try { ResponseObject = new ActiveXObject("Msxml2.XMLHTTP");     } catch (e) {
	try { ResponseObject = new ActiveXObject("Microsoft.XMLHTTP");  } catch (e) {
	try { ResponseObject = new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e) {
		return false;
	} } } }
	
	/** Asynchronous event on AJAX Completion. */
	if(Callback == undefined)
		Callback = AJAX.CALLBACK.Standard;
	
	/** Establish the Callback Function. **/
	ResponseObject.onreadystatechange = function() { Callback(ResponseObject, Address); }
	
	/** Generate the AJAX Request. **/
	ResponseObject.open("GET", Address, true);
	ResponseObject.send();
};


/** Make AJAX Request to Pass data to Another Endpoint.
	Does not update the DOM. Passes Content into the Callback Function.
	Uses GET Protocol as Standard. **/
AJAX.CONTENT = function(Address, Content, Callback) {
	
	/** Object to handle the AJAX Requests. */
	var ResponseObject;
	
	/** Opera 8.0+, Firefox, Safari **/
	try { ResponseObject = new XMLHttpRequest(); } catch (e) {
	
	/** Internet Explorer - All Versions **/
	try { ResponseObject = new ActiveXObject("Msxml2.XMLHTTP");     } catch (e) {
	try { ResponseObject = new ActiveXObject("Microsoft.XMLHTTP");  } catch (e) {
	try { ResponseObject = new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e) {
		return false;
	} } } }
	
	/** Establish the Callback Function. **/
	ResponseObject.onreadystatechange = function() { Callback(ResponseObject, Address, Content); }
	
	/** Generate the AJAX Request. **/
	ResponseObject.open("GET", Address, true);
	ResponseObject.send();
};


/** Make AJAX Request to Pass data to Another Endpoint.
	Does not update the DOM. Passes Content into the Callback Function.
	Uses POST Protocol as Standard. **/
AJAX.POST = function(Address, PostData, TagID, Callback, Content) {
	
	/** Object to handle the AJAX Requests. */
	var ResponseObject;
	
	/** Opera 8.0+, Firefox, Safari **/
	try { ResponseObject = new XMLHttpRequest(); } catch (e) {
	
	/** Internet Explorer - All Versions **/
	try { ResponseObject = new ActiveXObject("Msxml2.XMLHTTP");     } catch (e) {
	try { ResponseObject = new ActiveXObject("Microsoft.XMLHTTP");  } catch (e) {
	try { ResponseObject = new ActiveXObject("Msxml2.XMLHTTP.6.0"); } catch (e) {
		return false;
	} } } }
	
	/** Asynchronous event on AJAX Completion. */
	if(Callback == undefined)
		Callback = AJAX.CALLBACK.Post;
		
	/** Handle the Tag ID being omitted. **/
	if(TagID == undefined)
		TagID = '';
	
	/** Establish the Callback Function. **/
	ResponseObject.onreadystatechange = function() { Callback(ResponseObject, Address, PostData, TagID); }
	
	/** Generate the AJAX Request. **/
	ResponseObject.open("POST", Address, true);
	
	if(Content !== undefined)
		ResponseObject.setRequestHeader("Content-type",Content);
	
	/** Send off the Post Data. **/
	ResponseObject.send(PostData);
};
