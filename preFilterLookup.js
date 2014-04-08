function preFilterLookup()
{
	Xrm.Page.getControl("ll_hapgoal").addPreSearch(function () {
      addLookupFilter();
   });
} 

function addLookupFilter()
{
    var department = Xrm.Page.getAttribute("ll_department").getValue();
	var client = Xrm.Page.getAttribute("ll_clientnameid").getValue();
	 
    if (department != null && client != null) {
        fetchXml = "<filter type='and'><condition attribute='ll_department' operator='eq' value='" + department[0].id + "' /><condition attribute='llaa_contactid' operator='eq' value='" + client[0].id + "' /></filter>";           
		Xrm.Page.getControl("ll_hapgoal").addCustomFilter(fetchXml);
     }
}
