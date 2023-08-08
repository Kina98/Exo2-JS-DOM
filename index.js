// 1 Sppression de la class 'red' et ajout de la class 'blue'
let reds = document.querySelectorAll('.red');

for (let i = 0; i < reds.length; i++) {
    reds[i].classList.remove('red');
    reds[i].classList.add('blue');
}

// 2 Mettre en italic tous les refrains
let refrains = document.querySelectorAll('.refrain');

for (let i = 0; i < refrains.length; i++) {
    const element = refrains[i];
    element.classList.add('italic');
}

// 3 diminuer la couleur blue en #6495ED
let blues = document.querySelectorAll('.blue');

blues.forEach((element) => {
    element.setAttribute('style', 'background-color: #6495ED; margin: 0px;');
})

// 4