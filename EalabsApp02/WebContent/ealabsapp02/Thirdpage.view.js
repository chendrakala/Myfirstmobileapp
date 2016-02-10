sap.ui.jsview("ealabsapp02.Thirdpage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ealabsapp02.Thirdpage
	*/ 
	getControllerName : function() {
		return "ealabsapp02.Thirdpage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ealabsapp02.Thirdpage
	*/ 
	createContent : function(oController) {
		var opage = new sap.m.Page();
		
		opage.setShowNavButton(true);
		opage.attachNavButtonPress(oController.back);
		opage.addHeaderContent(new sap.m.Button("btn6",{icon:"sap-icon://action"}));
		
		var data = {  
	            records: [  
	                { Name: "Name : Mr.Allen Peterson",Designation : "Chairman"},
	                { Name: "Designation : Chairman"},
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