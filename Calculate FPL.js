function CalculateFPL(){
if (Xrm.Page.getAttribute("llaa_monthlytotalincome").getValue() != null && Xrm.Page.getAttribute("llaa_householdsize").getValue() !=null) {
var incomeMonthly = Xrm.Page.getAttribute("llaa_monthlytotalincome").getValue();
var householdSize = Xrm.Page.getAttribute("llaa_householdsize").getValue();
var fpl100 = 11670;
var fpladditional = 4060;

var fpl = (incomeMonthly * 12 ) / (fpl100 - fpladditional + (fpladditional * householdSize)) * 100;
var incomeYearly = incomeMonthly * 12;

Xrm.Page.getAttribute("ll_fpl").setSubmitMode("always");
Xrm.Page.getAttribute("ll_fpl").setValue(fpl);
Xrm.Page.getAttribute("ll_yearlyhouseholdincome").setSubmitMode("always");
Xrm.Page.getAttribute("ll_yearlyhouseholdincome").setValue(incomeYearly);
}
}