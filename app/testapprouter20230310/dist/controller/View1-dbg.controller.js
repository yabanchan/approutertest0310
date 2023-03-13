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
                var url=this.getOwnerComponent().getManifestObject().resolveUri("/api/hello");
                $.ajax({
                    url:  url,
                    type: 'GET'
                }).done(function(data){
                    console.log(data);
                    console.log(url);
                }).fail(function(){
                    console.log("error");
                    console.log(url);
                })
            },
        });
    });
