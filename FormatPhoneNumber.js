function FormatPhoneNumber(context)
{
	if( ! IsNull(context)) {
		var phoneNumber = context.getEventSource().getValue();
		if (phoneNumber != null) {
			var scrubbed = phoneNumber.toString().replace(/[^0-9]/g, "");
			//var sevenDigitFormat = /^\(?([0-9]{3})[-. ]?([0-9]{4})$/;
			var tenDigitFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
			var extDigitFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})?([0-9]*)$/;
			
			if (scrubbed.length < 10) {
		       alert("Please enter a phone number including area code");
			}
			else if (scrubbed.length > 14) {
		       alert("Phone number is too long. Please enter a valid phone number");
			   }
			else if (tenDigitFormat.test(scrubbed)) {
				phoneNumber = scrubbed.replace(tenDigitFormat, "($1) $2-$3");
			}
			//else if (sevenDigitFormat.test(scrubbed)) {
			//	phoneNumber = scrubbed.replace(sevenDigitFormat, "$1-$2");
			//}
			else if (extDigitFormat.test(scrubbed)) {
				phoneNumber = scrubbed.replace(extDigitFormat, "($1) $2-$3 x$4");
			}
			context.getEventSource().setValue(phoneNumber);
		}
	}
}	