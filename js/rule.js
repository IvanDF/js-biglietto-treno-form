/***********************************
 * CALCOLATORE COSTO DEL BIGLIETTO
 **********************************/

     //  VARIABILI


    // BIGLIETTO
    var nomeUtente = document.getElementById('nome-utente');
    var offerta = document.getElementById('sconto');
    var carrozza = document.getElementById('carrozza');
    var codiceCp = document.getElementById('codice-cp');
    var costoTot = document.getElementById('costo-tot');

    var biglietto = document.getElementById('biglietto');
    
    // BOTTONE GENERA BIGLIETTO
document.getElementById('genera').addEventListener('click', function() {

    // FORM
    var nome = document.getElementById('nome').value;
    var km = document.getElementById('km').value;
    km = parseInt(km)
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

    // DATA TIMBRO
    var data = new Date();
    var gg, mese, anno, ore, min, sec;
    gg = data.getDate() + '/';
    mese = data.getMonth() + 1 + '/';
    anno = data.getFullYear() + ' '; 
    ore = data.getHours() + ':'; 
    min = data.getMinutes() + ':'; 
    sec = data.getSeconds();
    var dataCompleta = gg + mese + anno + ore + min + sec;
    document.getElementById('ora-creazione').innerHTML = dataCompleta

    // SHOW
    if ( !isNaN(nome) ) {
        alert('Nel campo "Nome passeggero" é stato inserito un carattere non valido, prego riprovare');
    } else if ( isNaN(km) == true ) {
        alert('Nel campo "Km tratta" non é stato inserito un numero, prego riprovare')
    } else if ( eta == '' ) {
        alert('Nel campo "Seleziona fascia di etá" non é stato selezionata alcuna opzione, prego riprovare')
    } else {
        biglietto.className = biglietto.classList + " show";
    }
});

document.getElementById('reset').addEventListener( 'click', function() {

    // FORM
    document.getElementById('nome').value = '';
    document.getElementById('km').value = '';
    document.getElementById('eta').value = '';

    // BIGLIETTO
    nomeUtente.innerHTML = ''
    offerta.innerHTML = ''
    carrozza.innerHTML = ''
    codiceCp.innerHTML = ''
    costoTot.innerHTML = ''

    // HIDDEN
    biglietto.className = "biglietto hidden";


});


