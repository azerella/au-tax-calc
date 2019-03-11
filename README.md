# au-tax-calc

> 💵 Individual Australian tax rate given an income for FY2018-2019.

I'm aspiring to make open-source my full-time work. If you like the work that I do, please consider supporting me.

[![Coffee][badge_coffee_donate]](https://www.buymeacoffee.com/adamzerella)
[![PayPal][badge_paypal_donate]](https://www.paypal.me/adamzerella)

## Rate
| Taxable income | Tax on this income |
| --- | --- |
| 0 – $18,200 | Nil |
| $18,201 – $37,000 | 19c for each $1 over $18,200 |
| $37,001 – $90,000 | $3,572 plus 32.5c for each $1 over $37,000 |
| $90,001 – $180,000 | $20,797 plus 37c for each $1 over $90,000 |
| $180,001 and over | $54,097 plus 45c for each $1 over $180,000 |

These tax rates are [calculated by the Australian Taxation Office (ATO).](https://www.ato.gov.au/rates/individual-income-tax-rates/).


## Install

```bash
npm i au-tax-calc
```

## Usage
The output will be a number rounded to two decimal places.

### Module

```javascript
const CalculateTax = require( 'au-tax-calc' );

CalculateTax( 43565 );
// 5705.63
```


## Test

```bash
npm test
```

## Contribute

Don't be scared raise an issue or a pull request! Any contributions, no matter how big or small will land your picture here.

<div style="display:inline;">
  <a href="https://github.com/adamzerella"><img width="64" height="64" src="https://avatars0.githubusercontent.com/u/1501560?s=460&v=4" alt="Adam Zerella"/></a>
</div>

[badge_coffee_donate]: https://adamzerella.com/badges/coffee.svg
[badge_paypal_donate]: https://adamzerella.com/badges/paypal.svg