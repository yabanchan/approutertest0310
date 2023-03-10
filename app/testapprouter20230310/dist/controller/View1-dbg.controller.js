sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("testapprouter20230310.controller.View1", {
            onInit: function () {

            },
            RestControllerTest: function(){
                $.ajax({
                    url:  '/api/hello',
                    type: 'GET'
                }).done(function(date){
                    console.log(date);
                }).fail(function(){
                    console.log("error");
                })
            },
        });
    });
