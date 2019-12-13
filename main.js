// creare una griglia formata da 6x6 quadratini (anche in html va bene). Ad ogni click su un quadratino parte una chiamata AJAX all'API boolean
// https://flynn.boolean.careers/exercises/api/random/int
// che restituisce un numero intero.
// A seconda del valore restituito dall'API bisogna colorare il quadratino su cui si è cliccato, secondo queste regole:
// se il numero restituito dalle API è <= 5, il quadratino diventa giallo
// se il numero restituito dalle API è > 5, il quadratino diventa verde
// Nome repo: js-jq-ajax-grigliaquad
$(document).ready(function(){
    $('.quadrato').click(function(){
      var that = $(this);
      if (!that.hasClass('yellow') && !that.hasClass('green')) {
        $.ajax({
          'url': 'https://flynn.boolean.careers/exercises/api/random/int',
          'method': 'GET',
          'success': function(data) {
            console.log(data);
            numero = data.response

            console.log('il numero chiamato è ' + numero);
              if (numero <= 5 ) {
                console.log('yellow');
                $(that).addClass('yellow').text(numero);


              } else {
                console.log('green');
                $(that).addClass('green').text(numero)
              }

          },
          'error':function() {

          }
        });

      }

    });

});
