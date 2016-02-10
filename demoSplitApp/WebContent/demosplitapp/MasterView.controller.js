sap.ui.controller("demosplitapp.MasterView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf demosplitapp.MasterView
*/
	onInit: function() {
	
	var sUrl="http://services.odata.org/Northwind/Northwind.svc/Categories";
	var omodel = new sap.ui.model.json.JSONModel(sUrl);
	sap.ui.getCore().byId("lstId").setModel(omodel);

	},

  next : function(oEvent){
	  
	  var App= new sap.ui.getCore().byId("splitApp");
	  App.to("detail");


/*	// To get the selected Category ID
	var oItemSelect = oEvent.getParameter("listItem");
	var Context = oItemSelect.getBindingContext();
	var CatID = Context.getProperty("CategoryID");
		
	// Get the products for the select Category ID
	var sUrl = "http://services.odata.org/Northwind/Northwind.svc/Categories(" + CatID + ")/Products?$format=json";
	var omodel = new sap.ui.model.json.JSONModel(sUrl);
	sap.ui.getCore().byId("idPrdList").setModel(omodel);
	*/
	alert("U Select An Item");
}	

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf demosplitapp.MasterView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf demosplitapp.MasterView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf demosplitapp.MasterView
*/
//	onExit: function() {
//
//	}

});