var a=1,
	b=1,
	value=1;

value=(a*a) + (2 * a * b) - (b*b);

console.log(value);

if (value<0) {
	console.log('wynik ujemny')
}
	else if (value>0) {
		console.log('wynik dodatni')
	}
	else if (value==0) {
		console.log('wynik=0')
	}