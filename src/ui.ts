import * as forexmm from 'forexmm';
import chalk from 'chalk';

import { dataKey, currencies } from './const';

const { latest } = forexmm;

let toMyanmarKyat: string | number = process.argv[2] || 1;
let toMyanmarKyatLocal: string = Number(toMyanmarKyat).toLocaleString('en-US');
toMyanmarKyat = +toMyanmarKyat;

if (isNaN(toMyanmarKyat)) {
  toMyanmarKyatLocal = '1';
  toMyanmarKyat = 1;
}

const display = async () => {
  const data = await latest();
  const { rates } = data;
  console.log(''); //new line;
  dataKey.forEach(element => {
    const fristStrLength: number = 20;
    const val =
      Number(rates[element].replace(/,/g, '')) * Number(toMyanmarKyat);
    const shortAndVal: string = `${toMyanmarKyatLocal} ${element} : ${val.toLocaleString()}`;
    let currenciesName: string = currencies[element];
    let spacesToFill: number = 0;
    let spaces = '';
    if (currenciesName.length < fristStrLength) {
      spacesToFill = fristStrLength - currenciesName.length;
      spaces = '';
      for (var i = 0; i < spacesToFill; i++) {
        spaces += ' ';
      }
    }
    console.log(
      chalk`{greenBright  * ${currenciesName}}${spaces}{greenBright ${shortAndVal}}`
    ); //display
  });
  console.log(''); //new line;
  process.exit(0);
};

export { display };
