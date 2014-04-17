function FormatSSN(context)
{
	if( ! IsNull(context)) {
		var ssn = context.getEventSource().getValue();
		if (ssn != null) {
			var scrubbed = ssn.toString().replace(/[^0-9]/g, "");
			var ssnFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{4})$/;
			
			
			if (scrubbed.length !=9) {
		       alert("Invalid SSN Number");
			}
			else if (ssnFormat.test(scrubbed)) {
				ssn = scrubbed.replace(ssnFormat, "$1-$2-$3");
			}
		
			context.getEventSource().setValue(ssn);
		}
	}
}	