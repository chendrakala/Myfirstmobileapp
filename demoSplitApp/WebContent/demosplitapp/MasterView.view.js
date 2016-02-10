sap.ui.jsview("demosplitapp.MasterView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demosplitapp.MasterView
	*/ 
	getControllerName : function() {
		return "demosplitapp.MasterView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demosplitapp.MasterView
	*/ 
	createContent : function(oController) {
		var opage = new sap.m.Page({title:"List Of Products"});
		
		var olist = new sap.m.List("lstId",{includeItemSelection : true,insert :true ,itemPress :oController.next});
		
		var otemplate = new sap.m.StandardListItem("idItems",{title :"{CategoryName}",
			                                                  description :"{Description}",
			                                                  type : sap.m.ListType.Navigation});
		
		olist.bindAggregation("items",{path:"/value",template : otemplate});
		
		opage.addContent(olist);
		
 		return opage;
	}

});