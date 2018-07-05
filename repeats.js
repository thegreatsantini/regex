'use strict';

const str = `http://egghead.io
not a web address
http://
https://egghead.io more`;

// const regex = /https{0,1}:\/\/.{0,1}/g
// const regex = /https{0,1}:\/\/.{1,}/g // match valid addresses
const regex = /https*:\/\/+/g // match valid addresses short cut

const otherStr = 'it was the the thing thing'
const regex = /(\w+)\s?(?=\1)/g
console.log(otherStr.replace(regex, ''))


const output = (str, regex, target) => {
    target.innerHTML =
        str.replace(regex, str =>
            `<span>${str}</span>`
        );
}
output(str, regex, document.querySelector('pre'));