//var apiUtils = require('*/cartridge/scripts/apiUtils.js');
//var apiImplementation = require('*/cartridge/scripts/apis/myCustomApi.js');
//
///**
// * This SCAPI CUSTOM API endpoint is used to lookup customer groups
// *
// * It provides a SCAPI Custom API equivalent to the Custom Object API customerGroups in
// * this cartridge .
// */
//exports.myCustomApi = function () {
//	try {
//        apiUtils.createResponse(200, { info: apiImplementation.get() });
//    } catch (e) {
//        apiUtils.createError(e.httpCode || 500, {
//            title: e.name || 'Server error',
//            type: 'https://custom.api.commercecloud.salesforce.com/documentation/error/v1/custom/product-extend/server-error',
//            detail: e.message
//        });
//    }
//};
//
//exports.myCustomApi.public = true;

exports.myCustomApi = function () {
	  var info = {
			    tier: "silver",
			    points: 14275
			  };

			  response.setContentType("application/json");
			  response.getWriter().println(JSON.stringify(info));
};

exports.myCustomApi.public = true;
