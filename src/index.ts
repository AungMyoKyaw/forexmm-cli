#! /usr/bin/env node
import * as forexmm from 'forexmm';

import { dataKey, currencies } from './const';

const { latest } = forexmm;

let toMyanmarKyat: string | number = process.argv[2] || 1;
const toMyanmarKyatLocal: string = Number(toMyanmarKyat).toLocaleString();
toMyanmarKyat = Number((toMyanmarKyat + '').replace(/,/g, ''));

(async function() {
  try {
    const data = await latest();
    const { rates } = data;
    dataKey.forEach(element => {
      const fristStrLength: number = 20;
      const val =
        Number(rates[element].replace(/,/g, '')) * Number(toMyanmarKyat);
      const shortAndVal: string = `${toMyanmarKyatLocal} ${element} : ${val.toLocaleString()}`;
      let currenciesName: string = currencies[element];
      let spaceToFill: number = 0;
      if (currenciesName.length < fristStrLength) {
        spaceToFill = fristStrLength - currenciesName.length;
        for (var i = 0; i < spaceToFill; i++) {
          currenciesName += ' ';
        }
      }
      console.log('* ', currenciesName, shortAndVal); //display
    });
    process.exit(0);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
})();
