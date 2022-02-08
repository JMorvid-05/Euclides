var numU = 0,
    numD = 0,
    txt = ["¡No se aceptan campos vacíos!", "¡No se permite el 0!"];


function removerCorrecto(letraClase) {
    $("#simbolo" + letraClase).removeClass("fa-check");
    $("#simbolo" + letraClase).removeClass("text-success");
    $("#espacio" + letraClase).removeClass("border-success");
    $("#numero" + letraClase).removeClass("is-valid");
}

function removerExclamacion(letraClase) {
    $("#espacio" + letraClase).removeClass("border-warning");
    $("#simbolo" + letraClase).removeClass("fa-exclamation");
    $("#simbolo" + letraClase).removeClass("text-warning");
    $("#numero" + letraClase).removeClass("border-warning");

}

function removerError(letraClase) {
    $("#simbolo" + letraClase).removeClass("fa-times");
    $("#simbolo" + letraClase).removeClass("text-danger");
    $("#espacio" + letraClase).removeClass("border-danger");
    $("#numero" + letraClase).removeClass("is-invalid");
}

function simboloExclamacion(letraClase) {
    $("#simbolo" + letraClase).addClass("fa-exclamation");
    $("#simbolo" + letraClase).addClass("text-warning");
    $("#espacio" + letraClase).addClass("border-warning");
    $("#numero" + letraClase).addClass("border-warning");
    //$("#btnHallar").prop("disabled", true);
}

function simboloCorrecto(letraClase) {
    $("#simbolo" + letraClase).addClass("fa-check");
    $("#simbolo" + letraClase).addClass("text-success");
    $("#espacio" + letraClase).addClass("border-success");
    $("#numero" + letraClase).addClass("is-valid");
}

function simboloError(letraClase) {
    $("#simbolo" + letraClase).addClass("fa-times");
    $("#simbolo" + letraClase).addClass("text-danger");
    $("#espacio" + letraClase).addClass("border-danger");
    $("#numero" + letraClase).addClass("is-invalid");
}
function revisarNumMenor() {
    numeroU = parseInt(numU);
    numeroD = parseInt(numD);

    if (!(numeroU < 0 || numeroD < 0)) {
        if (numeroD > numeroU) {
            simboloError("D");
            $('.msjErrorT').show();
            return false;
        } else {
            removerError("D");
            simboloCorrecto("D");
            $('.msjErrorT').hide();
            return true;
        }
    }

}


function calcularMCD() {
    dividendo = parseInt(numU);
    divisor = parseInt(numD);
    cociente = 0;
    residuo = 0;
    bool = true;
    while (bool) {
        cociente = parseInt(dividendo / divisor);
        residuo = dividendo % divisor;
        $(".operaciones").append("<p class='resultado'>" + dividendo + "<b> = </b>" + divisor + "<b> x </b> " + cociente + "<b> + </b>" + residuo + "</p>");
        if (residuo == 0) {
            bool = false;
        } else {
            dividendo = divisor;
            divisor = residuo;
        }
    }
    $(".operaciones").append("<p class='resultado'> El M.C.D. (" + numU + "," + numD + ") es: " + divisor + "</p>");
}
//============inicio
simboloExclamacion("U");
simboloExclamacion("D");
$('.msjErrorU').hide();
$('.msjErrorD').hide();
$('.msjErrorT').hide();


//if ($("#hola").hasClass("msjErrorD")) {

//==================
$("#btnHallar").click(function () {
    numeroU = parseInt(numU);
    numeroD = parseInt(numD);
    if (numeroU > 0 && numeroD > 0 && revisarNumMenor()) {
        $(".resultado").remove();
        calcularMCD();
    }

});

$('#numeroU').on('blur', function () {
    numU = $(this).val();
    if (!numU > 0) {
        removerExclamacion("U");
        simboloError("U");
        $(".msjErrorU .txtU").text(txt[0]);
        $('.msjErrorU').show();
    } else if (numU < 1) {
        removerExclamacion("U");
        simboloError("U");
        $(".msjErrorU .txtU").text(txt[1]);
        $('.msjErrorU').show();
    }
    else {
        removerExclamacion("U");
        removerError("U");
        simboloCorrecto("U");
        $('.msjErrorU').hide();
    }


});
$('#numeroD').on('blur', function () {
    numD = $(this).val();
    if (!numD > 0) {
        removerExclamacion("D");
        simboloError("D");
        $(".msjErrorD .txtD").text(txt[0]);
        $('.msjErrorD').show();
    } else if (numD < 1) {
        removerExclamacion("D");
        simboloError("D");
        $(".msjErrorD .txtD").text(txt[1]);
        $('.msjErrorD').show();
    }
    else {
        removerExclamacion("D");
        removerError("D");
        simboloCorrecto("D");
        $('.msjErrorD').hide();
    }


});


$('.numero').on('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
});
var campoU = document.getElementById('numeroU');
campoU.addEventListener('input', function () {
    if (this.value.length > 7)
        this.value = this.value.slice(0, 7);
});
var campoD = document.getElementById('numeroD');
campoD.addEventListener('input', function () {
    if (this.value.length > 7)
        this.value = this.value.slice(0, 7);
});
