sap.ui.jsview("demosplitapp.DetailView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf demosplitapp.DetailView
	*/ 
	getControllerName : function() {
		return "demosplitapp.DetailView";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf demosplitapp.DetailView
	*/ 
	createContent : function(oController) {
		
		var opage = new sap.m.page({title : "Products Page"});
 		
/*		var oTable = new sap.m.Table("idPrdList", {		
			inset : true,
			headerText : "List of Products",
			headerDesign : sap.m.ListHeaderDesign.Standard, 
			mode : sap.m.ListMode.None, 		
			includeItemInSelection : false, 		
			});

	// Table Column Headers		
	var col1 = new sap.m.Column("col1",{header: new sap.m.Label({text:"Product ID"})});
	oTable.addColumn(col1); 
			
	var col2 = new sap.m.Column("col2",{header: new sap.m.Label({text:"Description"})});
	oTable.addColumn(col2); 
			
	var col3 = new sap.m.Column("col3",{header: new sap.m.Label({text:"Price"})});
	oTable.addColumn(col3);
		
	// Table Column Items
	var colItems = new sap.m.ColumnListItem("colItems",{type:"Active"});
			
	var txtNAME = new sap.m.Text("txtNAME",{text:"{ProductID}"});
	colItems.addCell(txtNAME); 
			
	var txtNAME2 = new sap.m.Text("txtNAME2",{text:"{ProductName}"});
	colItems.addCell(txtNAME2); 
			
	var txtNAME3 = new sap.m.Text("txtNAME3",{text:"{UnitPrice}"});
	colItems.addCell(txtNAME3); 

	//oTable.bindAggregation("items","/value",colItems);

    opage.addContent(oTable);		
	*/	
		return opage;
			
	}

});