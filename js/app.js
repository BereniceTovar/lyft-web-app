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
    $( "input[value$='Choose your country']" ).val( '52' );
});

$('#col').click(function(){
    $( "input[value$='Choose your country']" ).val( '57' );
});

$('#peru').click(function(){
    $( "input[value$='Choose your country']" ).val( '51' );
});

$('#usa').click(function(){
    $( "input[value$='Choose your country']" ).val( '01' );
});

//Función que verifica el número de teléfono
$("#phone").keyup(function(){
    var phoneNumber = $("#phone").val();
    var letters = /^[a-zA-Z]+$/;
    if(phoneNumber.length === 12 && phoneNumber != letters && phoneNumber != NaN) {
    $("#btn-next").removeAttr("disabled");
    }
});


//Función que lanza código generado aleatoriamente**
$('#btn-next').click(function(){
    $('#phone').val('');
    $('#sign-up').hide();


    //Función que lanza números
function randomRage(min, max) {
    return Math.floor(Math.random() *(max - min + 1)) + min;
}

var randomNumbers = randomRage(100, 600);
swal("Your code: ", "LAB-" + randomNumbers, "success");

var randomNumbers2 = randomRage(200, 700);
    //Función que vuelve a enviar el número de 3 digitos
$('#resend-code').click(function(){
    swal("Your code: ", "LAB-" + randomNumbers2, "success");
})

//Función que activa el boton si coinciden el número escrito con la clave

$("#lab-code").keyup(function(){
    var labCode = $('#lab-code').val();
    //$('#lab-code').val('');
    if(labCode == randomNumbers || labCode == randomNumbers2) {
    $("#btn-next2").removeAttr("disabled");
    }
});

});

//Funciones que regresan a menú anterior
$('#first-icon').click(function(){
$('#sign-up').hide();
});

$('#second-icon').click(function(){
$('#sign-up').show();
$('#verify-phone').hide();
});

$('#third-icon').click(function(){
$('#verify-phone').show();
$('#sign-up2').hide();
});

//Función que habilita el último form cuando todos los campos esten llenos
$('#btn-next3').click(function(){
    var inputForm = $(".val-form").val();
    if(inputForm.length > 1 && inputForm != ' ' && $("#gridCheck1").is(':checked')){
        $('#sign-up2').hide();
        $('#third-image').css('display', 'block');
        swal("Congratulations!!", "Your login has been successful :)", "success");
    }
});


//Función click segundo form
$('#btn-next2').click(function(){
    $('#verify-phone').hide();
});

$(document).ready(function(){
    
});