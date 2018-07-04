'use strict';

const str = 'foo foobar foobaz fooboo';
const regex = /foo(bar|baz)/g; // matches foobar and foo baz

console.log(str.replace(regex, '**$1**'))

var str = `800-456-7890
(555) 456-7890
4564567890`;

var regex = /\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;

console.log(str.replace(regex, 'area code: $1'));

const output = (str, regex, target) => {
    target.innerHTML =
        str.replace(regex, str =>
            `<span>${str}</span>`
        );
}
output(str, regex, document.querySelector('pre'));