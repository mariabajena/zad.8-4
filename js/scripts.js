var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';

var animal = 'Zielone słonie';
var animal = animal.toUpperCase();

var textCharsAfter = text.replace('Papugi', animal);
console.log(textCharsAfter);

textCharsAfter = textCharsAfter.substr(0,textCharsAfter.length/2)

console.log(textCharsAfter);

