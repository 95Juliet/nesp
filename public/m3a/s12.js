let data = [1, 'hello', [true, 42.24]];

console.log('data', data);
console.log('length', data.length);
console.log('last item', data[data.length - 1]);
console.log('item 1 of last item', data[data.length - 1][1]);

data[2] = false;
console.log('data[2]', data[2]);
console.log('data', data);

console.log('Loop on all items');
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

// join: unisce tutti gli elementi e li restituisce come stringa
console.log('joined', data.join());
// toString dà lo stesso risultato del join
console.log('to string', data.toString());

// pop: elimina l'elemento più a destra dell'array. Viene ritornato l'elemento eliminato
console.log('pop', data.pop());
// elimina elemento a sinistra
console.log('shift', data.shift());
console.log('data', data);

// aggiunge elementi a destra
data.push('push1');
data.push('push2');
// aggiunge elementi a sinistra
data.unshift('unshift');
console.log('after two pushes and one unshift', data);

// elimina due elementi dalla posizione 1
data.splice(1, 2);
console.log('splice from 1 of 2 items', data);

// ritorna il valore undefined
console.log('there is no data[5]:', data[5]);
// inserisco alla posizione 5 il valore 42 (la posizione 5 non dovrebbe esistere)
data[5] = 42;
// l'array ha dei buchi
console.log("Now there is a hole in the array ...", data);
console.log('data[3] is missing:', data[3]);