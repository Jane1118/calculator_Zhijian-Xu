
// var numbers = document.getElementsByClassName('numbers')
// var operators = document.getElementsByClassName('operator');
var keys = document.querySelectorAll('#calculator span');

for(var i = 0; i < keys.length; i++) {
	keys[i].addEventListener('click', keysClicked);
}

 function keysClicked(e){
		var outputElt = document.querySelector('.output');
		var outputVal = outputElt.innerHTML;
		var pressVal = this.innerHTML;
		if(pressVal === 'AC') {
			outputElt.innerHTML = '';
		}
        if(pressVal ==='='){
				outputElt.innerHTML = eval(outputVal);
	       }
		else {
			outputElt.innerHTML += pressVal;
		}
	} 


