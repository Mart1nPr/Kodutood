// guessTheNumber 09.10.2023

arvutiarv = Math.floor(Math.random() * 10)+1;
console.log(arvutiarv)

sisend = prompt("Sisesta üks number 1-10-ni") 

if (sisend == arvutiarv) {
    console.log('Yay! Arvasid õige numbri ära.')
}
else {
    console.log('vale')
}













