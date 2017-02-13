#! /usr/bin/env node
var forexmm = require('forexmm');

var latest = forexmm.latest;

var toMyanmarKyat = process.argv[2] || 1;
var toMyanmarKyatLocal = Number(toMyanmarKyat).toLocaleString();
toMyanmarKyat = Number((toMyanmarKyat+'').replace(/,/g,""));

latest.then(data=>{
	var latest = data.rates;
	var dataKey = [
		"USD",
		"EUR",
		"SGD",
		"GBP",
		"CHF",
		"JPY",
		"AUD",
		"BDT",
		"BRL",
		"BND"
	];
	var currencies = {
		"USD": "United State Dollar",
		"EUR": "Euro",
		"SGD": "Singapore Dollar",
		"GBP": "Pound Sterling",
		"CHF": "Swiss Franc",
		"JPY": "Japanese Yen",
		"AUD": "Australian Dollar",
		"BDT": "Bangladesh Taka",
		"BRL": "Brazilian Real",
		"BND": "Brunei Dollar"
	}
	dataKey.forEach(element=>{
		var val = latest[element];
		val = Number(val.replace(/,/g,"")) * toMyanmarKyat;
		var shortAndVal = `${toMyanmarKyatLocal} ${element} : ${val.toLocaleString()}`;
		var currenciesName = currencies[element];
		var fristStrLength = 20;
		var spaceToFill = 0;
		if(currenciesName.length<fristStrLength){
			spaceToFill = fristStrLength - currenciesName.length;
			for(var i=0;i<spaceToFill;i++){
				currenciesName += ' ';
			}
		}
		console.log('* ',currenciesName,shortAndVal);//display
	});
	process.exit(0);
})
.catch(err=>{
	console.log(err.message);
	process.exit(1);
});
