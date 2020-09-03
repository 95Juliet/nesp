/**
 * Assuming
 *  DOM (Document Object Model) already loaded
 *  target is an element with a textual content
 */

 // cerca l'elemento con id target nel documento corrente (DOM) e lo inserisce nella variabile target
 // document è una variabile gestita dal browser
let target = document.getElementById('target');
// settaggio proprietà textContent di target -> è il contenuto dell'elemento target
// con += avrei concatenato 'Current date-time: ' + new Date() all'elemento target
target.textContent = 'Current date-time: ' + new Date();
console.log('hello!');
