#! /usr/bin/env node
var forexmm = require('forexmm');

var latest = forexmm.latest;

latest((err,data)=>{
	if(!err){
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
			var shortAndVal = `${element} : ${latest[element]}`;
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
	}
});
