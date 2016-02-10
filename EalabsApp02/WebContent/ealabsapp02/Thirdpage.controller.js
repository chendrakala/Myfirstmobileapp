sap.ui.controller("ealabsapp02.Thirdpage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ealabsapp02.Thirdpage
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ealabsapp02.Thirdpage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ealabsapp02.Thirdpage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ealabsapp02.Thirdpage
*/
//	onExit: function() {
//
//	}
	back : function(oevent){
		var App= new sap.ui.getCore().byId("idApp");
		App.to("idFirstpage011");

	} 

	
});