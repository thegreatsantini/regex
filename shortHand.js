'use strict';

const str = `Aeiou %100 55.5%`;
// const regex = /\w/g; // matches all a-z and 0-9 no spaces or symbols
// const regex = /\s/g; // matches only white space
//const regex = /[^\w\s]/g; // matches only symbols
// const regex = /\D/g; // matches everything except digits
const regex = /\S/g; // matches everything execpt white space

const output = (str, regex, target) => {
    target.innerHTML =
        str.replace(regex, str =>
            `<span>${str}</span>`
        );
}
output(str, regex, document.querySelector('pre'));