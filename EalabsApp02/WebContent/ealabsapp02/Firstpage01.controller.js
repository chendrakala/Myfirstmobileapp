sap.ui.controller("ealabsapp02.Firstpage01", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ealabsapp02.Firstpage01
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ealabsapp02.Firstpage01
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ealabsapp02.Firstpage01
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ealabsapp02.Firstpage01
*/
//	onExit: function() {
//
//	}
next : function(oevent){

var oItemSelect = oevent.getParameter("listItem");
var Context = oItemSelect.getBindingContext();
var CatID = Context.getProperty("Name");
if(CatID=="Mr.Allen Peterson")
 {
	var App= new sap.ui.getCore().byId("idApp");
	App.to("idPage3");
	alert(CatID);
}
if(CatID=="Mrs.Sandy Lyons")
{
	var App= new sap.ui.getCore().byId("idApp");
	App.to("idPage4");
	alert(CatID);
	
}	


} 
	
	

});