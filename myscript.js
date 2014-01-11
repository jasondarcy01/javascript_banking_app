	bankPins = [12345, 98765, 10101, 11111]

	function process() {
		var pin = document.getElementById("pin").value;
		var gpin = parseInt(pin);

		for (x = 0; x < 4; x++)
			if (bankPins[x] == gpin) {
				var balance = 1850;
				document.getElementById('amount').innerHTML=" You have an account balance of $" + balance;
				break;
				// if a (True) match is found the "break" exits, so that program works. Otherwise, w/o break, the other array elements will cause a False.
				}
			else
				document.getElementById('amount').innerHTML="The pin you provided is incorrect";
		}



	function calculateLoan(amount,interest, months) {
		
		// var pmt = amount * ( interest / (1 - (1 + interest)^ -tern));
		// M = 100,000 * (.005 / (1 - (1 + .005)^ -360))
		// M = 100,000 * (.005 / (1 - (1.005)^ -360))
		// M = 100,000 * (.005 / (1 - 0.1660419)
		// M = 100,000 * (.005 / .083395)
		// M = 100,000 * .0059955
		// M = 599.55
		var stepOne = (1 + interest);
		var stepTwo = Math.pow(stepOne, -months);
		var pmt = amount * (interest / (1 - stepTwo));

		console.log(pmt);
	}

	calculateLoan(100000,0.005,360);

	