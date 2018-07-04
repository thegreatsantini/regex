'use strict';

const str = `cat mat bat Hat bats ?at 0at`;
//const regex = /.at/g // any char before lower case 'at'
//const regex = /[^cb]at/g // everything expect 'cat' and 'bat'
const regex = /[a-zA-Z0-9?]at/g // everything in str that ends with at but nothing after 'at'

const output = (str, regex, target) => {
    target.innerHTML =
        str.replace(regex, str =>
            `<span>${str}</span>`
        );
}
output(str, regex, document.querySelector('pre'));