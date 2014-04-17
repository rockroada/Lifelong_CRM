function ValidateSSN(context, ssnField)
{
	if( ! IsNull(ssnField)) {
		var ssn = Xrm.Page.getAttribute(ssnField).getValue()
		if (ssn != null) {
			var scrubbed = ssn.toString().replace(/[^0-9]/g, "");
			if (scrubbed.length !=9) {
		       alert("Invalid Social Security Number");
			   var saveEvent = context.getEventArgs();
			   saveEvent.preventDefault();
	}
}
}
}	
function ValidatePhone(context, phoneField)
{
	if( ! IsNull(phoneField)) {
		var phoneNumber = Xrm.Page.getAttribute(phoneField).getValue()
		if (phoneNumber != null) {
			var scrubbed = phoneNumber.toString().replace(/[^0-9]/g, "");
	
			if (scrubbed.length < 10) {
		       alert("Please enter a phone number including area code");
			}
			else if (scrubbed.length > 14) {
		       alert("Phone number is too long. Please enter a valid phone number");
			   }
		var saveEvent = context.getEventArgs();
		saveEvent.preventDefault();
		}
	}
}	