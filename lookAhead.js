'use strict';

var str = `foo
foobar
foobaz
fooboo`

//var regex = /foo(?=bar|boo)/g //capture the thing before bar and boo posative look ahead
const regex = /foo(?!bar|boo)/g // capture the foos that dont contain boo or bar


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

output(str, regex, document.querySelector('pre'))