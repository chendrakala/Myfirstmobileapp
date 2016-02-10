sap.ui.jsview("ealabsapp02.Secondpage02", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ealabsapp02.Secondpage02
	*/ 
	getControllerName : function() {
		return "ealabsapp02.Secondpage02";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ealabsapp02.Secondpage02
	*/ 
	createContent : function(oController) {
 		
		var opage = new sap.m.Page({title:"EMPLOYEE DETAILS"});
		opage.addContent(new sap.m.Button("btn2",{text :"Back",press :oController.back}));
		
		
		opage.setShowNavButton(true);
		opage.attachNavButtonPress(oController.back);
		opage.addHeaderContent(new sap.m.Button("btn3",{icon:"sap-icon://action"}));
		
		var oTable = new sap.m.Table("idPrdList", {		
			inset : true,
		//	headerText : {"CatID"},
			headerDesign : sap.m.ListHeaderDesign.Standard, 
			mode : sap.m.ListMode.None, 		
			includeItemInSelection : false, 		
			});
		var col1 = new sap.m.Column("col1",{header: new sap.m.Label({text:"Name"})});
		oTable.addColumn(col1); 
				
		var col2 = new sap.m.Column("col2",{header: new sap.m.Label({text:"Designation"})});
		oTable.addColumn(col2); 

		var colItems = new sap.m.ColumnListItem("colItems",{type:"Active"});
		
		var txtNAME = new sap.m.Text("txtNAME",{text:"chandrakala"});
		colItems.addCell(txtNAME); 
				
		var txtNAME2 = new sap.m.Text("txtNAME2",{text:"consultant"});
		colItems.addCell(txtNAME2);
		
		oTable.bindAggregation("items","/records",colItems);
		
		opage.addContent(oTable);
		
		var oToolBar =new sap.m.Toolbar("Tbr1")
		var oSearchField =new sap.m.SearchField("srcfld1");
		oSearchField.attachSearch(oController.onsearch);
		oToolBar.addContent(oSearchField);
		opage.setSubHeader(oToolBar);
		
		
/*		var ToolBarSpace = new sap.m.ToolbarSpacer();
		var oToolBar1=new sap.m.Toolbar("Tbr2");
		oToolBar1.addContent(ToolBarSpace);
		oToolBar1.addContent(new sap.m.Button("Approve",{text : "Approve",type :"Accept"}));
		oToolBar1.addContent(new sap.m.Button("Reject",{text : "Reject",type :"Reject"}));
		opage.setFooter(oToolBar1);
	*/	
		return opage;
		

		
		/*
		
		return new sap.m.Page({
			title: "EA LABS EMPLOYEES LIST",
			content: [
			
			]
		}); */   
		 
	}

});