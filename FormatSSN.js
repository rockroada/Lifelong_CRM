function FormatSSN(context)
{
if( !IsNull(context)) {
		var ssnField = context.getEventSource()
		var ssn = ssnField.getValue();
	if (ssn != null) {
			var scrubbed = ssn.toString().replace(/[^0-9]/g, "");
			var ssnFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{4})$/;
			
		ssnField.controls.forEach(function (control) {
			if (scrubbed.length != 9) {
			control.setNotification("Enter a Valid Social Security Number");
		} 
			else if (ssnFormat.test(scrubbed)) {
			ssn = scrubbed.replace(ssnFormat, "$1-$2-$3"); 
			control.clearNotification();
                 }
         });		
	}
	else {
		ssnField.controls.forEach(function (control) {
			control.clearNotification();
		});	
	}
}
ssnField.setValue(ssn);		
}		
			
	