sap.ui.jsview("ealabsapp02.Fourthpage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ealabsapp02.Fourthpage
	*/ 
	getControllerName : function() {
		return "ealabsapp02.Fourthpage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ealabsapp02.Fourthpage
	*/ 
	createContent : function(oController) {
        var opage = new sap.m.Page();
		
		opage.setShowNavButton(true);
		opage.attachNavButtonPress(oController.back);
		opage.addHeaderContent(new sap.m.Button("btn7",{icon:"sap-icon://action"}));
		
		var data = {  
	            records: [  
	                { Name: "Name : Mrs.Sandy Lyons"},
	                { Name: "Designation : VP"},
	                { Name: "DOB : "},  
	                { Name: "Address : "},  
	                { Name: "H.Phone Number : "},
	                { Name: "B.Phone Number : "},
	                { Name: "Email : "}
	                              
	            ]  
	        };
		
		var olist = new sap.m.List({insert : false,width : "50%", headerText : "Employee Details"});

        var itemTemplate = new sap.m.StandardListItem({title:"{Name}"});  

        olist.setModel(new sap.ui.model.json.JSONModel(data));  

        olist.bindAggregation("items","/records",itemTemplate);  

        opage.addContent(olist);

		
		return opage;

	}

});