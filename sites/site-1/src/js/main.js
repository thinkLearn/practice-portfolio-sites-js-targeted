// Start with a random color



	var randColor, color = 'rgb(34,34,34)';
	var hexNum = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' ];
	var body = $('body');


	$('.choose__btn').eq(0).on('click', function() {
		if ($('#selectOpt').find('option:selected').attr('value') == 'color') {
			changeColor();
		} else {
			console.log(randColor);
			changeOpacity(randColor);
		}
	});

	$('#selectOpt').change(function(){
        $('.choose__to-change').text(( $(this).find("option:selected").attr('value') ));       
    });

	// Function generate rand color
	function randomColor() {
		// Generate rand num from 0 to f (hex base)
		randColor = '#';

		// Do it 6 times
		for (var i = 0; i < 6; ++i) {
			randColor += hexNum[Math.floor(Math.random() * 16)];
		}
	}

   
	// Write new hex code of color
	function colorCode(hexCode) {
		$('.colorHex').eq(0).text(hexCode);
	}	

	// Function change element color	
	function changeColor() {
		randomColor()	
		color = randColor;
		colorCode(color);
		$(body).css('background-color', color);
	}

	function changeOpacity(color) {
			var num = (Math.random()).toString();
			var colorRgba = 'rgba(' + (parseInt(color.substr(1,2), 16))+ ',' + (parseInt(color.substr(3,2), 16)) + ',' + (parseInt(color.substr(5,2), 16)) + ',' + num + ')';
			console.log(colorRgba);
			$(body).css('background-color', colorRgba);	
		}
	


