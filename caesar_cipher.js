var encrypt = function(str,shift) {
	var newStr = '';
	var charCode = 0;
	
	for(i=0;i<str.length;i++) {
		charCode = str.charCodeAt(i);
		if (charCode >= 97 && charCode <= 122) {
			newStr += String.fromCharCode(((charCode + 3 - 97) % 26) + 97);
		} else if (charCode >= 65 && charCode <= 90) {
			newStr += String.fromCharCode(((charCode + 3 - 65) % 26) + 65);
		} else {
			newStr += str[i];
		}
	}
	
	return newStr;
}
var decrypt = function(str,shift) {
	var newStr = '';
	var charCode = 0;
	
	for(i=0;i<str.length;i++) {
		charCode = str.charCodeAt(i);
		if (charCode >= 97 && charCode <= 122) {
			newStr += String.fromCharCode((((charCode - 3) - 97 + 26) % 26) + 97);
		} else if (charCode >= 65 && charCode <= 90) {
			newStr += String.fromCharCode((((charCode - 3) - 65 + 26) % 26) + 65);
		} else {
			newStr += str[i];
		}
	}
	
	return newStr;
}
var input = prompt("Enter a string.");
input = encrypt(input,3);
alert(input);
alert(decrypt(input,3));
