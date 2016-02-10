sap.ui.jsview("ealabsapp02.Firstpage01", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ealabsapp02.Firstpage01
	*/ 
	getControllerName : function() {
		return "ealabsapp02.Firstpage01";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ealabsapp02.Firstpage01
	*/ 
	createContent : function(oController) {
		
		var opage = new sap.m.Page({title:"Enterprise Automatics Labs"});
		
		opage.addHeaderContent(new sap.m.Button("btn5",{icon:"sap-icon://action"}).attachPress(oController.next)); 
		
//		opage.addContent(new sap.m.Button("btn1",{text :"Next",press :oController.next}));
//		opage.addContent(new sap.m.Text("Txt1",{text : "This is My First Mobile App"}));
		
		 var data = {  
		            records: [  
		                { Name: "Mr.Allen Peterson",Designation : "Chairman"},
		                { Name: "Mrs.Sandy Lyons",Designation : "VP"},
		                { Name: "Mrs.Kelli Castle",Designation : "Admin"},  
		                { Name: "Mr.Raju Pasumarthy",Designation : "Director"},  
		                { Name: "Mr.Daniel Ratna Raju Pasumarthy",Designation : "Managing Director"},
		                { Name: "Mr.Sumit",Designation : "Manager"},
		                { Name: "Mr.Ashish",Designation : "Consultant"}
		                              
		            ]  
		        };  
		
	//	var olist =new sap.m.ListBase("Lst1",{allowMultiSelect: false, visibleItems: 10});
	//	var olist =new sap.m.ListBase("Lst1",{width : "50%",headerText :"List Of Employees In EA LABS"});
		
		var olist = new sap.m.List({insert : false,includeItemSelection : true,width : "40%",
			                        headerText : "List Of Employees In EA LABS",
			                        itemPress :oController.next});
		
		 var itemTemplate = new sap.m.StandardListItem({  
             title : "{Name}",  
             type : sap.m.ListType.Navigation
          //   icon: "sap-icon://accept",  
          //   description: "Test Value",  
          //   iconInset: false  
         });  
		 
		 olist.setModel(new sap.ui.model.json.JSONModel(data));  
		 
		 olist.bindAggregation("items","/records",itemTemplate);  

         opage.addContent(olist);
	
		

		return opage;
		
 	/*	return new sap.m.Page({
			title: "Enterprise Automatics Labs",
			content: [
			
			          new sap.m.Button("btn1",{text : "Click Me",press:oController.next}),
			          new sap.m.Text("Txt1",{text : "This is My First Mobile App"}),
			          
			          var olist =new sap.m.List("Lst1",{allowMultiSelect: true, visibleItems: 10}));
			          
 		       new  sap.m.List("Lst1",{allowMultiSelect: true, visibleItems: 10})

			          var oItem = new sap.m.ListItem("Country1");
			          oItem.setText("Canada");
			          list.addItem(oItem);
                   
			          
			          
			]
		});
         */
	}

});