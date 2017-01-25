function rysujChoinke(h){
	for (var i=1; i<=h; i++){
		var star="";
		var n=i;
		for (var j=1; j<=n*2-1; j++){
			star+="*";
		}
		console.log(star);
	}
}

rysujChoinke(3);