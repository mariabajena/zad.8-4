var a=1,
	h=2;

function getTriangleArea(a, h) {
	if (a<=0 || h<=0) {
		console.log('Nieprawidłowe dane');
	}

	else { //if (a>0 && h>0) ten warunekt jest niepotrzebny, przeciwny wypadek do (a<=0 || h<=0) oznacza to samo
		return a*h/2;
	}
}

console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(10, 6),
	triangle2Area = getTriangleArea(10, 5),
	triangle3Area = getTriangleArea(10, 4);

console.log( triangle1Area + " , " + triangle2Area + " , " + triangle3Area);