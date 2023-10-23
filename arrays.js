// Array ülesanne 23.10.2023


// Esimene punkt.
array = [];

sisend = prompt('Kirjuta siia üks sõna.')
array.push(sisend)
console.log(array)

// Teine punkt.
Vastused = [];
const Arvud = [[2,3], [7,8], [-4, 2], [7,5]]
for (let i = 0; i < Arvud.length; i++){
    Vastused.push(Arvud[i][0] + Arvud[i][1])
}
console.log(Vastused)
