function Age() {
if(Xrm.Page.getAttribute("llaa_dateofbirth").getValue() != null)
{
var DOB = Xrm.Page.getAttribute("llaa_dateofbirth").getValue();
var Today = new Date();
Today.setHours(0, 0, 0, 0);
var age = 0;
if(DOB >= Today )
{
Xrm.Page.ui.controls.get(llaa_dateofbirth).setNotification("Please enter a valid date of birth")
}
else
{
	if(DOB.getMonth() * 100 + DOB.getDate >= Today.getMonth() * 100 + Today.getDate) {
age = Today.getFullYear() - DOB.getFullYear();
	}
	else {
	age = Today.getFullYear() - DOB.getFullYear() - 1;
	}
}
Xrm.Page.getAttribute("ll_age").setSubmitMode("always");
Xrm.Page.getAttribute("ll_age").setValue(age);
}



