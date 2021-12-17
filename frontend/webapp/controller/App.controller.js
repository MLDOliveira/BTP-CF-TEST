sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/m/MessageToast'
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, MessageToast) {
		"use strict";

		return Controller.extend("com.inetum.inetumfront.controller.App", {
			onInit: function () {
                var oModel = new JSONModel({"books": []})
                this.getView().setModel(oModel, "oTableModel");
                this.oTableModel = oModel; 
			},

            onAfterRendering: function () {
                const bookList = {
                    "books": []
                }
                this.oTableModel.setData(bookList);
            },

            onPressLoadData: function(){    
                var sPath = this.getOwnerComponent().getManifestObject().resolveUri( "api/books" );

                jQuery.ajax({
					url: sPath,
					method: 'GET',
					dataType: 'json',
					contentType: 'application/json',
					success: function (oData) {
                        console.log(oData);
                        this.oTableModel.setData(oData);
                        MessageToast.show("Data loaded Sucessfully!");
					}.bind(this),
					error: function (error) {
                        console.log(error)
                        MessageToast.show("Error Loading Data, see console log!");
					}.bind(this)
				})
            }
    
		});
	});

