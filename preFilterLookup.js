function preFilterLookup(fieldName, clientName, fieldDepartment)
{
	Xrm.Page.getControl(fieldName).addPreSearch(function () {
      addLookupFilter(fieldName, clientName, fieldDepartment);
   });
} 

function addLookupFilter(fieldName, clientName, fieldDepartment)
{
	var entityName = Xrm.Page.data.entity.getEntityName();
                     var client = Xrm.Page.getAttribute(clientName).getValue();
                     var department = Xrm.Page.getAttribute(fieldDepartment).getValue();
	
	 
    if (department != null && client != null)  {
	if (entityName == "ll_serviceprovided"){
        fetchXml = "<filter type='and'><condition attribute='ll_department' operator='eq' value='" + department[0].id + "' /><condition attribute='llaa_contactid' operator='eq' value='" + client[0].id + "' /></filter>";           
		Xrm.Page.getControl("ll_hapgoal").addCustomFilter(fetchXml);
     }
	 else if (entityName == "llaa_hapgoal" ) {
        fetchXml = "<filter type='and'><condition attribute='ll_department' operator='eq' value='" + department[0].id + "' /><condition attribute='ll_clientnameid' operator='eq' value='" + client[0].id + "' /></filter>";           
		Xrm.Page.getControl(fieldName).addCustomFilter(fetchXml);
     }
	 }
}