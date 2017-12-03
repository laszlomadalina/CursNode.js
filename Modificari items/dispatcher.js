{
"items" : {
				"GET" : {
					parameters : [ new UrlParameterInfo("getPrices", "Boolean", false), 
					               new UrlParameterInfo("calculation_version_id", "PositiveInteger", true), 
					               new UrlParameterInfo("id", "PositiveInteger", true)],
					businessObjectType : BusinessObjectTypes.Item,
					businessLogic : [ items.get ],
					privilege : [Privileges.MATERIAL_PRICE_READ, Privileges.ACTIVITY_RATE_READ]
				},
				"PUT" : {
					parameters : [ new UrlParameterInfo("calculate", "Boolean", true), 
								   new UrlParameterInfo("compressedResult", "Boolean", false)],
					businessObjectType : BusinessObjectTypes.Item,
					businessLogic : [ items.update ],
					privilege : [Privileges.CALCULATION_VERSIONS_CREATE_UPDATE]
				},
				"POST" : {
					parameters : [ new UrlParameterInfo("calculate", "Boolean", true), 
									new UrlParameterInfo("mode", "String", true, ServiceParameters.mode.values), 
									new UrlParameterInfo("compressedResult", "Boolean", false)],
					businessObjectType : BusinessObjectTypes.Item,
					businessLogic : [ items.create ],
					privilege : [Privileges.CALCULATION_VERSIONS_CREATE_UPDATE]
				},
				"DELETE" : {
					parameters : [ new UrlParameterInfo("calculate", "Boolean", true) ],
					businessObjectType : BusinessObjectTypes.Item,
					businessLogic : [ items.remove ],
					privilege : [Privileges.CALCULATION_VERSIONS_CREATE_UPDATE]
				}
            }
}