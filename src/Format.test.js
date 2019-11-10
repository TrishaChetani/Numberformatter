import React from 'react';
import ReactDOM from 'react-dom';
import { format }  from './components/Format';

it(' Verification valid input data', () => {
   var amount = Number(100.21)
   var result =  format(amount,"", "")
    expect(format(result)).toEqual("$100.21");
});

it('Verify round off when passed more than two floating point number', () => {
    var amount = "100.211212"
    var val = Number(amount).toFixed(2)
    var result =  format(val,"", "")
    expect(format(result)).toEqual("$100.21");
});

it('Verify when only integer value is passed', () => {
    var amount = "100"
    var val = Number(amount).toFixed(2)
    var result =  format(val,"", "")
    expect(format(result)).toEqual("$100.00");
});

it('Verify when only one integer and float value is passed', () => {
    var amount = "1.1"
    var val = Number(amount).toFixed(2)
    var result =  format(val,"", "")
    expect(format(result)).toEqual("$1.10");
});
