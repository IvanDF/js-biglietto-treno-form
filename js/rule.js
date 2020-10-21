/***********************************
 * CALCOLATORE COSTO DEL BIGLIETTO
 **********************************/

genera.addEventListener('click', function() {

    //  VARIABILI

    // FORM
    var nome = document.getElementById('nome').value;
    var km = document.getElementById('km').value;
    var eta = document.getElementById('eta').value;

    // BIGLIETTO
    var nomeUtente = document.getElementById('nome-utente');
    var offerta = document.getElementById('sconto');
    var carrozza = document.getElementById('carrozza');
    var codiceCp = document.getElementById('codice-cp');
    var costoTot = document.getElementById('costo-tot')

    // BUTTONS
    var genera = document.getElementById('genera');
    var reset = document.getElementById('reset');

    // CONTROLLO

    // CALCOLO CARROZZA E CODICER CP
    carrozza.innerHTML = Math.floor( Math.random() *10 ) + 1;
    codiceCp.innerHTML = Math.floor( Math.random() * ( 100000 - 90000 ) ) + 90000;

    // CALCOLO COSTO BIGLIETTO

    if ( eta === 'under18') {
        alert('ciao')
    } else if ( eta === 'over18' ) {
        alert('nociao')
    } else if ( eta === 'over65' ) {
        alert('ciaone')
    }

    nomeUtente.innerHTML = nome;
});
