/***********************************
 * CALCOLATORE COSTO DEL BIGLIETTO
 **********************************/

     //  VARIABILI


    // BIGLIETTO
    var nomeUtente = document.getElementById('nome-utente');
    var offerta = document.getElementById('sconto');
    var carrozza = document.getElementById('carrozza');
    var codiceCp = document.getElementById('codice-cp');
    var costoTot = document.getElementById('costo-tot')

document.getElementById('genera').addEventListener('click', function() {

    // FORM
    var nome = document.getElementById('nome').value;
    var km = document.getElementById('km').value;
    var eta = document.getElementById('eta').value;

    // CONTROLLO

    // CALCOLO CARROZZA E CODICER CP
    carrozza.innerHTML = Math.floor( Math.random() *10 ) + 1;
    codiceCp.innerHTML = Math.floor( Math.random() * ( 100000 - 90000 ) ) + 90000;

    // CALCOLO COSTO BIGLIETTO
    var costoTratta = km * 0.21;

    if ( eta === 'under18') {
        offerta.innerHTML = 'hai diritto allo sconto under 18'
        costoTratta -= costoTratta * 0.20; 
        costoTot.innerHTML = costoTratta.toFixed(2) + ' €';       
    } else if ( eta === 'over18' ) {
        offerta.innerHTML = 'purtroppo non vi sono sconti applicabili'
        costoTot.innerHTML = costoTratta.toFixed(2) + ' €';       
    } else if ( eta === 'over65' ) {
        offerta.innerHTML = 'hai diritto allo sconto over 65'
        costoTratta -= costoTratta * 0.40; 
        costoTot.innerHTML = costoTratta.toFixed(2) + ' €';       

    }

    nomeUtente.innerHTML = nome;
});

document.getElementById('reset').addEventListener( 'click', function() {

    nomeUtente.innerHTML = ''
    offerta.innerHTML = ''
    carrozza.innerHTML = ''
    codiceCp.innerHTML = ''
    costoTot.innerHTML = ''

});

