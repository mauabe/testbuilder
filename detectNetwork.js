var detectNetwork = function(cardNumber) {


  var prefix1 = cardNumber.substring(0,1);
  var prefix2 = cardNumber.substring(0,2);
  var prefix3 = cardNumber.substring(0,3);
  var prefix4 = cardNumber.substring(0,4);
  var prefix6 = cardNumber.substring(0,6);
  var len = cardNumber.length;

  if ((prefix2 === "38" || prefix2 === "39") && len === 14) {
  	return "Diner\'s Club";
  }
  if ((prefix2 === "34" || prefix2 === "37") && len === 15) {
  	return "American Express";
  }
  if (parseInt(prefix2) >= 51 && parseInt(prefix2) <= 55 && len === 16) {
  	return "MasterCard";
  }
  if ((prefix4 === "4903" || prefix4 === "4905" || prefix4 === "4911" || prefix4 === "4936" ||
  	prefix6 === "564182" || prefix6 === "633110" || prefix4 === "6333" || prefix4 === "6759") &&
  	(len === 16 || len === 18 || len === 19)) {
  	return "Switch";
  }
  if (prefix1 === "4" && (len === 13 || len === 16 || len === 19)){
  	return "Visa";
  }
  if ((prefix4 === "6011" || (parseInt(prefix3) >= 644 && parseInt(prefix3) <= 649) ||
   prefix2 === "65") && (len === 16 || len === 19)) {
  	return "Discover";
  }
  if ((prefix4 === "5018" || prefix4 === "5020" || prefix4 === "5038" || prefix4 === "6304") &&
  	(len >= 12 && len <= 19)) {
  	return "Maestro";
  }
  if (((parseInt(prefix6) >= 622126 && parseInt(prefix6) <= 622925) || 
  	(parseInt(prefix3) >= 624 && parseInt(prefix3) <= 626) || 
  	(parseInt(prefix4) >= 6282 && parseInt(prefix4) <= 6288)) && (len >= 16 && len<= 19)) {
  	return "China UnionPay";
  }

};