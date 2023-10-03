//Ülesanne checkTemp - 2.Okt 2023

temperatuur = []
temp = prompt('Kirjuta siia katla temperatuur 1-60.')
temperatuur.push(temp)

function checkTemp(temp) {
if (temp >= 0 && temp <= 20) {
return -1;
}
else if (temp >= 21 && temp <= 40) {
return 0;
}
else if (temp >= 41 && temp <= 60) {
return 1;
}
}

var tulemus = checkTemp(temperatuur);

if (tulemus === -1) {
    console.log('Katel on liiga külm')
}
else if (tulemus === 0) {
    console.log('Katel on parasjagu soe')
}
else if (tulemus === 1) {
    console.log('Katel on liiga kuum')
}





