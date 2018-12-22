const dataKey: string[] = [
  'USD',
  'EUR',
  'SGD',
  'GBP',
  'CHF',
  'JPY',
  'AUD',
  'BDT',
  'BRL',
  'BND'
];

const currencies: {
  [index: string]: string;
} = {
  USD: 'United State Dollar',
  EUR: 'Euro',
  SGD: 'Singapore Dollar',
  GBP: 'Pound Sterling',
  CHF: 'Swiss Franc',
  JPY: 'Japanese Yen',
  AUD: 'Australian Dollar',
  BDT: 'Bangladesh Taka',
  BRL: 'Brazilian Real',
  BND: 'Brunei Dollar'
};

export { dataKey, currencies };
