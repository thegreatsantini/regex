'use strict';

var str = `This island is his, it is`;
var regex = /\bis/g //any word that starts with an 'is'
// needs work on this one

/**
 * @param  String str
 * @param  RegExp regex
 * @param  HTMLElement target
 */
const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, str =>
      `<span>${str}</span>`
    );
}
output(str, regex, document.querySelector('pre'));