// Exo 1
let monTab = ['pomme', 'fraise', 'melon', 'citron']
monTab.pop()
console.log(monTab);
monTab.shift()
console.log(monTab);
monTab.push('pamplemousse')
console.log(monTab);
monTab.unshift('lime')
console.log(monTab);
monTab[1].toUpperCase()
console.log(monTab);
// let fraiseUpper = monTab[1].toUpperCase
// console.log(fraiseUpper);
monTab.reverse()
console.log(monTab);

// Exo 2
let chiffres = [4, 5, 2, 1, 3]
chiffres.sort()
console.log(chiffres);
// chiffres.join("-")
// console.log(chiffres);
// chiffres.join("")
// console.log(chiffres);
Number(chiffres.join('-'))

// Exo 3
let valentin = ['objet 1', 'objet 2', 'objet 3', 'objet 4', 'objet 5', 'objet 6','objet 7','objet 8','objet 9','objet 10']
console.log(valentin);
console.log(valentin.length);
console.log(valentin.indexOf('objet 5'));
valentin.splice(3,1)
console.log(valentin);
