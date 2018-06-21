//Función que muestra splash inicial y segunda página
function splash(param) {
    var time = param;
    setTimeout(function () {
    $('#splashscreen').hide();
    $('.second-image').css('display', 'block');
    }, time);
}

//Funciónes que muestra la clave de los países respectivos al hacer click en su bandera.
$('#mx').click(function(){
    $( "input[value$='Phone number']" ).val( '52' );
});

$('#col').click(function(){
    $( "input[value$='Phone number']" ).val( '57' );
});

$('#peru').click(function(){
    $( "input[value$='Phone number']" ).val( '51' );
});

$('#usa').click(function(){
    $( "input[value$='Phone number']" ).val( '01' );
});

//Función que verifica el número de teléfono
$("#phone").keyup(function(){
    $("#btn-next").removeAttr("disabled");
    var phoneNumber = $("#phone").val();
    
    if(phoneNumber.length == 0 || phoneNumber == null || phoneNumber.length != 12 || phoneNumber != NaN ) {
    $("#btn-next").attr("disabled");
    }
});

//Función que lanza código generado aleatoriamente
$('#btn-next').click(function(){
    $('#phone').val('');
    $('#sign-up').hide();
});





$(document).ready(function(){
    
});