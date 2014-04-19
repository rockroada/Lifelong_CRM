function SameAsStreetAddress() {
var streetAddress = Xrm.Page.getAttribute("address1_line1").getValue();
var apartmentNumber = Xrm.Page.getAttribute("address1_line2").getValue();
var city = Xrm.Page.getAttribute("address1_city").getValue();
var state = Xrm.Page.getAttribute("llaa_address1_state").getValue();
var zip = Xrm.Page.getAttribute("address1_postalcode").getValue();

if (Xrm.Page.getAttribute("ll_mailingaddresssameasstreetaddress").getValue() == 100000000) {
Xrm.Page.getAttribute("address2_line1").setSubmitMode("always");
Xrm.Page.getAttribute("address2_line2").setSubmitMode("always");
Xrm.Page.getAttribute("address2_city").setSubmitMode("always");
Xrm.Page.getAttribute("llaa_address2_state").setSubmitMode("always");
Xrm.Page.getAttribute("address2_postalcode").setSubmitMode("always");

Xrm.Page.getAttribute("address2_line1").setValue(streetAddress);
Xrm.Page.getAttribute("address2_line2").setValue(apartmentNumber);
Xrm.Page.getAttribute("address2_city").setValue(city);
Xrm.Page.getAttribute("llaa_address2_state").setValue(state);
Xrm.Page.getAttribute("address2_postalcode").setValue(zip);

Xrm.Page.getControl("address2_line1").setDisabled(true);
Xrm.Page.getControl("address2_line2").setDisabled(true);
Xrm.Page.getControl("address2_city").setDisabled(true);
Xrm.Page.getControl("llaa_address2_state").setDisabled(true);
Xrm.Page.getControl("address2_postalcode").setDisabled(true);

}
else{
Xrm.Page.getAttribute("address2_line1").setValue(null);
Xrm.Page.getAttribute("address2_line2").setValue(null);
Xrm.Page.getAttribute("address2_city").setValue(null);
Xrm.Page.getAttribute("llaa_address2_state").setValue(null);
Xrm.Page.getAttribute("address2_postalcode").setValue(null);

Xrm.Page.getControl("address2_line1").setDisabled(false);
Xrm.Page.getControl("address2_line2").setDisabled(false);
Xrm.Page.getControl("address2_city").setDisabled(false);
Xrm.Page.getControl("llaa_address2_state").setDisabled(false);
Xrm.Page.getControl("address2_postalcode").setDisabled(false);
}
}