alert("Para obtener un codigo de descuento debe aceptar los términos y condiciones.");

var checkbox = document.querySelector("input[name=checkbox]");

var checkbox = addEventListener('change', function() {
    if (checkbox) change(function (e) { 
        e.preventDefault();
        alert("Haga click en obtener su código de descuento")}