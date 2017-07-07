$(function() {

	// identify click
	var expression = '';
	var mainScreen = $('input');

	$('.table__cell').on('click', function() {

		// if num / sign
			// show on input
			// add to expression to calc
		if (!($(this).hasClass('table__cell_empty'))) {
			var input, inputIndexInArr = -1;
			var printable = [ '0','1', '2', '3','4','5','6','7','8','9','.','-','x', '÷', '+' ];
			input = $(this).text();
			inputIndexInArr = printable.indexOf(input);

			if (inputIndexInArr > -1 && printable.indexOf(input) < 10) {
				
				// add to expression
				expression += input;
				
			} 

			else if (input === '.' && expression) {
				
				// check if last character typed is an arithmetic sign
				if ( printable.indexOf(expression[expression.length - 1]) >= 11) {
					expression += input;
				} else {
					// check if there is a point in last number
					var myReg = /[\d\.]+$/;
					var dotReg = /\./;
					var dblPoint = expression.match(myReg);
					var numDot = dblPoint[0].match(dotReg);
					// if there is don't ignore click
					// else add . to the number
					if (!numDot) {
						expression += input;
					}
						
				}

				
			}

			else if (input === '.') {
				expression += input;
			}

			// Prevent sequentially elementary arithmetic symbols + - x ÷
			else if (inputIndexInArr >=11 && expression) {
				// console.log(expression[expression.length - 1]);
				if (printable.indexOf(expression[expression.length - 1]) <= 9) {
					expression += input;
				}
			}

			
			// delete last number if any
			else if (input === 'C' || input === '±') {
				var regLastNum = /[\d\.]+$/;
				var lastNum = expression.match(regLastNum);
				var n;
				if (lastNum && input === 'C') {
					n = expression.lastIndexOf(lastNum);
					expression = expression.substring(0, n);
				} else if (lastNum) {
					n = expression.lastIndexOf(lastNum);
					if (expression[n - 1] === '-') {
						expression = expression.substring(0, n - 1) + lastNum;
					} else {
						expression = expression.substring(0, n) + '-' + lastNum;
					}
				}
			}

			else if (input === 'AC') {
				mainScreen.val('');
				expression = '';
			}

			if (input === '=') {

				// change all x signs to * for multiply
				expression = expression.replace(/x/g, '*');

				// change all ÷ signs to / for division
				expression = expression.replace(/÷/g, '/')

				
				var result = eval(expression);
				
				if (result != parseInt(result)) {
					result = result.toFixed(5);
					result = result.replace(/0+$/, '');
				} 
				
				mainScreen.val(result);
				expression = '';	
				
				
			} else {
				// write on input screen
				mainScreen.val(expression);	
			}
			
		} 
	});

})